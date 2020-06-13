import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import { Roots } from '../../../backend/roots';

import Styles from './style';

class MenuComponent extends React.Component {
  state = {
    isSubMenu: false,
  };

  submenu = () => (
    <Styles.SubMenu onMouseLeave={this.viewSubmenu}>
      {this.props.technologies && this.props.technologies.map(technology => (
        <Link key={technology['_id']} to={`/themes/${technology['_id']}`}>{technology.name}</Link>
      ))}
    </Styles.SubMenu>
  );

  viewSubmenu = () => {
    this.setState({ isSubMenu: !this.state.isSubMenu });
  };

  render() {
    const { isSubMenu } = this.state;

    return (
      <Styles.Wrapper black={this.props.isWrapperBlack} menu>
        <Styles.Flex justifyContent='space-between'>
          <Link to='/'>PM</Link>
          <Styles.Flex style={{width: '400px'}} justifyContent='space-between'>
            <Styles.Menu>
              {Roots.map((root, i) => (
                root.subMenu && root.menu ?
                  <Link key={i} onMouseEnter={this.viewSubmenu} onMouseLeave={this.viewSubmenu} to={`${root.path}`}>
                    {root.title}
                  </Link> :
                  root.menu && <Link key={i} to={`${root.path}`}>{root.title}</Link>
              ))}
              {isSubMenu && this.submenu()}
            </Styles.Menu>
            <div>
              {Roots.map((root, i) => root['socialNetwork'] &&
                <Link style={{marginLeft: '20px'}} key={i} to={`${root.path}`}>{root.title}</Link>)}
            </div>
          </Styles.Flex>
        </Styles.Flex>
      </Styles.Wrapper>
    )
  }
}

const mapStateToProps = (store) => ({
  isWrapperBlack: store.Common.isWrapperBlack
});

export const Menu = connect(mapStateToProps)(MenuComponent);

