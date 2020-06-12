import styled from 'styled-components';
import close_icon from '../../image/close_icon.png';
import plus_icon from '../../image/plus_icon.png';

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
  overflow: scroll;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Title = styled.div`
  height: 20px;
  text-align: center;
  font-size: 17px;
  margin-bottom: 20px;
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

const SubTheme = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 15px;
`;

const Plus = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${plus_icon});
  background-size: cover;
  margin-right: 10px;
`;


export default {
  Bg,
  ClosePop,
  Wrapper,
  Flex,
  Title,
  Description,
  Example,
  SubTheme,
  Plus
}
