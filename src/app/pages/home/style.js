import styled, { keyframes } from 'styled-components';
import { Wrapper, Flex, Palette } from '../../style';

const Home = styled(Flex)`
  margin-top: 200px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const text = styled.div`
  font-size: 46px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -.035em;
  word-spacing: 3px;
  @media (max-width: 1024px) {
     font-size: 25px;
  }
  @media (max-width: 720px) {
     font-size: 15px;
  }
`;

const StaticTitle = styled(text)`
  color: ${Palette.purple};
`;

const blockExtension = keyframes`
  40% { max-width: 900px; } 
  65% { max-width: 900px; } 
  75% { max-width: 900px; } 
  100% { max-width: 0; }
`;

const Animation = styled(text)`
  max-width: 0;
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  color: ${Palette.white};
  animation: ${blockExtension} 4.5s steps(50, end);
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
  height: 47px;
  margin: 10px 0 10px 15px;
  background: ${Palette.white};
  animation: ${({isRunAnimation}) => isRunAnimation && CursorRepeat} 1s linear infinite;
  @media (max-width: 1024px) {
    width: 5px;
    height: 23px;
    margin: 5px 0 5px 10px;
  }
`;

export default {
  Wrapper,
  Home,
  StaticTitle,
  Animation,
  FinalAnimation,
  Cursor
};