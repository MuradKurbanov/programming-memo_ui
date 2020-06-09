import React from 'react';

import Button from '../button/Button';
import Input from "../input/Input";
import TextArea from "../textArea/TextArea";

import Styles from "./style";

export default class Theme extends React.Component {
  state = {
    name: '',
    description: '',
    example: '',
    isEditTheme: false
  };

  componentDidMount() {
    if (this.props.dataTheme) {
      const { name, description, example } = this.props.dataTheme;
      this.setState({ name, description, example });
    }
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleChangeExample = (event) => {
    this.setState({ example: event.target.value });
  };

  addTheme = () => {
    const { idTechnology, dataTheme } = this.props;
    const { name, description, example, isEditTheme } = this.state;

    if (isEditTheme) {
      this.props.editTheme(dataTheme['_id'], { name, description, example, technology: { idTechnology } });
    } else {
      this.props.addTheme({ name, description, example, technology: { idTechnology } });
    }

    this.props.closePopUp();
  };

  editTheme = () => {
    this.setState({ isEditTheme: true });
  };

  removeTheme = () => {
    this.props.removeTheme(this.props.dataTheme['_id']);
  };

  dropPopUp = () => {
    this.setState({ isEditTheme: false });
    this.props.closePopUp()
  };

  inViewMode = () => (
    <>
      <Styles.Description>{this.state.description}</Styles.Description>
      <TextArea readonly value={this.state.example} />
      <Styles.Flex>
        <Button handleClick={this.editTheme} edit title='Редактировать' />
        <Button handleClick={this.removeTheme} remove title='Удалить' />
      </Styles.Flex>
    </>
  );

  render() {
    const { edit } = this.props;
    const { name, description, example, isEditTheme } = this.state;

    return (
      <Styles.Wrapper>
        <Styles.ClosePop onClick={this.dropPopUp} />
        <Styles.Title>{name}</Styles.Title>
        {isEditTheme || edit ?
          <>
            <Input autoFocus placeholder='Название темы' value={name} handleChange={this.handleChangeName}/>
            <TextArea placeholder='Описание темы' value={description} handleChange={this.handleChangeDescription}/>
            <TextArea placeholder='Пример кода' value={example} handleChange={this.handleChangeExample}/>

            <Button handleClick={this.addTheme} title='Сохранить'/>
          </>
          : this.inViewMode()
        }
      </Styles.Wrapper>
    )
  }
}