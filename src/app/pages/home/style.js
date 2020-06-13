import styled, { keyframes } from 'styled-components';
import { Wrapper, Caption, Flex, Palette } from '../../style';

const InputText = keyframes`
  from { width: 0px }
  to { width: -325px }
`;

const Animation = styled.div`
  width: 770px;
  margin-top: 200px;
  font-size: 54px;
  white-space: nowrap;
  overflow: hidden;
  animation: ${InputText} 3s steps(50, end);
  color: ${Palette.white};
`;

const CursorRepeat = keyframes`
  50% { opacity: 1.0 }
  51% { opacity: 0.0 }
  100% { opacity: 0.0 }
`;

const Cursor = styled.div`
  width: 12px;
  height: 43px;
  margin-left: 5px;
  margin-bottom: 5px;
  background: ${Palette.white};
  animation: ${CursorRepeat} 1.2s linear 3.2s infinite;
`;

export default {
  Wrapper,
  Caption,
  Flex,
  Animation,
  Cursor
};