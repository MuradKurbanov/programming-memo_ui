import React from 'react';
import { Route } from "react-router-dom";
import { connect } from 'react-redux';

import { Menu } from "./common/menu/Menu";
import { PopUp } from './common/popUp/PopUp';
import { Roots } from '../backend/roots';
import { GlobalStyle, Container } from './style';
import { getTechnologiesList } from "../store/reducers/content/middlewares";

class AppContainer extends React.Component {

  componentDidMount() {
    this.props.getTechnologiesList()
  }

  render() {
    return (
      <Container>
        <Menu technologyList={this.props.technologyList}/>
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
  technologyList: store.Content.technologyList
});

const mapDispatchToProps = dispatch => ({
  getTechnologiesList: () => dispatch(getTechnologiesList()),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);