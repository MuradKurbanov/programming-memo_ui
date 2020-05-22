import { connect } from 'react-redux';

import { ContentPage } from './ContentPage';

import { togglePopup } from '../../store/reducers/common/actions';

const mapStateToProps = store => ({
  isOpenPopUp: store.Common.isOpenPopUp
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(togglePopup())
});

export const ContentPageContainer = connect(mapStateToProps, mapDispatchToProps)(ContentPage);