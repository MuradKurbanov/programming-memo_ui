import React from 'react';

import Button from '../button/Button';
import Input from "../input/Input";
import TextArea from "../textArea/TextArea";

import Styles from "./style";

export default class AddTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      example: ''
    };
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
    const params = {
      ...this.state,
      technology: {
        name: this.state.name,
        idTechnology: this.props.idTechnology
      }
    };
    this.props.addTheme(params);
    this.props.closePopUp();
  };

  render() {
    return (
      <Styles.Wrapper>
        <Styles.ClosePop onClick={this.props.closePopUp} />
        <Styles.Title>Добавление темы</Styles.Title>

        <Input placeholder='Название темы' value={this.state.name} handleChange={this.handleChangeName}/>
        <TextArea placeholder='Описание темы' value={this.state.description} handleChange={this.handleChangeDescription} />
        <TextArea placeholder='Пример кода' value={this.state.example} handleChange={this.handleChangeExample} />
        <Button handleClick={this.addTheme} title='Сохранить' />
      </Styles.Wrapper>
    )
  }
}