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
      if (this.state.topicId) this.setState({ isOpenTheme: true, topicId: '' });
      else this.setState({ isOpenTheme: !this.state.isOpenTheme });
      return;
    }

    if (!this.state.topicId) {
      this.setState({ isOpenTheme: true, topicId: theme['_id'] });
      this.props.openDataTheme(theme);
    }
    else if (theme['_id'] === this.state.topicId) {
      this.setState({ isOpenTheme: false, topicId: '' });
    }
    else {
      this.setState({ isOpenTheme: true, topicId: theme['_id'] });
    }
  };

  render() {
    const { topics, updateTheme, removeTheme, addTheme, idTechnology } = this.props;
    const { caption, description, isOpenTheme, topicId } = this.state;

    return (
      <Styles.Flex justifyContent='space-between' alignItems='flex-start'>
        <div>
          <Styles.TechnologyName>{caption}</Styles.TechnologyName>
          <Styles.TechnologyDescription>{description}</Styles.TechnologyDescription>

          {isOpenTheme && !topicId ?
            <Styles.WrapperTopic>
              <Styles.iconClose onClick={() => this.handleViewTheme('')} />
              <Topic
                addTheme={addTheme}
                idTechnology={idTechnology}
                handleViewTheme={() => this.handleViewTheme('')}
              />
            </Styles.WrapperTopic>:
            !isOpenTheme ?
              <Styles.Item borderBottom={isEmpty(topics)} onClick={() => this.handleViewTheme('')}>
                Добавить новую тему <Styles.iconAdd />
              </Styles.Item> : null
          }

          {!isEmpty(topics) && topics.map((topic, i, arr) => (
            <div key={topic['_id']}>
              {isOpenTheme && topic['_id'] === topicId ?
                <Styles.WrapperTopic>
                  <Styles.iconClose onClick={() => this.handleViewTheme(topic)} />
                  <Topic
                    topic={topic}
                    updateTheme={updateTheme}
                    removeTheme={removeTheme}
                    idTechnology={idTechnology}
                    handleViewTheme={() => this.handleViewTheme(topic)}
                  />
                </Styles.WrapperTopic>:
                !isOpenTheme ?
                  <Styles.Item
                    onClick={() => this.handleViewTheme(topic)}
                    borderBottom={(i + 1) === arr.length}
                  >
                    {topic.name.substring(0, 30)}
                    <span>
                  {topic.description.substring(0, 50)}
                      {topic.description.length > 50 && '...'}
                </span>
                  </Styles.Item> : null
              }
            </div>
          ))}
        </div>
        <Styles.Right>
          <Styles.SourceName>Источники</Styles.SourceName>
          <Styles.SourceLink>https://learn.javascript.ru/js</Styles.SourceLink>
        </Styles.Right>
      </Styles.Flex>
    )
  }
}

const mapStateToProps = store => ({
  technologies: store.Content.technologies,
  topics: store.Content.technologyPage.activeTechnology.themes,
  topic: store.Content.technologyPage.activeTheme,
  idTechnology: store.Content.technologyPage.activeTechnology.idTechnology
});

const mapDispatchToProps = dispatch => ({
  getThemes: (idTechnology) => dispatch(getThemes(idTechnology)),
  openDataTheme: (topic) => dispatch(openDataTheme(topic)),
  updateTheme: (id, topic) => dispatch(updateTheme(id, topic)),
  removeTheme: (id) => dispatch(removeTheme(id)),
  addTheme: (topic) => dispatch(addTheme(topic))
});

export const Topics = connect(mapStateToProps, mapDispatchToProps)(TopicsContainer);
