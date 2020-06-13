import React from 'react';
import { connect } from 'react-redux';

import { togglePopup } from "../../../store/reducers/common/actions";
import { addTheme, removeTheme, updateTheme } from "../../../store/reducers/content/middlewares";
import Theme from "./Theme";

import Styles from './style'

class PopUpManager extends React.Component {

  getChild = (childName) => {
    const { addTheme, idTechnology, theme, removeTheme, updateTheme, togglePopup } = this.props;
    const children = {
      ADD_THEME:  <Theme idTechnology={idTechnology} addTheme={addTheme} togglePopup={togglePopup} />,

      OPEN_THEME: <Theme idTechnology={idTechnology} theme={theme} removeTheme={removeTheme}
                         togglePopup={togglePopup} updateTheme={updateTheme} />,

    };
    return children[`${childName}`]
  };

  render() {
    const { childName, isOpenPopUp } = this.props;

    return (
      <Styles.Bg open={isOpenPopUp}>
        {childName && this.getChild(childName)}
      </Styles.Bg>
    )
  }
}

const mapStateToProps = (store) => ({
  isOpenPopUp: store.Common.popUp.isOpenPopUp,
  childName: store.Common.popUp.childName,
  theme: store.Content.technologyPage.activeTheme,
  idTechnology: store.Content.technologyPage.technology.idTechnology
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  addTheme: theme => dispatch(addTheme(theme)),
  removeTheme: (id) => dispatch(removeTheme(id)),
  updateTheme: (id, theme) => dispatch(updateTheme(id, theme))
});

export const PopUp = connect(mapStateToProps, mapDispatchToProps)(PopUpManager);