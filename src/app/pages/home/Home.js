import React from 'react';
import {connect} from "react-redux";

import { wrapperBackground } from '../../../store/reducers/common/actions';

import Style from './style';

class HomeComponent extends React.Component {
  state = {
    contentAnimation: '',
    isFinalAnimation: false,
  };

  componentDidMount() {
    this.props.wrapperBackground(true);
    setTimeout(() => this.setState({ contentAnimation: 'create technology cards'}), 1000);
    setTimeout(() => this.setState({ contentAnimation: '' }), 5000);
    setTimeout(() => this.setState({ contentAnimation: 'add some themes in technology cards'}), 6000);
    setTimeout(() => this.setState({ contentAnimation: '' }), 10000);
    setTimeout(() => this.setState({ contentAnimation: 'write and verify code online'}), 11000);
    setTimeout(() => this.setState({ contentAnimation: ''}), 15000);
    setTimeout(() => this.setState({ contentAnimation: 'improve your skill'}), 16000);
    setTimeout(() => this.setState({ contentAnimation: ''}), 20000);
    setTimeout(() => this.setState({ isFinalAnimation: true}), 21000);
  }

  componentWillUnmount() {
    this.props.wrapperBackground(false);
  }

  render() {
    return (
      <Style.Wrapper black>
        <Style.Flex justifyContent='flex-start' style={{marginTop: '100px'}}>
          <Style.StaticTitle>Here you can</Style.StaticTitle>
          {this.state.contentAnimation &&
            <Style.Animation>
              &nbsp;{this.state.contentAnimation}
            </Style.Animation>}
          {this.state.isFinalAnimation &&
            <Style.FinalAnimation>
              &nbsp;good luck and console.log("Hello World") <span aria-label='emoji' role="img">🙃</span>
            </Style.FinalAnimation>
          }
          <Style.Cursor />
        </Style.Flex>
      </Style.Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  wrapperBackground: (boolean) => dispatch(wrapperBackground(boolean))
});

export const Home = connect(null, mapDispatchToProps)(HomeComponent);