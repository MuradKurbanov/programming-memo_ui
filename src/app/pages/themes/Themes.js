import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { getThemes } from '../../../store/reducers/content/middlewares';
import { openDataTheme } from '../../../store/reducers/content/actions';
import { Theme } from './Theme';

import Styles from "./style";

class ThemesContainer extends React.Component {
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


  openTheme = (theme) => {
    if (!theme) {
      if (this.state.themeId) this.setState({ isOpenTheme: true, themeId: '' });
      else this.setState({ isOpenTheme: !this.state.isOpenTheme });
      return;
    }

    if (!this.state.themeId) {
      this.setState({ isOpenTheme: true, themeId: theme['_id'] });
      this.props.openDataTheme(theme);
    }
    else if (theme['_id'] === this.state.themeId) {
      this.setState({ isOpenTheme: false, themeId: '' });
    }
    else {
      this.setState({ isOpenTheme: true, themeId: theme['_id'] });
    }
  };

  render() {
    const { themes } = this.props;
    const { caption, description, isOpenTheme, themeId } = this.state;

    return (
      <Styles.Wrapper>
        <Styles.Flex
          style={{margin: '0 0 100px 0'}}
          justifyContent='flex-start'
          alignItems='flex-end'
        >
          <Styles.Caption textAlign='left'>{caption}</Styles.Caption>
          <div style={{marginLeft: '40px'}}>{description}</div>
        </Styles.Flex>

        {isOpenTheme && !themeId ?
          <Theme /> :
          <Styles.Item onClick={() => this.openTheme('')}>
            Добавить новую тему<span>+</span>
          </Styles.Item>
        }

        {!isEmpty(themes) && themes.map((theme, i, arr) => (
          <div key={theme['_id']}>
            {isOpenTheme && theme['_id'] === themeId ?
              <Theme theme={theme} /> :
              <Styles.Item borderBottom={(i + 1) === arr.length}>
                {theme.name.substring(0,30)}
                <span onClick={() => this.openTheme(theme)}>
                  {theme.description.substring(0,70)}...
                </span>
              </Styles.Item>
            }
          </div>
        ))}
      </Styles.Wrapper>
    )
  }
}

const mapStateToProps = store => ({
  technologies: store.Content.technologies,
  themes: store.Content.technologyPage.technology.themes,
  theme: store.Content.technologyPage.activeTheme,
});

const mapDispatchToProps = dispatch => ({
  getThemes: (idTechnology) => dispatch(getThemes(idTechnology)),
  openDataTheme: (theme) => dispatch(openDataTheme(theme)),
});

export const Themes = connect(mapStateToProps, mapDispatchToProps)(ThemesContainer);
