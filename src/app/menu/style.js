import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 30px 50px;
  z-index: 1;
`;

const Menu = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const SubMenu = styled.div`
  position: absolute;
  background: white;
  z-index: 2;
  padding-top: 5px;
`;

const Item = styled.div`
  font-size: 16px;
  margin: 3px 0px;
  > a {
    color: black;
    text-decoration: none;
    &:hover {
      color: green;
    }
  }
`;

export default {
  Wrapper,
  Menu,
  SubMenu,
  Item
}
