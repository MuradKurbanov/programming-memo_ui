import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { togglePopup } from '../../store/reducers/common/actions';
import { getThemes } from '../../store/reducers/content/middlewares';

import Styles from "./style";

class ContentContainer extends React.Component {
  state = {
    openTab: null,
    caption: '',
  };

  componentDidMount() {
    this.props.getThemes(this.props.match.url);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { technologyList, match } = this.props;
    const { caption } = this.state;

    if (!caption && technologyList) {
      technologyList.forEach(item => item._id === match.params.name &&
        this.setState({ caption: item.name }))
    }

    if (prevProps.isOpenPopUp !== this.props.isOpenPopUp && !this.props.isOpenPopUp) {
      this.setState({ openTab: null });
    }

    if (match.url && prevProps.match.url !== match.url) {
      this.props.getThemes(match.url);
      technologyList.forEach(item => item._id === match.params.name &&
        this.setState({ caption: item.name }))
    }
  }

  openArticle = (index) => {
    this.setState({ openTab: index });
    this.props.togglePopup();
  };

  render() {
    const { openTab, caption } = this.state;
    const { content } = this.props;

    return (
      <div>
        <Styles.Caption>{caption}</Styles.Caption>
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
  technologyList: store.Content.technologyList,
  isOpenPopUp: store.Common.isOpenPopUp,
  content: store.Content.content
});

const mapDispatchToProps = dispatch => ({
  getThemes: (url) => dispatch(getThemes(url)),
  togglePopup: () => dispatch(togglePopup())
});

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentContainer);