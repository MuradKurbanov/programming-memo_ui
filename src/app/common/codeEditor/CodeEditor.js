import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/javascript";

import Styles from './style';

class Iframe extends React.Component {
  ref = React.createRef();
  state = {
    isValid: false
  }

  componentDidMount() {
    const node = this.ref.current.contentDocument;
    node.writeln("<script>" + this.props.example + "</script>");
    if (node.body) {
      node.body.style.fontFamily = 'Roboto, sans-serif';
    }
    node.body && this.setState({ isValid: !!node.body.innerHTML })
    console.clear();
  }

  render() {
    const { isValid } = this.state;
    return (
      <Styles.Iframe isValid={isValid}>
        {isValid ? 'valid' : 'invalid'}
        <iframe
          width='100%'
          height='100%'
          marginHeight={0}
          marginWidth={0}
          title='result'
          ref={this.ref}
        />
      </Styles.Iframe>
    )
  }
}

const CodeEditor = ({onChange, example, isExpand}) => (
  <>
    <AceEditor
      mode='javascript'
      theme="monokai"
      onChange={onChange}
      placeholder='document.write(number);'
      fontSize={14}
      style={{marginTop: '10px', maxHeight: '250px'}}
      width='100%'
      height='100%'
      name="EXAMPLE_CODE"
      editorProps={{$blockScrolling: Infinity}}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      enableSnippets={true}
      value={`${example}`}
      setOptions={{ showLineNumbers: Infinity, tabSize: 2 }}
    />
    {!isExpand &&
      <Iframe
        example={example}
        reset={() => this.forceUpdate()}
        key={Math.random()}
      />
    }
  </>
)
export default CodeEditor;