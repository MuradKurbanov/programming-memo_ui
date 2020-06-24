import React from 'react';

import Styles from './style';

const Input = ({title, require, placeholder, value, handleChange, autoFocus}) => (
  <Styles.InputBlock>
    {title && <Styles.Title>{title}</Styles.Title>}
    <Styles.Input
      autoFocus={autoFocus}
      require={require}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  </Styles.InputBlock>
);
export default Input;
