import React from 'react';
import { Link } from 'react-router-dom';

import { Roots } from '../../../backend/roots';

import Styles from './style';

export class Menu extends React.Component {
  state = {
    isSubMenu: false,
  };

  submenu = () => (
    <Styles.SubMenu>
      {this.props.technologies && this.props.technologies.map(technology => (
        <Styles.Item key={technology._id}>
          <Link to={`/themes/${technology._id}`}>{technology.name}</Link>
        </Styles.Item>
      ))}
    </Styles.SubMenu>
  );

  viewSubmenu = () => this.setState({ isSubMenu: !this.state.isSubMenu });

  render() {
    const { isSubMenu } = this.state;
    return (
      <Styles.Wrapper>
        <Styles.Menu>
          {Roots.map((root, i) => (
            root.subMenu && root.menu ?
            <Styles.Item key={i} onMouseEnter={this.viewSubmenu} onMouseLeave={this.viewSubmenu}>
              <Link to={`${root.path}`}>{root.title}</Link>
              {isSubMenu && this.submenu()}
            </Styles.Item>
            :
            root.menu && <Styles.Item key={i}>
              <Link to={`${root.path}`}>{root.title}</Link>
            </Styles.Item>
          ))}
        </Styles.Menu>
      </Styles.Wrapper>
    )
  }
}
