import React from 'react';

import Styles from './style';

const TextArea = ({require, placeholder, value, readonly, handleChange}) => (
  <Styles.Textarea
    require={require}
    placeholder={placeholder}
    value={value}
    onChange={handleChange}
    readOnly={readonly}
    maxLength='1000'
  />
);
export default TextArea;