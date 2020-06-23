import React from "react";
import { isEmpty } from 'lodash';

// ACE CODE_EDITOR
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";

import TextArea from "../../common/textArea/TextArea";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";

import Styles from "./style";

export class Theme extends React.Component {
  state = {
    name: '',
    description: '',
    example: 'console.log("hi")',
    subThemes: [],
    isEditTheme: false,
  };

  componentDidMount() {
    if (!isEmpty(this.props.theme)) {
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

  // handleChangeSubExample = (event, id) => {
  //   this.setState({
  //     subThemes: this.state.subThemes.map((subTheme, i) => i === id ?
  //       { ...subTheme, subExample: event.target.value } : subTheme)
  //   })
  // };

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

  codeEditor = () => (
    <>
      <AceEditor
        mode='javascript'
        theme="monokai"
        onChange={this.onChange}
        defaultValue={this.state.example}
        placeholder='example code'
        fontSize={14}
        style={{marginTop: '20px'}}
        width='100%'
        height='250px'
        name="EXAMPLE_CODE"
        editorProps={{ $blockScrolling: Infinity }}
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
        setOptions={{
          showLineNumbers: Infinity,
          tabSize: 2,
        }}
      />
      <Styles.Example>{this.state.example}</Styles.Example>
    </>
  )

  addOrEditTheme = () => (
    <Styles.Theme>
      <Input autoFocus placeholder='Название темы' value={this.state.name} handleChange={this.handleChangeName}/>
      <TextArea placeholder='Описание темы' value={this.state.description} handleChange={this.handleChangeDescription}/>
      {this.codeEditor()}

      {this.state.subThemes && this.state.subThemes.map((subTheme, i) =>
        <div key={i}>
          <Input
            autoFocus placeholder='Название подтемы' value={subTheme.subName}
            handleChange={event => this.handleChangeSubName(event, i)} />
          <TextArea
            placeholder='Описание подтемы' value={subTheme.subDescription}
            handleChange={event => this.handleChangeSubDescription(event, i)} />
          {this.codeEditor()}
        </div>
      )}
      <Styles.Flex justifyContent='space-between'>
        <Styles.SubTheme onClick={this.addSubTheme}>
          Добавить подтему
        </Styles.SubTheme>
        <Button handleClick={this.save} title='Сохранить'/>
      </Styles.Flex>
    </Styles.Theme>
  );

  viewTheme = () => {
    const { name, description, subThemes } = this.state;
    const updateTheme = () => this.setState({ isEditTheme: true });
    const removeTheme = () => this.props.removeTheme(this.props.theme['_id']);
    return (
      <Styles.Theme>
        <Styles.Title>{name}</Styles.Title>
        {description}
        {this.codeEditor()}
        {subThemes && subThemes.map((subTheme, i) =>
          <div key={i}>
            <Styles.Title>{subTheme.subName}</Styles.Title>
            <Styles.Description>{subTheme.subDescription}</Styles.Description>
            {this.codeEditor()}
          </div>
        )}
        <Styles.Flex justifyContent='space-between'>
          <Button handleClick={updateTheme} edit title='Редактировать' />
          <Button handleClick={removeTheme} remove title='Удалить' />
        </Styles.Flex>
      </Styles.Theme>
    )
  };

  render() {
    return isEmpty(this.props.theme) ? this.addOrEditTheme() : this.viewTheme()
  }
}
