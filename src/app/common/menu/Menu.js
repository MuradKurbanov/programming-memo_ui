import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import { getTechnologies } from "../../../store/reducers/content/middlewares";
import { Roots } from '../../../backend/roots';

import Styles from './style';

class MenuComponent extends React.Component {
  state = {};

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
    const { isSubMenu } = this.state;
    const { isWrapperBlack, technologies } = this.props;

    return (
      <Styles.Wrapper black={isWrapperBlack} menu>
        <Styles.Flex alignItems='flex-start' justifyContent='space-between'>
          <Link to='/'>PM</Link>
          <Styles.Flex style={{width: '340px'}} alignItems='flex-start' justifyContent='space-between'>
            <Styles.Menu>
              {Roots.map((root, i) => (
                root.subMenu && root.menu ?
                  <Link key={i} onMouseEnter={this.viewSubmenu} onMouseLeave={this.hideSubmenu} to={`${root.path}`}>
                    {root.title}
                  </Link> :
                  root.menu && <Link key={i} to={`${root.path}`}>{root.title}</Link>
              ))}
              {isSubMenu && this.subMenu(technologies)}
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


const mapDispatchToProps = dispatch => ({
  getTechnologies: (id) => dispatch(getTechnologies(id)),
});

const mapStateToProps = (store) => ({
  isWrapperBlack: store.Common.isWrapperBlack,
  technologies: store.Content.technologies,
  themes: store.Content.technologyPage.activeTechnology.themes,
});

export const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);

