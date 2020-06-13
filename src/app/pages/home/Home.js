import React from 'react';
import {connect} from "react-redux";

import { wrapperBackground } from '../../../store/reducers/common/actions';

import Style from './style';

class HomeComponent extends React.Component {
  componentDidMount() {
    this.props.wrapperBackground(true);
  }

  componentWillUnmount() {
    this.props.wrapperBackground(false);
  }

  render() {
    return (
      <Style.Wrapper black>
        <Style.Flex alignItems='flex-end'>
          <Style.Animation>
            test text for view animation on css
          </Style.Animation>
          <Style.Cursor/>
        </Style.Flex>
      </Style.Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  wrapperBackground: (boolean) => dispatch(wrapperBackground(boolean))
});

export const Home = connect(null, mapDispatchToProps)(HomeComponent);