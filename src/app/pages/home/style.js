import styled, { keyframes } from 'styled-components';
import { Wrapper, Flex, Palette } from '../../style';

const text = styled.div`
  font-size: 48px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -.035em;
`;

const StaticTitle = styled(text)`
  color: ${Palette.purple};
`;

const blockExtension = keyframes`
  40% { max-width: 900px; } 
  65% { max-width: 900px; } 
  75% { max-width: 900px; } 
  100% { max-width: 0px; }
`;

const Animation = styled(text)`
  max-width: 0px;
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  color: ${Palette.white};
  animation: ${blockExtension} 4s steps(50, end);
  > span {
     color: ${Palette.purple};
  }
`;

const finalBlockExtension = keyframes`
  from { max-width: 0; }
`;

const FinalAnimation = styled(text)`
  max-width: 900px;
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  color: ${Palette.white};
  animation: ${finalBlockExtension} 1.7s steps(50, end);
`;

const CursorRepeat = keyframes`
  50% { opacity: 1.0 }
  51% { opacity: 0.0 }
  100% { opacity: 0.0 }
`;

const Cursor = styled.div`
  width: 12px;
  height: 50px;
  margin: 10px 0 10px 15px;
  background: ${Palette.white};
  animation: ${CursorRepeat} 1.4s linear infinite;
`;

export default {
  Wrapper,
  Flex,
  StaticTitle,
  Animation,
  FinalAnimation,
  Cursor
};