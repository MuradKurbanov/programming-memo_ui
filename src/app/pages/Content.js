import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { togglePopup } from '../../store/reducers/common/actions';
import { getTheme } from '../../store/reducers/content/middlewares';

import Styles from "./style";

class ContentContainer extends React.Component {
  state = {
    openTab: null
  };

  componentDidMount() {
    const url = this.props.location.pathname;
    this.props.getTheme(url);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const url = this.props.location.pathname;

    if (prevProps.isOpenPopUp !== this.props.isOpenPopUp && !this.props.isOpenPopUp) {
      this.setState({ openTab: null });
    }

    if (url && prevProps.location.pathname !== url) {
      this.props.getTheme(url);
    }
  }

  openArticle = (index) => {
    this.setState({ openTab: index });
    this.props.togglePopup();
  };

  render() {
    const { openTab } = this.state;
    const { content } = this.props;

    return (
      <div>
        <Styles.Caption>{!isEmpty(content) && content.caption}</Styles.Caption>
        <Styles.Wrapper flex>

          {!isEmpty(content) && content.themes.map((theme, index) => (
            <Styles.Article open={openTab === index} onClick={() => this.openArticle(index)} key={index}>
              <Styles.Title>{theme.title}</Styles.Title>
              <Styles.GeneralText>{theme.text}</Styles.GeneralText>
              {theme.subThemes && Array.isArray(theme.subThemes) && theme.subThemes.map((subTheme, i) => (
                <Styles.ParagraphBlock key={i}>
                  <Styles.ParagraphTitle>{subTheme.title}</Styles.ParagraphTitle>
                  <Styles.ParagraphText>{subTheme.text}</Styles.ParagraphText>
                  {subTheme.code && <Styles.Code name="test" id="" cols="30" rows="10">{subTheme.code}</Styles.Code>}
                </Styles.ParagraphBlock>
              ))}
            </Styles.Article>
          ))}

        </Styles.Wrapper>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isOpenPopUp: store.Common.isOpenPopUp,
  content: store.Content.content
});

const mapDispatchToProps = dispatch => ({
  getTheme: (url) => dispatch(getTheme(url)),
  togglePopup: () => dispatch(togglePopup())
});

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentContainer);