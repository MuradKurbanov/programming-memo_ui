import styled from "styled-components";
import { Flex, Palette } from '../../style';

const Iframe = styled(Flex)`
  border: 1px solid;
  height: 150px;
  width: 100%;
  margin: 10px 0 80px 0;
  padding: 25px;
  color: ${({isValid}) => isValid ? Palette.green : Palette.red };
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row-reverse;
`;

export default {
  Iframe,
};