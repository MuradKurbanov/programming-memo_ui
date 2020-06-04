import React from 'react';

import Styles from './style';

export default class TextArea extends React.Component {
  state = {
    value: ''
  };

  render () {
    return (
      <div>
        <Styles.Textarea
          require={this.props.require}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}