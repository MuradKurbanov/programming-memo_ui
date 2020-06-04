import React from 'react';
import { connect } from 'react-redux';
import { togglePopup } from "../../../store/reducers/common/actions";

import Styles from './style'

const PopUpWrapper = ({ isOpenPopUp, togglePopup }) => (
  <Styles.Bg open={isOpenPopUp} onClick={togglePopup} />
);

const mapStateToProps = (store) => {
  return {
    isOpenPopUp: store.Common.isOpenPopUp
  }
};

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup())
});

export const PopUp = connect(mapStateToProps, mapDispatchToProps)(PopUpWrapper);