import React from "react";
import { connect } from 'react-redux';

import {getTechnologiesList, addTechnology} from '../../store/reducers/content/middlewares';

import Styles from "./style";

class TechnologyCatalogContainer extends React.Component {
  state = {
    modalForSaveTechnology: false,
    nameTechnology: '',
  };

  componentDidMount() {
    this.props.getTechnologiesList()
  }

  handleAddTechnology = () => {
    this.setState({ modalForSaveTechnology: true })
  };

  handleSaveTechnology = () => {
    this.props.addTechnology(this.state.nameTechnology);
    this.setState({ modalForSaveTechnology: false })
  };

  handleChangeNameTechnology = (event) => {
    this.setState({nameTechnology: event.target.value});
  };

  render() {
    const { modalForSaveTechnology } = this.state;
    const { technologyList } = this.props;
    return (
      <Styles.Wrapper flex>
        {technologyList && technologyList.map(technology => (
          <div key={technology._id}>{technology.name}</div>
        ))}
        {
          !modalForSaveTechnology ?
          <Styles.addBtn onClick={this.handleAddTechnology}>Добавить</Styles.addBtn>
          :
          <Styles.addTechnologyBlock>
            <Styles.Input type="text" value={this.state.nameTechnology} onChange={this.handleChangeNameTechnology} />
            <Styles.addBtn onClick={this.handleSaveTechnology}>Сохранить</Styles.addBtn>
          </Styles.addTechnologyBlock>
        }
          </Styles.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  technologyList: store.Content.technologyList
});

const mapDispatchToProps = dispatch => ({
  getTechnologiesList: () => dispatch(getTechnologiesList()),
  addTechnology: (name) => dispatch(addTechnology(name))
});

export const TechnologyCatalog = connect(mapStateToProps, mapDispatchToProps)(TechnologyCatalogContainer);