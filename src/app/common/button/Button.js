import React from 'react';

import Styles from "./styles";

const Button = ({handleClick, title}) => <Styles.Button onClick={handleClick}>{title}</Styles.Button>;

export default Button;