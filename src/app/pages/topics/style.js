import styled from 'styled-components';
import { Wrapper, Caption, Flex, Palette } from '../../style';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

const Item = styled(Flex)`
  width: 900px;
  min-height: 60px;
  border-top: 1px solid;
  padding: 0 50px 0;
  cursor: pointer;
  color: ${Palette.darkSilver};
  border-bottom: ${({borderBottom}) => borderBottom && '1px solid'};
  transition: 0.2s linear;
  font-size: 17px;
  justify-content: space-between;
  align-items: center;
  > span { font-size: 15px }
  :hover { 
    color: ${Palette.darkBlack};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);
  }
`;

const Topic = styled.div`
  width: 900px;
  min-height: 200px;
  color: ${Palette.darkSilver};
  border-top: 1px solid;
  padding: 0 0 50px;
  font-size: 17px;
`;

export const Title = styled.div`
  height: 20px;
  text-align: left;
  font-size: 19px;
  margin: 20px 0;
`;

export const Example = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid;
  padding: 10px;
  margin: 20px 0 40px;
`;

export const SubTheme = styled.div`
  cursor: pointer;
  :hover { color: ${Palette.darkBlack} }
`;

export const WrapperTopic = styled.div`
  position: relative;
  width: 900px;
`;

export const iconClose = styled(IoIosClose)`
  position: absolute;
  right: 50px; 
  top: 15px;
  cursor: pointer;
  font-size: 1.5em;
`;

export const iconAdd = styled(IoIosAdd)`
  cursor: pointer;
  font-size: 1.5em;
`;

export default {
  Wrapper,
  Caption,
  Flex,
  Item,
  Topic,
  Title,
  Example,
  SubTheme,
  WrapperTopic,
  iconClose,
  iconAdd
}
