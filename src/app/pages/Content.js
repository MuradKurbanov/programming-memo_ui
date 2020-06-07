import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { togglePopup } from '../../store/reducers/common/actions';
import { getThemes } from '../../store/reducers/content/middlewares';
import { activeTheme } from  '../../store/reducers/content/actions';

import Styles from "./style";

class ContentContainer extends React.Component {
  state = {
    caption: '',
    description: '',
  };

  componentDidMount() {
    this.props.getThemes(this.props.match.params.name);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { technologies, match } = this.props;
    const { caption, description } = this.state;

    if (prevProps.match.params.name !== match.params.name || !caption || !description) {
      this.props.getThemes(match.params.name);
      technologies.forEach(item => item._id === match.params.name &&
        this.setState({ caption: item.name, description: item.description }))
    }
  }

  addTheme = () => {
    this.props.togglePopup(true, 'NEW_THEME');
  };


  openArticle = (theme) => {
    this.props.togglePopup(true, 'SHOW_THEME');
    this.props.activeTheme(theme);
  };

  render() {
    const { themes } = this.props;

    return (
      <Styles.Wrapper>
        <Styles.Caption>{this.state.caption}</Styles.Caption>
        <Styles.Description>{this.state.description}</Styles.Description>

        <Styles.Catalog>
          <Styles.Article onClick={this.addTheme}>
           <Styles.AddTheme />
          </Styles.Article>
          {!isEmpty(themes) && themes.map(theme => (
            <Styles.Article key={theme._id} onClick={() => this.openArticle(theme)}>
              <Styles.Title>{theme.name}</Styles.Title>
              <Styles.GeneralText>{theme.description}</Styles.GeneralText>
            </Styles.Article>
          ))}
        </Styles.Catalog>
      </Styles.Wrapper>
    )
  }
}

const mapStateToProps = store => ({
  technologies: store.Content.technologies,
  themes: store.Content.technologyPage.themes
});

const mapDispatchToProps = dispatch => ({
  getThemes: (idTechnology) => dispatch(getThemes(idTechnology)),
  togglePopup: (boolean, childName) => dispatch(togglePopup(boolean, childName)),
  activeTheme: (theme) => dispatch(activeTheme(theme)),
});

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentContainer);