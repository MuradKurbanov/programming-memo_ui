import React from 'react';

import Button from '../button/Button';
import Input from "../input/Input";
import TextArea from "../textArea/TextArea";
import Select from '../select/Select';

import Styles from "./style";

export default class NewTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technology: this.props.technologyList[0],
      name: '',
      description: '',
      example: ''
    };
  }

  handleChangeTechnology = (event) => {
    this.setState({ technology: event.target.value });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleChangeExample = (event) => {
    this.setState({ example: event.target.value });
  };

  saveTheme = () => {
    const params = {
      ...this.state,
      technology: {
        name: this.state.technology.name,
        _id: this.state.technology._id
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

        <Select mainOption={this.state.technology.name} handleChange={this.handleChangeTechnology} options={this.props.technologyList} />
        <Input placeholder='Название темы' value={this.state.name} handleChange={this.handleChangeName}/>
        <TextArea placeholder='Описание темы' value={this.state.description} handleChange={this.handleChangeDescription}/>
        <TextArea placeholder='Пример кода' value={this.state.example} handleChange={this.handleChangeExample}/>
        <Button handleClick={this.saveTheme} title='Сохранить' />
      </Styles.Wrapper>
    )
  }
}