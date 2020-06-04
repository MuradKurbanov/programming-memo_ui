import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from '../../common/input/Input';
import TextArea from '../../common/textArea/TextArea';
import Button from '../../common/button/Button';
import { addTechnology } from '../../../store/reducers/content/middlewares';

import Styles from "./style";
import CommonStyles from '../style';

class TechnologyCatalogContainer extends React.Component {
  state = {
    name: '',
    description: '',
  };

  handleButton = () => {
    const { name, description } = this.state;

    if (name && description) {
      this.props.addTechnology(name, description);
      this.setState({ name: '', description: '' });
    }

    if (!name) this.setState({ requireName: true });
    else this.setState({ requireName: false });

    if (!description) this.setState({ requireDescription: true });
    else this.setState({ requireDescription: false });
  };

  handleChangeName = (event) => this.setState({ name: event.target.value });

  handleChangeDescription = (event) => this.setState({ description: event.target.value});

  blockForAddingTechnology = () => (
    <Styles.ItemBlock>
      <Input
        require={this.state.requireName}
        placeholder='Название технологии'
        value={this.state.name}
        handleChange={this.handleChangeName}
      />
      <TextArea
        require={this.state.requireDescription}
        placeholder='Описание технологии'
        value={this.state.description}
        handleChange={this.handleChangeDescription}
      />
      <Button handleButton={this.handleButton} title='Сохранить' />
    </Styles.ItemBlock>
  );


  render() {
    const { technologyList } = this.props;
    return (
      <CommonStyles.Wrapper>
        <CommonStyles.Caption>Каталог технологий</CommonStyles.Caption>

        <Styles.CatalogBlock>
          {technologyList && technologyList.map(technology =>
            <Styles.ItemBlock key={technology._id}>
              <Link to={`/technology/${technology._id}`}>
                <Styles.Name>{technology.name}</Styles.Name>
                <Styles.Description>{technology.description}</Styles.Description>
              </Link>
            </Styles.ItemBlock>
          )}

          {this.blockForAddingTechnology()}
        </Styles.CatalogBlock>
      </CommonStyles.Wrapper>
    );
  }
}

const mapStateToProps = store => ({ technologyList: store.Content.technologyList });

const mapDispatchToProps = dispatch => ({
  addTechnology: (name, description) => dispatch(addTechnology(name, description)),
});

export const TechnologyCatalog = connect(mapStateToProps, mapDispatchToProps)(TechnologyCatalogContainer);