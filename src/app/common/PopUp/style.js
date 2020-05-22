import styled from 'styled-components';

const Bg = styled.div`
  width: 100%;
  height: 100%;
  display: ${({open}) => open ? 'block' : 'none'};
  background: #0000009e;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export default {
  Bg,
}
