import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { togglePopup } from '../../store/reducers/common/actions';
import { getThemes } from '../../store/reducers/content/middlewares';

import Styles from "./style";

class ContentContainer extends React.Component {
  state = {
    caption: '',
  };

  componentDidMount() {
    this.props.getThemes(this.props.match.params.name);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { technologyList, match } = this.props;
    const { caption } = this.state;

    if (!caption && technologyList) {
      technologyList.forEach(item => item._id === match.params.name &&
        this.setState({ caption: item.name }))
    }

    if (match.url && prevProps.match.url !== match.url) {
      this.props.getThemes(this.props.match.params.name);
      technologyList.forEach(item => item._id === match.params.name &&
        this.setState({ caption: item.name }))
    }
  }

  addTheme = () => {
    this.props.togglePopup(true, 'NEW_THEME');
  };


  openArticle = () => {
    this.props.togglePopup(true, 'SHOW_THEME');
  };

  render() {
    const { themes } = this.props;

    return (
      <div>
        <Styles.Caption>{this.state.caption}</Styles.Caption>
        <Styles.Wrapper flex>
          <Styles.Article addTheme onClick={this.addTheme}>
           <Styles.AddTheme />
          </Styles.Article>
          {!isEmpty(themes) && themes.map(theme => (
            <Styles.Article key={theme._id} onClick={this.openArticle}>
              <Styles.Title>{theme.name}</Styles.Title>
              <Styles.GeneralText>{theme.description}</Styles.GeneralText>
            </Styles.Article>
          ))}

        </Styles.Wrapper>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  technologyList: store.Content.technologyList,
  themes: store.Content.themes
});

const mapDispatchToProps = dispatch => ({
  getThemes: (url) => dispatch(getThemes(url)),
  togglePopup: (boolean, childName) => dispatch(togglePopup(boolean, childName))
});

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentContainer);