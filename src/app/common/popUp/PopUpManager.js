import React from 'react';
import { connect } from 'react-redux';

import { togglePopup } from "../../../store/reducers/common/actions";
import { addTheme, removeTheme } from "../../../store/reducers/content/middlewares";
import AddTheme from "./AddTheme";

import Styles from './style'
import ViewTheme from "./ViewTheme";

class PopUpManager extends React.Component {

  getChild = (childName) => {
    const { addTheme, idTechnology, activeTheme } = this.props;
    const children = {
      NEW_THEME: <AddTheme idTechnology={idTechnology} addTheme={addTheme} closePopUp={this.closePopUp} />,
      SHOW_THEME: <ViewTheme activeTheme={activeTheme} removeTheme={this.props.removeTheme} closePopUp={this.closePopUp}/>
    };
    return children[`${childName}`]
  };

  closePopUp = () => this.props.togglePopup(false);

  render() {
    const { childName } = this.props;

    return (
      <Styles.Bg open={this.props.isOpenPopUp}>
        {childName && this.getChild(childName)}
      </Styles.Bg>
    )
  }
}

const mapStateToProps = (store) => ({
  isOpenPopUp: store.Common.isOpenPopUp,
  childName: store.Common.childName,
  activeTheme: store.Content.activeTheme,
  idTechnology: store.Content.technologyPage.idTechnology
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  addTheme: theme => dispatch(addTheme(theme)),
  removeTheme: (id) => dispatch(removeTheme(id))
});

export const PopUp = connect(mapStateToProps, mapDispatchToProps)(PopUpManager);