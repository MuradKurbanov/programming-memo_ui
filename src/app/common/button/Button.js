import React from 'react';

import Styles from "./styles";

const Button = ({handleButton, title}) => {
  return (
    <Styles.Button onClick={handleButton}>{title}</Styles.Button>
  )
};

export default Button;