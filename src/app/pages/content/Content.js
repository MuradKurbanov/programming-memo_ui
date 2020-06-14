import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { togglePopup } from '../../../store/reducers/common/actions';
import { getThemes } from '../../../store/reducers/content/middlewares';
import { openDataTheme } from '../../../store/reducers/content/actions';

import Styles from "./style";

class ContentContainer extends React.Component {
  state = {
    caption: '',
    description: '',
  };

  componentDidMount() {
    const { match } = this.props;

    this.props.getThemes(match.params.name);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { technologies, match } = this.props;

    if (prevProps.match.params.name !== match.params.name) {
      this.props.getThemes(match.params.name);

    }

    if (!this.state.caption || prevProps.match.params.name !== match.params.name) {
      technologies.forEach(item => item['_id'] === match.params.name &&
         this.setState({ caption: item.name, description: item.description }))
    }
  }

  addTheme = () => {
    this.props.history.push('/theme');
    // this.props.togglePopup(true, 'ADD_THEME');
  };


  openArticle = (theme) => {
    this.props.history.push('/theme');
    // this.props.togglePopup(true, 'OPEN_THEME');
    this.props.openDataTheme(theme);
  };

  render() {
    const { themes } = this.props;
    const { caption, description } = this.state;

    return (
      <Styles.Wrapper>
        <Styles.Caption textAlign='left'>{caption}</Styles.Caption>
        <Styles.Description>{description}</Styles.Description>

        <Styles.Theme onClick={this.addTheme}>
          Добавит новую тему<span>+</span>

        </Styles.Theme>
        {!isEmpty(themes) && themes.map((theme, i, arr) => (
          <div key={theme['_id']} onClick={() => this.openArticle(theme)}>
            <Styles.Theme borderBottom={(i + 1) === arr.length}>
              {theme.name.substring(0,30)} <span>{theme.description.substring(0,50)}...</span>
            </Styles.Theme>
          </div>
        ))}
      </Styles.Wrapper>
    )
  }
}

const mapStateToProps = store => ({
  technologies: store.Content.technologies,
  themes: store.Content.technologyPage.technology.themes,
});

const mapDispatchToProps = dispatch => ({
  getThemes: (idTechnology) => dispatch(getThemes(idTechnology)),
  togglePopup: (boolean, childName) => dispatch(togglePopup(boolean, childName)),
  openDataTheme: (theme) => dispatch(openDataTheme(theme)),
});

export const Content = connect(mapStateToProps, mapDispatchToProps)(ContentContainer);