import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import { getTechnologies } from "../../../store/reducers/content/middlewares";
import { Roots } from '../../../backend/roots';

import Styles from './style';

class MenuComponent extends React.Component {
  componentDidMount() {
    this.props.getTechnologies('');
  }

  subMenu = (links) => (
    <Styles.SubMenu left={-180} onMouseEnter={this.viewSubmenu} onMouseLeave={this.hideSubmenu}>
      {links && links.map(link => (
        <Link key={link['_id']} to={`/topics/${link['_id']}`}>{link.name}</Link>
      ))}
    </Styles.SubMenu>
  );

  viewSubmenu = () => {
    this.setState({ isSubMenu: true });
  };

  hideSubmenu = () => {
    this.setState({ isSubMenu: false });
  };

  render() {
    const { technologies } = this.props;

    return (
      <Styles.Menu>
        <Link to='/'>PM</Link>
        <Styles.Roots>
          {Roots.map((root, i) => (
            root.subMenu && root.menu ?
              <Link key={i} onMouseEnter={this.viewSubmenu} onMouseLeave={this.hideSubmenu} to={`${root.path}`}>
                {root.title}
              </Link> :
              root.menu && <Link key={i} to={`${root.path}`}>{root.title}</Link>
          ))}
          {this.state && this.state.isSubMenu && this.subMenu(technologies)}
        </Styles.Roots>
        <Styles.SocialLinks>
          {Roots.map((root, i) => root['socialNetwork'] &&
            <Link key={i} to={`${root.path}`}>{root.title}</Link>)}
        </Styles.SocialLinks>
      </Styles.Menu>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  getTechnologies: id => dispatch(getTechnologies(id)),
});

const mapStateToProps = (store) => ({
  technologies: store.Content.technologies,
  themes: store.Content.technologyPage.activeTechnology.themes,
});

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);

