import React from 'react';

import Styles from "./styles";

const Button = ({handleClick, title, margin, textDecoration, textAlign}) =>
  <Styles.Button
    textDecoration={textDecoration}
    margin={margin}
    textAlign={textAlign}
    onClick={handleClick}
  >
    {title}
  </Styles.Button>;

export default Button;