import React from "react";
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import AceEditor from "react-ace";

import { togglePopup } from '../../../store/reducers/common/actions';
import TextArea from "../../common/textArea/TextArea";
import Button from "../../common/button/Button";
import Input from "../../common/input/Input";
import {getThemes, removeTheme, updateTheme} from '../../../store/reducers/content/middlewares';
import { openDataTheme } from '../../../store/reducers/content/actions';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";

import Styles from "./style";

class ThemeComponent extends React.Component {
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

  // onChange = newValue => {
  //   const example = new Function(newValue);
  //   example();
  // };

  addOrEditTheme = () => {
    const { name, description, example, subThemes } = this.state;
    return (
      <>
        <Styles.Title>{name}</Styles.Title>
        <Input autoFocus placeholder='Название темы' value={name} handleChange={this.handleChangeName}/>
        <TextArea placeholder='Описание темы' value={description} handleChange={this.handleChangeDescription}/>
        <Styles.Flex justifyContent='flex-start'>
          <AceEditor
            mode="javascript"
            theme="twilight"
            onChange={this.onChange}
            defaultValue={example}
            placeholder='example code'
            fontSize={16}
            style={{marginTop: '20px'}}
            width='800px'
            height='450px'
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
          <div>{this.state.example}</div>
        </Styles.Flex>

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
        <Styles.SubTheme onClick={this.addSubTheme}>
          {/*<Styles.Plus /> */}
          Добавить подтему</Styles.SubTheme>
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
        {/*<TextArea readonly value={example} />*/}
        <Styles.Flex justifyContent='flex-start'>
          <AceEditor
            mode="javascript"
            theme="twilight"
            onChange={this.onChange}
            defaultValue={example}
            placeholder='example code'
            fontSize={16}
            style={{marginTop: '20px'}}
            width='800px'
            height='450px'
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
          <div>{example}</div>
        </Styles.Flex>
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
        {!this.state.isEditTheme && !isEmpty(this.props.theme) ? this.viewTheme() : this.addOrEditTheme()}
      </Styles.Wrapper>
    )
  }
}

const mapStateToProps = store => ({
  technologies: store.Content.technologies,
  themes: store.Content.technologyPage.technology.themes,
  theme: store.Content.technologyPage.activeTheme
});

const mapDispatchToProps = dispatch => ({
  getThemes: (idTechnology) => dispatch(getThemes(idTechnology)),
  togglePopup: (boolean, childName) => dispatch(togglePopup(boolean, childName)),
  updateTheme: (id, theme) => dispatch(updateTheme(id, theme)),
  openDataTheme: (theme) => dispatch(openDataTheme(theme)),
  removeTheme: (id) => dispatch(removeTheme(id)),
});

export const Theme = connect(mapStateToProps, mapDispatchToProps)(ThemeComponent);