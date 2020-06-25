import styled from 'styled-components';
import { Caption, Flex, Palette } from '../../style';
import { IoIosAdd, IoIosClose } from 'react-icons/io';

const TechnologyName = styled(Caption)`
  text-align: left;
  margin-bottom: 30px;
`;

const TechnologyDescription = styled.div`
  max-width: 900px;
  margin-bottom: 30px;
`;

const WrapperTopic = styled.div`
  position: relative;
  max-width: 900px;
`;

const Item = styled(Flex)`
  max-width: 900px;
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
  flex-wrap: wrap;
  > span { font-size: 15px }
  :hover { 
    color: ${Palette.darkBlack};
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.20);
  }
  @media (max-width: 1024px) {
    padding: 0 10px;
  }
`;

const Topic = styled.div`
  max-width: 900px;
  min-height: 200px;
  color: ${Palette.darkSilver};
  border-top: 1px solid;
  padding: 0 0 50px;
  font-size: 17px;
`;

const Title = styled.div`
  height: 20px;
  text-align: left;
  font-size: 19px;
  margin: 20px 0;
`;

const Example = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid;
  padding: 10px;
  margin: 20px 0 40px;
`;

const SubTheme = styled.div`
  cursor: pointer;
  :hover { color: ${Palette.darkBlack} }
`;

const iconClose = styled(IoIosClose)`
  position: absolute;
  right: 50px; 
  top: 15px;
  cursor: pointer;
  font-size: 1.5em;
`;

const iconAdd = styled(IoIosAdd)`
  cursor: pointer;
  font-size: 1.5em;
`;

export default {
  Flex,
  TechnologyName,
  TechnologyDescription,
  WrapperTopic,
  Item,
  Topic,
  Title,
  Example,
  SubTheme,
  iconClose,
  iconAdd
}
