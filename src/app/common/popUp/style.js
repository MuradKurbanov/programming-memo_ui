import styled from 'styled-components';
import close_icon from "../../image/close_icon.png";

const Bg = styled.div`
  width: 100%;
  height: 100%;
  display: ${({open}) => open ? 'flex' : 'none'};
  justify-content: center;
  padding-top: 100px;
  cursor: pointer;
  background: #0000009e;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const ClosePop = styled.div`
  margin-left: calc(100% - 40px);
  margin-bottom: 50px;
  width: 40px;
  height: 40px;
  background-image: url(${close_icon});
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 900px;
  height: 700px;
  padding: 50px;
  background: white;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 17px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  font-size: 15px;
`;

const Example = styled.textarea`
  width: 100%;
  padding: 10px;
  background: #ececec;
  font-size: 16px;
`;

export default {
  Bg,
  ClosePop,
  Wrapper,
  Title,
  Description,
  Example,
}
