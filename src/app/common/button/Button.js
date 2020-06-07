import React from 'react';

import Styles from "./styles";

const Button = ({handleClick, title}) => {
  return (
    <Styles.Button onClick={handleClick}>{title}</Styles.Button>
  )
};

export default Button;