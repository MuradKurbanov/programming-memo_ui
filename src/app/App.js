import React from 'react';
import { Route } from "react-router";

import { Menu } from "./common/menu/Menu";
import { PopUp } from './common/popUp/PopUpManager';
import { Roots } from '../backend/roots';
import { GlobalStyle, Container } from './style';

export class App extends React.Component {

  render() {
    return (
      <Container>
        <Menu/>
        {Roots.map((root, i) => (
          <Route key={i} exact path={`${root.path}`} component={root.component}/>
        ))}
        <GlobalStyle />
        <PopUp />
      </Container>
    )
  }
}