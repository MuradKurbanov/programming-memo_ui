import React from "react";

import Styles from "./style";

export default class ViewTheme extends React.Component {
  state = {};

  render() {
    return (
    <Styles.Wrapper>
      <Styles.ClosePop onClick={this.props.closePopUp} />
      <Styles.Title>Добавление темы</Styles.Title>
      <Styles.Description>test</Styles.Description>
      <Styles.Example>test</Styles.Example>
    </Styles.Wrapper>
    )
  }
}