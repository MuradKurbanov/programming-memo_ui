import styled from 'styled-components';
import { Flex, Palette } from '../../style';

const Menu = styled(Flex)`
  margin-bottom: 100px;
  justify-content: space-between;
  align-items: flex-start;
  > a:first-child {
    flex-grow: 1;
  }
`;

const Roots = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  > a {
    height: 22px;
    min-width: 100px;
    margin-bottom: 5px;
    border-bottom: ${Palette.purple};
    transition: border-bottom 0.8s linear;
    &:hover {
      border-bottom: solid 10px ${Palette.purple};
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

const SocialLinks = styled.div`
  margin-left: 60px;  
  > a {
    margin-left: 20px;  
  }
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export default {
  Flex,
  Menu,
  Roots,
  SubMenu,
  SocialLinks
}
