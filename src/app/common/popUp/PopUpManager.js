import React from 'react';
import { connect } from 'react-redux';

import { togglePopup } from "../../../store/reducers/common/actions";
import { addTheme } from "../../../store/reducers/content/middlewares";
import NewTheme from "./NewTheme";

import Styles from './style'
import ViewTheme from "./ViewTheme";

class PopUpManager extends React.Component {

  getChild = (childName) => {
    const { technologyList, addTheme } = this.props;
    const children = {
      NEW_THEME: <NewTheme technologyList={technologyList} addTheme={addTheme} closePopUp={this.closePopUp} />,
      SHOW_THEME: <ViewTheme closePopUp={this.closePopUp}/>
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
  technologyList: store.Content.technologyList,
  childName: store.Common.childName,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup()),
  addTheme: (theme) => dispatch(addTheme(theme)),
});

export const PopUp = connect(mapStateToProps, mapDispatchToProps)(PopUpManager);