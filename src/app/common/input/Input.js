import React from 'react';

import Styles from './style';

export default class Input extends React.Component {
  state = {
    value: ''
  };

  render() {
    const { title } = this.props;
    return (
      <Styles.InputBloc>
        {title && <Styles.Title>{title}</Styles.Title>}
        <Styles.Input
          require={this.props.require}
          placeholder={this.props.placeholder}
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}/>
      </Styles.InputBloc>
    )
  }
}
