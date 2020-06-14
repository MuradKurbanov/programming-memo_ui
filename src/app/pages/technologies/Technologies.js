import React from "react";
import { connect } from 'react-redux';
import Scrollchor from 'react-scrollchor';

import Input from '../../common/input/Input';
import TextArea from '../../common/textArea/TextArea';
import Button from '../../common/button/Button';
import { addTechnology, updateTechnology, deleteTechnology } from '../../../store/reducers/content/middlewares';

import Styles from "./style";

class TechnologyCatalogContainer extends React.Component {
  state = {
    name: '',
    description: '',
    idTechnology: '',
  };

  handleClick = () => {
    const { name, description, idTechnology } = this.state;

    if (name && !idTechnology) {
      this.props.addTechnology(name, description);
      this.setState({ name: '', description: '' });
    } else {
      this.props.updateTechnology(idTechnology, { name, description });
      this.setState({ name: '', description: '' });
    }

    if (!name) this.setState({ requireName: true });
    else this.setState({ requireName: false });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value});
  };

  open = (path) => {
    this.props.history.push(`/themes/${path}`);
  };

  remove = (id) => {
    this.props.deleteTechnology(id)
  };

  edit = (technology) => {
    const { name, description, _id }= technology;
    this.setState({ idTechnology: _id, name, description });
  };

  blockForAddingTechnology = () =>
    <Styles.TechnoBlock>
      <Input
        require={this.state.requireName}
        placeholder='Название технологии*'
        value={this.state.name}
        handleChange={this.handleChangeName}
      />
      <TextArea
        placeholder='Описание технологии'
        value={this.state.description}
        handleChange={this.handleChangeDescription}
      />
      <Button textAlign='right' margin='30px 0px 0 0' title='Добавить' handleClick={this.handleClick} />
    </Styles.TechnoBlock>;

  render() {
    const { technologies } = this.props;

    return (
      <Styles.Wrapper style={{paddingBottom: '100px'}}>
          <Styles.Left>
            {technologies && technologies.map(technology =>
              <Scrollchor animate={{offset: -280, duration: 500}} key={technology['_id']} to={`${technology['_id']}`}>
                <Styles.TechnoLink>{technology.name}</Styles.TechnoLink>
              </Scrollchor>
            )}
          </Styles.Left>

          <Styles.Right>
            {this.blockForAddingTechnology()}
            {technologies && technologies.map(technology =>
              <Styles.TechnoBlock id={technology['_id']} key={technology['_id']}>
                <Styles.Name onClick={() => this.open(technology['_id'])}>{technology.name}</Styles.Name>
                <Styles.Description>
                  {technology.description}
                </Styles.Description>
                <Styles.Flex>
                  <Button margin='0 20px 0 0' title='Редактировать' handleClick={() => this.edit(technology)} />
                  <Button title='Удалить' handleClick={() => this.remove(technology['_id'])} />
                  <Button margin='0 0 0 510px' title='Открыть' handleClick={() => this.open(technology['_id'])} />
                </Styles.Flex>
              </Styles.TechnoBlock>
            )}
          </Styles.Right>
      </Styles.Wrapper>
    );
  }
}

const mapStateToProps = store => ({ technologies: store.Content.technologies });

const mapDispatchToProps = dispatch => ({
  addTechnology: (name, description) => dispatch(addTechnology(name, description)),
  updateTechnology: (id, technology) => dispatch(updateTechnology(id, technology)),
  deleteTechnology: (id) => dispatch(deleteTechnology(id))
});

export const Technologies = connect(mapStateToProps, mapDispatchToProps)(TechnologyCatalogContainer);