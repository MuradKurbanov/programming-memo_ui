import styled from 'styled-components';
import { Wrapper, Caption, Flex, Palette } from '../../style';

const Description = styled.div`
  max-width: 700px;
  font-size: 15px;
  margin-bottom: 50px;
`;

const Theme = styled(Flex)`
  max-width: 700px;
  min-height: 60px;
  height: auto;
  border-top: 1px solid;
  justify-content: space-between;
  padding: 0px 20px;
  cursor: pointer;
  color: ${Palette.darkSilver};
  border-bottom: ${({borderBottom}) => borderBottom && '1px solid'};
  transition: 0.2s linear;
  > span {
    font-weight: 300;
  }
  :hover {
    color: ${Palette.darkBlack};
  }
`;

export const Title = styled.div`
  height: 20px;
  text-align: center;
  font-size: 17px;
  margin-bottom: 20px;
`;

const SubTheme = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 15px;
`;

export default {
  Wrapper,
  Caption,
  Flex,
  Description,
  Theme,
  Title,
  SubTheme,
}