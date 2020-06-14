import styled from 'styled-components';
import { Wrapper, Flex, Palette } from '../../style';

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  > a {
    height: 22px;
    min-width: 100px;
    margin-bottom: 5px;
    transition: border-width 0.8s linear;
    &:hover {
      border-bottom: solid 1px ${Palette.purple};
      border-width: 10px;
    }
  }
`;

const SubMenu = styled.div`
  min-width: 180px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  left: ${({left}) => left}px;
  > a {
    height: 22px;
    min-width: 150px;
    margin-bottom: 10px;
    border-bottom: solid 1px ${Palette.purple};
  }
`;

export default {
  Wrapper,
  Flex,
  Menu,
  SubMenu,
}
