import React from 'react';
import { Route } from "react-router";

import { Menu } from "./common/menu/Menu";
import { PopUp } from './common/popUp/PopUpManager';
import { Roots } from '../backend/roots';
import { GlobalStyle, Container, Wrapper } from './style';
import {connect} from "react-redux";

class AppComponent extends React.Component {

  render() {
    return (
      <Container black={this.props.isContainerBlack}>
        <Wrapper>
          <Menu/>
          {Roots.map((root, i) =>
            <Route key={i} exact path={`${root.path}`} component={root.component} />
          )}
        </Wrapper>
        <GlobalStyle />
        <PopUp />
      </Container>
    )
  }
}

const mapStateToProps = (store) => ({
  isContainerBlack: store.Common.isContainerBlack,
});

export const App = connect(mapStateToProps)(AppComponent);