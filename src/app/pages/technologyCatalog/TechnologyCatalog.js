import React from "react";
import { connect } from 'react-redux';

import { getTechnologiesList, addTechnology } from '../../../store/reducers/content/middlewares';

import Styles from "./style";
import CommonStyles from '../style';

class TechnologyCatalogContainer extends React.Component {
  state = {
    name: '',
    description: '',
  };

  componentDidMount() {
    this.props.getTechnologiesList()
  }

  handleSaveTechnology = () => {
    const { name, description } = this.state;
    this.props.addTechnology(name, description);
  };

  handleChangeNameTechnology = (event) => {
    this.setState({name: event.target.value});
  };

  handleChangeDescriptionTechnology = (event) => {
    this.setState({description: event.target.value});
  };

  render() {
    const { technologyList } = this.props;
    return (
      <CommonStyles.Wrapper>
        <CommonStyles.Caption>Каталог технологий</CommonStyles.Caption>

        <Styles.CatalogBlock>
          {technologyList && technologyList.map(technology =>
            <Styles.ItemBlock key={technology._id}>{technology.name}</Styles.ItemBlock>)}
            <div style={{width: '500px', margin: '20px 50px'}}>
              <Styles.Input type="text" value={this.state.name} onChange={this.handleChangeNameTechnology}/>
              <Styles.Textarea value={this.state.description} onChange={this.handleChangeDescriptionTechnology} />
              <Styles.AddBtn onClick={this.handleSaveTechnology}>Сохранить</Styles.AddBtn>
            </div>
        </Styles.CatalogBlock>
      </CommonStyles.Wrapper>
    );
  }
}

const mapStateToProps = store => ({
  technologyList: store.Content.technologyList
});

const mapDispatchToProps = dispatch => ({
  getTechnologiesList: () => dispatch(getTechnologiesList()),
  addTechnology: (name, description) => dispatch(addTechnology(name, description)),
});

export const TechnologyCatalog = connect(mapStateToProps, mapDispatchToProps)(TechnologyCatalogContainer);