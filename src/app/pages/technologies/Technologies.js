import React from "react";
import { connect } from 'react-redux';

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

    if (name && description && !idTechnology) {
      this.props.addTechnology(name, description);
      this.setState({ name: '', description: '' });
    } else {
      this.props.updateTechnology(idTechnology, { name, description });
      this.setState({ name: '', description: '' });
    }

    if (!name) this.setState({ requireName: true });
    else this.setState({ requireName: false });

    if (!description) this.setState({ requireDescription: true });
    else this.setState({ requireDescription: false });
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
    <Styles.ItemBlock>
      <Input
        require={this.state.requireName}
        placeholder='Название технологии'
        value={this.state.name}
        handleChange={this.handleChangeName}
      />
      <TextArea
        require={this.state.requireDescription}
        placeholder='Описание технологии'
        value={this.state.description}
        handleChange={this.handleChangeDescription}
      />
      <Button title='Сохранить' handleClick={this.handleClick} />
    </Styles.ItemBlock>;

  render() {
    const { technologies } = this.props;

    return (
      <Styles.Wrapper>
        <Styles.Caption>Каталог технологий</Styles.Caption>

        <Styles.CatalogBlock>
          {this.blockForAddingTechnology()}

          {technologies && technologies.map(technology =>
            <Styles.ItemBlock key={technology['_id']}>
              <Styles.Name>{technology.name}</Styles.Name>
              <Styles.Description>{technology.description}</Styles.Description>
              <Button title='Открыть' handleClick={() => this.open(technology['_id'])} />
              <div style={{display: 'flex'}}>
                <Button handleClick={() => this.edit(technology)} title='Редактировать' />
                <Button handleClick={() => this.remove(technology['_id'])} title='Удалить' />
              </div>
            </Styles.ItemBlock>
          )}
        </Styles.CatalogBlock>
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