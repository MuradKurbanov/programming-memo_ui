import React from 'react';
import {connect} from "react-redux";

import { wrapperBackground } from '../../../store/reducers/common/actions';

import Style from './style';

class HomeComponent extends React.Component {
  state = {
    contentAnimation: '',
    isFinalAnimation: false,
    counter: 0,
    textForAnimation: [
      'create technology cards', 'add some themes in technology cards',
      'write and verify code online', 'improve your skill', true
    ]
  };

  timeout;

  componentDidMount() {
    this.props.wrapperBackground(true);
    this.timeout = setTimeout(() => this.currentForAnimation(), 1500);
  }

  componentWillUnmount() {
    this.props.wrapperBackground(false);
    clearTimeout(this.timeout);
  }

  currentForAnimation = () => {
    const { textForAnimation, counter } = this.state;

    if (counter < textForAnimation.length - 1) {
      this.setState({
        contentAnimation: textForAnimation[counter],
        counter: counter + 1
      });
      this.timeout = setTimeout(() => {
        this.setState({ contentAnimation: '' });
        this.timeout = setTimeout(() => this.currentForAnimation(), 1000);
      }, 5000);
    }

    else this.setState({ isFinalAnimation: true });
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