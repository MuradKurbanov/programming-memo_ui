import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

import Button from '../button/Button';
import Input from "../input/Input";
import TextArea from "../textArea/TextArea";

import Styles from "./style";

export default class Theme extends React.Component {
  state = {
    name: '',
    description: '',
    example: 'console.log("hi")',
    subThemes: [],
    isEditTheme: false,
  };

  componentDidMount() {
    if (this.props.theme) {
      const { name, description, example, subThemes } = this.props.theme;
      this.setState({ name, description, example, subThemes });
    }
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  // handleChangeExample = (event) => {
  //   this.setState({ example: event.target.value });
  // };

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

  handleChangeSubExample = (event, id) => {
    this.setState({
      subThemes: this.state.subThemes.map((subTheme, i) => i === id ?
        { ...subTheme, subExample: event.target.value } : subTheme)
    })
  };

  save = () => {
    const { name, description, example, subThemes } = this.state;
    const { idTechnology, theme } = this.props;

    const dataForSend = {
      name, description, example,
      technology: { idTechnology },
      subThemes: subThemes.filter(subTheme => subTheme.subName || subTheme.subDescription || subTheme.subExample !== '')
    };

    if (theme) this.props.updateTheme(theme['_id'], dataForSend);
    else this.props.addTheme(dataForSend);
  };

  addSubTheme = () => {
    this.setState({ subThemes: [...this.state.subThemes, { subName: '', subDescription: '', subExample: '' }] });
  };

  runCode = () => {
    const example = new Function(this.state.code);
    example();
  };

  onChange = (newValue) => {
    console.log("change", newValue);
  };

  addOrEditTheme = () => {
    const { name, description, example, subThemes } = this.state;

    return (
      <>
        <Styles.Title>{name}</Styles.Title>
        <Input autoFocus placeholder='Название темы' value={name} handleChange={this.handleChangeName}/>
        <TextArea placeholder='Описание темы' value={description} handleChange={this.handleChangeDescription}/>
        <AceEditor
          mode="javascript"
          theme="monokai"
          onChange={this.onChange}
          defaultValue={example}
          placeholder='Пример кода'
          fontSize={16}
          style={{marginTop: '20px'}}
          width='100%'
          height='450px'
          name="EXAMPLE_CODE"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />

        <Button title='run' handleClick={this.runCode} />

        {/*<TextArea placeholder='Пример кода' value={example} handleChange={this.handleChangeExample}/>*/}

          {subThemes && subThemes.map((subTheme, i) =>
          <div key={i}>
            <Input
              autoFocus placeholder='Название подтемы' value={subTheme.subName}
              handleChange={event => this.handleChangeSubName(event, i)} />
            <TextArea
              placeholder='Описание подтемы' value={subTheme.subDescription}
              handleChange={event => this.handleChangeSubDescription(event, i)} />
            <TextArea
              placeholder='Пример кода' value={subTheme.subExample}
              handleChange={event => this.handleChangeSubExample(event, i)} />
          </div>)}
        <Styles.SubTheme onClick={this.addSubTheme}><Styles.Plus /> Добавить подтему</Styles.SubTheme>
        <Button handleClick={this.save} title='Сохранить'/>
      </>
    )
  };

  viewTheme = () => {
    const { name, description, example, subThemes } = this.state;
    const updateTheme = () => this.setState({ isEditTheme: true });
    const removeTheme = () => this.props.removeTheme(this.props.theme['_id']);
    return (
      <>
        <Styles.Title>{name}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
        <TextArea readonly value={example} />
        {subThemes && subThemes.map((subTheme, i) =>
          <div key={i}>
            <Styles.Title>{subTheme.subName}</Styles.Title>
            <Styles.Description>{subTheme.subDescription}</Styles.Description>
            <TextArea readonly value={subTheme.subExample} />
          </div>
        )}
        <Styles.Flex>
          <Button handleClick={updateTheme} edit title='Редактировать' />
          <Button handleClick={removeTheme} remove title='Удалить' />
        </Styles.Flex>
      </>
    )
  };

  render() {
    return (
      <Styles.Wrapper>
        <Styles.ClosePop onClick={this.props.togglePopup} />
        {!this.state.isEditTheme && this.props.theme ? this.viewTheme() : this.addOrEditTheme()}
      </Styles.Wrapper>
    )
  }
}