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
    isEdit: false,
  };

  handleAdd = () => {
    const { name, description } = this.state;

    if (name) {
      this.props.addTechnology(name, description);
      this.setState({ name: '', description: '', requireName: false });
    } else this.setState({ requireName: true });
  };

  handleUpdate = () => {
    const { name, description, idTechnology } = this.state;

    this.props.updateTechnology(idTechnology, { name, description });
    this.setState({ isEdit: false, name: '', description: '' });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value});
  };

  handleDeleteTechnology = (id) => {
    this.props.deleteTechnology(id);
    this.setState({ isAlert: false });
  };

  open = (path) => {
    this.props.history.push(`/themes/${path}`);
  };

  handleOpenAlert = () => {
    this.setState({ isAlert: true });
  };

  handleCloseAlert = () => {
    this.setState({ isAlert: false });
  };

  edit = (technology) => {
    const { _id, name, description } = technology;
    this.setState({
      idTechnology: _id, name, description,
      isEdit: true
    });
  };

  closeEdit = () => {
    this.setState({ name: '', description: '', isEdit: false });
  };

  alert = (id) =>
    <Styles.Alert>
      При удалении технологии, так же удаляться все вложеные к технологии темы.
      <Styles.Flex style={{marginTop: '30px'}}>
        <Button textAlign='right' title='Отменить' handleClick={this.handleCloseAlert} />
        <Button textAlign='right' margin='0 0 0 30px' title='Удалить' handleClick={() => this.handleDeleteTechnology(id)} />
      </Styles.Flex>
    </Styles.Alert>;

  addOrEdit = () =>
    <>
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
      {!this.state.isEdit ?
        <Button textAlign='right' margin='30px 0px 0 0' title='Добавить' handleClick={this.handleAdd} /> :
        <Styles.Flex style={{marginTop: '20px'}} justifyContent='flex-start'>
          <Button textAlign='right' title='Изменить' handleClick={this.handleUpdate} />
          <Button textAlign='right' margin='0 0 0 30px' title='Отменить' handleClick={this.closeEdit} />
        </Styles.Flex>
      }
    </>;

  render() {
    const { technologies } = this.props;
    const { isEdit, idTechnology, isAlert } = this.state;

    return (
      <Styles.Wrapper style={{paddingBottom: '100px'}}>
        <Styles.Left>
          {technologies && technologies.map(technology =>
            <Scrollchor animate={{offset: -300, duration: 500}} key={technology['_id']} to={`${technology['_id']}`}>
              <Styles.TechnoLink>{technology.name}</Styles.TechnoLink>
            </Scrollchor>
          )}
        </Styles.Left>

        <Styles.Right>
          <Styles.TechnoBlock>{!isEdit && this.addOrEdit()}</Styles.TechnoBlock>
          {technologies && technologies.map(technology =>
            <Styles.TechnoBlock id={technology['_id']} key={technology['_id']}>
              {isEdit && idTechnology === technology['_id'] ? this.addOrEdit() :
                <>
                  {isAlert && this.alert(technology['_id'])}
                  <Styles.Name onClick={() => this.open(technology['_id'])}>{technology.name}</Styles.Name>
                  <Styles.Description>{technology.description.substring(0,230)}...</Styles.Description>
                  <Styles.Flex>
                    <Button margin='0 20px 0 0' title='Редактировать' handleClick={() => this.edit(technology)} />
                    <Button title='Удалить' handleClick={this.handleOpenAlert} />
                    <Button margin='0 0 0 510px' title='Открыть' handleClick={() => this.open(technology['_id'])} />
                  </Styles.Flex>
                </>
              }
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