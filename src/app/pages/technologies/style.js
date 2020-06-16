import styled from 'styled-components';
import { Wrapper, Caption, Palette, Flex } from '../../style';

const Left = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  padding-right: 40px;
  border-right: 2px solid #dcdcdc;
  position: fixed;
`;

const Right = styled.div`
  margin-left: 300px;
`;

const TechnoLink = styled.div`
  color: ${Palette.darkBlack};
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    color: ${Palette.purple};
  }
`;

const TechnoBlock = styled.div`
  max-width: 800px;
  height: 200px;
  margin-bottom: 60px;
  box-shadow: 0px 0px 6px 0px #dcdcdc;
  overflow: hidden;
  padding: 15px;
  position: relative;
`;

const Name = styled.div`
  color: ${Palette.darkBlack};
  font-size: 29px;
  margin-bottom: 40px;
  cursor: pointer;
  :hover {
    color: ${Palette.purple};
  }
`;

const Description = styled.div`
  color: ${Palette.darkSilver};
  font-size: 15px;
  margin-bottom: 20px;
  > span {
    color: ${Palette.lightBlack};
    text-decoration: underline;
    padding-left: 5px;
    :hover {
      color: ${Palette.purple};
    }
  }
`;

const Alert = styled.div`
  width: 100%;
  height: 100%;
  background: ${Palette.lightSilver};
  position: absolute;
  padding-top: 50px;
  text-align: center;
  left: 0;
  top: 0;
`;

export default {
  Wrapper,
  Caption,
  Flex,
  Left,
  Right,
  TechnoLink,
  TechnoBlock,
  Name,
  Description,
  Alert
}