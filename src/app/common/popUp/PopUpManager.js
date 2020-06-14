import React from 'react';
import { connect } from 'react-redux';

import { togglePopup } from "../../../store/reducers/common/actions";

import Styles from './style'

class PopUpManager extends React.Component {

  childNameEnum = {
    TEST: '<Test />'
  };

  render() {
    const { childName, isOpenPopUp } = this.props;

    return (
      <Styles.Bg open={isOpenPopUp}>
        {childName && this.childNameEnum.childName}
      </Styles.Bg>
    )
  }
}

const mapStateToProps = (store) => ({
  isOpenPopUp: store.Common.popUp.isOpenPopUp,
  childName: store.Common.popUp.childName,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
});

export const PopUp = connect(mapStateToProps, mapDispatchToProps)(PopUpManager);