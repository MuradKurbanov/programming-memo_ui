import styled from 'styled-components';
import { Wrapper, Caption, Flex, Palette } from '../../style';

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
  :hover { color: ${Palette.darkBlack} }
`;

const Theme = styled.div`
  width: 900px;
  min-height: 200px;
  color: ${Palette.darkSilver};
  border-top: 1px solid;
  padding: 20px 0 50px;
  font-size: 17px;
`;

export const Title = styled.div`
  height: 20px;
  text-align: left;
  font-size: 19px;
  margin-bottom: 20px;
`;

export const Example = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid;
  padding: 20px;
  margin: 20px 0 40px;
`;

export const SubTheme = styled.div`
  cursor: pointer;
  :hover { color: ${Palette.darkBlack} }
`;

export default {
  Wrapper,
  Caption,
  Flex,
  Item,
  Theme,
  Title,
  Example,
  SubTheme
}
