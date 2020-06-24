import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { getThemes, updateTheme, removeTheme, addTheme } from '../../../store/reducers/content/middlewares';
import { openDataTheme } from '../../../store/reducers/content/actions';
import { Topic } from './Topic';

import Styles from "./style";

class TopicsContainer extends React.Component {
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


  handleViewTheme = (theme) => {
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
    const { themes, updateTheme, removeTheme, addTheme, idTechnology } = this.props;
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
          <Styles.WrapperTopic>
            <Styles.iconClose onClick={() => this.handleViewTheme('')} />
            <Topic
              addTheme={addTheme}
              idTechnology={idTechnology}
              handleViewTheme={() => this.handleViewTheme('')}
            />
          </Styles.WrapperTopic>:
          !isOpenTheme ?
            <Styles.Item onClick={() => this.handleViewTheme('')}>
              Добавить новую тему <Styles.iconAdd />
            </Styles.Item> : null
        }

        {!isEmpty(themes) && themes.map((theme, i, arr) => (
          <div key={theme['_id']}>
            {isOpenTheme && theme['_id'] === themeId ?
              <Styles.WrapperTopic>
                <Styles.iconClose onClick={() => this.handleViewTheme(theme)} />
                <Topic
                  theme={theme}
                  updateTheme={updateTheme}
                  removeTheme={removeTheme}
                  idTechnology={idTechnology}
                  handleViewTheme={() => this.handleViewTheme(theme)}
                />
              </Styles.WrapperTopic>:
              !isOpenTheme ?
              <Styles.Item
                onClick={() => this.handleViewTheme(theme)}
                borderBottom={(i + 1) === arr.length}
              >
                {theme.name.substring(0, 30)}
                <span>{theme.description.substring(0, 80)}...</span>
              </Styles.Item> : null
            }
          </div>
        ))}
      </Styles.Wrapper>
    )
  }
}

const mapStateToProps = store => ({
  technologies: store.Content.technologies,
  themes: store.Content.technologyPage.activeTechnology.themes,
  theme: store.Content.technologyPage.activeTheme,
  idTechnology: store.Content.technologyPage.activeTechnology.idTechnology
});

const mapDispatchToProps = dispatch => ({
  getThemes: (idTechnology) => dispatch(getThemes(idTechnology)),
  openDataTheme: (theme) => dispatch(openDataTheme(theme)),
  updateTheme: (id, theme) => dispatch(updateTheme(id, theme)),
  removeTheme: (id) => dispatch(removeTheme(id)),
  addTheme: (theme) => dispatch(addTheme(theme))
});

export const Topics = connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
