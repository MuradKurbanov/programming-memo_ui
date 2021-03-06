import React from "react";
import { isEmpty } from 'lodash';

import CodeEditor from '../../common/codeEditor/CodeEditor';
import TextArea from "../../common/textArea/TextArea";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";

import Styles from "./style";

export class Topic extends React.Component {
  state = {
    name: '',
    description: '',
    example: '',
    subThemes: [],
    isEditTheme: false,
  };

  componentDidMount() {
    if (!isEmpty(this.props.topic)) {
      const { name, description, example, subThemes } = this.props.topic;
      this.setState({ name, description, example, subThemes });
    }
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  handleChangeSubName = (event, id) => {
    this.setState({
      subThemes: this.state.subThemes.map((subTheme, i) => i === id ?
        { ...subTheme, subName: event.target.value } : subTheme)
    })
  };

  handleChangeSubDescription = (event, id) => {
    this.setState({
      subThemes: this.state.subThemes.map((subTheme, i) => i === id ?
        { ...subTheme, subDescription: event.target.value } : subTheme)
    })
  };

  changeCodeEditor = (...args) => {
    if (args[2]) this.setState({
      subThemes: this.state.subThemes.map((subTheme, i) => i === args[1] ?
        { ...subTheme, subExample: args[0] } : subTheme)})

    else this.setState({ example: args[0] });
  }

  save = () => {
    const { name, description, example, subThemes } = this.state;
    const { idTechnology, topic, addTheme, updateTheme, handleViewTheme } = this.props;

    const dataForSend = {
      name, description, example,
      technology: { idTechnology },
      subThemes: subThemes.filter(subTheme => subTheme.subName || subTheme.subDescription || subTheme.subExample !== '')
    };

    if (topic) updateTheme(topic['_id'], dataForSend);
    else addTheme(dataForSend);

    handleViewTheme();
  };

  addSubTheme = () => {
    this.setState({ subThemes: [...this.state.subThemes, { subName: '', subDescription: '', subExample: '' }] });
  };

  addOrEditTheme = () => (
    <Styles.Topic>
      <Input autoFocus placeholder='Название темы' value={this.state.name} handleChange={this.handleChangeName}/>
      <TextArea placeholder='Описание темы' value={this.state.description} handleChange={this.handleChangeDescription}/>
      <CodeEditor onChange={this.changeCodeEditor} example={this.state.example} />

      {this.state.subThemes && this.state.subThemes.map((subTheme, i) =>
        <div key={i}>
          <Input
            autoFocus placeholder='Название подтемы' value={subTheme.subName}
            handleChange={event => this.handleChangeSubName(event, i)} />
          <TextArea
            placeholder='Описание подтемы' value={subTheme.subDescription}
            handleChange={event => this.handleChangeSubDescription(event, i)} />
          <CodeEditor isShowEditor onChange={newValue => this.changeCodeEditor(newValue, i, true)} example={subTheme.subExample} />
        </div>
      )}
      <Styles.Flex justifyContent='space-between'>
        <Styles.SubTheme onClick={this.addSubTheme}>
          Добавить подтему
        </Styles.SubTheme>
        <Button handleClick={this.save} title='Сохранить'/>
      </Styles.Flex>
    </Styles.Topic>
  );

  viewTheme = () => {
    const { name, description, subThemes } = this.state;
    const { topic, removeTheme, handleViewTheme } = this.props;
    const updateTheme = () => this.setState({ isEditTheme: true });
    const handleRemoveTheme = () => {
      removeTheme(topic['_id']);
      handleViewTheme();
    }
    return (
      <Styles.Topic>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Description>{description}</Styles.Description>
        <CodeEditor onChange={this.changeCodeEditor} example={this.state.example} />
        {subThemes && subThemes.map((subTheme, i) =>
          <div key={i}>
            <Styles.Name>{subTheme.subName}</Styles.Name>
            <Styles.Description>{subTheme.subDescription}</Styles.Description>
            <CodeEditor isShowEditor onChange={newValue => this.changeCodeEditor(newValue, i, true)} example={subTheme.subExample} />
          </div>
        )}
        <Styles.Flex justifyContent='space-between'>
          <Button handleClick={updateTheme} edit title='Редактировать' />
          <Button handleClick={handleRemoveTheme} remove title='Удалить' />
        </Styles.Flex>
      </Styles.Topic>
    )
  };

  render() {
    return isEmpty(this.props.topic) || this.state.isEditTheme ? this.addOrEditTheme() : this.viewTheme()
  }
}
