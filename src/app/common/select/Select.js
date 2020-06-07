import React from 'react';

import Styles from './style';

const Select  = ({options, option, handleChange, title}) => (
  <Styles.SelectBlock>
    {title && <Styles.Title>{title}</Styles.Title>}
    <select value={option} onChange={handleChange}>
      {options && options.map(option => (
        <option key={option._id}>{option.name}</option>
      ))}
    </select>
  </Styles.SelectBlock>
);

export default Select