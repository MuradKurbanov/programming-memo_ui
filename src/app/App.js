import React from 'react';
import { Route } from "react-router";
import { connect } from 'react-redux';

import { Menu } from "./common/menu/Menu";
import { PopUp } from './common/popUp/PopUpManager';
import { Roots } from '../backend/roots';
import { GlobalStyle, Container } from './style';
import { getTechnologies } from "../store/reducers/content/middlewares";

class AppContainer extends React.Component {

  componentDidMount() {
    this.props.getTechnologies('')
  }

  render() {
    return (
      <Container>
        <Menu technologies={this.props.technologies}/>
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
  technologies: store.Content.technologies
});

const mapDispatchToProps = dispatch => ({
  getTechnologies: (id) => dispatch(getTechnologies(id)),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);