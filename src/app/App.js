import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import { Menu } from "./menu/Menu";
import { PopUp } from './common/PopUp/PopUp';
import { Roots } from '../backend/roots';
import { GlobalStyle, Container } from './style';

class AppContainer extends React.Component {
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

const mapStateToProps = store => ({
  store: store
});

export const App = connect(mapStateToProps)(AppContainer);