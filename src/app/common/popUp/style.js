import styled from 'styled-components';

const Bg = styled.div`
  width: 100%;
  height: 100%;
  display: ${({open}) => open ? 'flex' : 'none'};
  justify-content: center;
  padding-top: 100px;
  cursor: pointer;
  background: #0000009e;
  position: fixed;
  top: 0;
  z-index: 2;
`;


export default {
  Bg,
}
