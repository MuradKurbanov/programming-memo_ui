import React from "react";

import TextArea from '../textArea/TextArea';
import Button from "../button/Button";

import Styles from "./style";

export default class ViewTheme extends React.Component {
  state = {};

  removeTheme = () => {
    this.props.removeTheme(this.props.activeTheme._id);
  };

  render() {
    const { activeTheme } = this.props;
    return (
    <Styles.Wrapper>
      <Styles.ClosePop onClick={this.props.closePopUp} />

      <Styles.Title>{activeTheme.name}</Styles.Title>

      <Styles.Description>{activeTheme.description}</Styles.Description>

      <TextArea readonly value={activeTheme.example} />

      <Styles.Flex>
        <Button edit title='Редактировать' />
        <Button handleClick={this.removeTheme} remove title='Удалить' />
      </Styles.Flex>
    </Styles.Wrapper>
    )
  }
}