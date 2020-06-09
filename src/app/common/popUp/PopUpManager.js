import React from 'react';
import { connect } from 'react-redux';

import { togglePopup } from "../../../store/reducers/common/actions";
import { addTheme, removeTheme, editTheme } from "../../../store/reducers/content/middlewares";
import Theme from "./Theme";

import Styles from './style'

class PopUpManager extends React.Component {

  getChild = (childName) => {
    const { addTheme, idTechnology, dataTheme, removeTheme, togglePopup, editTheme } = this.props;
    const children = {
      ADD_THEME:  <Theme idTechnology={idTechnology} addTheme={addTheme} edit closePopUp={this.closePopUp} />,

      OPEN_THEME: <Theme idTechnology={idTechnology} dataTheme={dataTheme} removeTheme={removeTheme}
                         addTheme={addTheme} closePopUp={this.closePopUp} togglePopup={togglePopup}
                         editTheme={editTheme} />,

    };
    return children[`${childName}`]
  };

  closePopUp = () => {
    this.props.togglePopup(false);
  };

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
  dataTheme: store.Content.dataTheme,
  idTechnology: store.Content.technologyPage.idTechnology
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  addTheme: theme => dispatch(addTheme(theme)),
  removeTheme: (id) => dispatch(removeTheme(id)),
  editTheme: (id, theme) => dispatch(editTheme(id, theme))
});

export const PopUp = connect(mapStateToProps, mapDispatchToProps)(PopUpManager);