import styled from 'styled-components';
import { Caption, Palette, Flex } from '../../style';

const Left = styled.div`
  margin-top: 100px;
  margin-left: 60px;
  padding-right: 40px;
  border-right: 2px solid #dcdcdc;
  position: fixed;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Right = styled.div`
  margin-left: 300px;
  @media (max-width: 900px) {
    margin: 0;
  }
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
  max-width: 850px;
  height: 200px;
  margin-bottom: 60px;
  box-shadow: 0 0 6px 0 #adacac;
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
  height: 55px;
  color: ${Palette.darkSilver};
  font-size: 15px;
  margin-bottom: 20px;
  overflow: hidden;
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