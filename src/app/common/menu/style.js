import styled from 'styled-components';
import { Wrapper, Flex } from '../../style';

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  > a {
    height: 22px;
    min-width: 100px;
    margin-bottom: 20px;
    transition: border-width 0.8s linear;
    &:hover {
      border-bottom: solid 1px;
      border-width: 10px;
    }
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  left: -99%;
  > a {
    height: 22px;
    min-width: 100px;
    margin-bottom: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default {
  Wrapper,
  Flex,
  Menu,
  SubMenu,
}
