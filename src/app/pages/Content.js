import React from "react";
import { connect } from 'react-redux';

import { togglePopup } from '../../store/reducers/common/actions';
import { getTheme } from '../../store/reducers/content/middlewares';
import content from '../../mock/server-interaction';

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
    if (prevProps.isOpenPopUp !== this.props.isOpenPopUp && !this.props.isOpenPopUp) {
      this.setState({ openTab: null });
    }
  }

  openArticle = (index) => {
    this.setState({ openTab: index });
    this.props.togglePopup();
  };

  render() {
    const { openTab } = this.state;

    return (
      <div>
        <Styles.Title>test</Styles.Title>
        <Styles.Wrapper flex>

          {content.serverThemes.map((theme, index) => (
            <Styles.Article open={openTab === index} onClick={() => this.openArticle(index)} key={index}>
              {theme.subThemes.sub ? theme.subThemes.sub.map(paragraf => paragraf.text) : theme.subThemes.text}
            </Styles.Article>
          ))}

        </Styles.Wrapper>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isOpenPopUp: store.Common.isOpenPopUp
});

const mapDispatchToProps = dispatch => ({
  getTheme: (url) => dispatch(getTheme(url)),
  togglePopup: () => dispatch(togglePopup())
});

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentContainer);