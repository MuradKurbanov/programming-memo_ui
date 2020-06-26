import styled from "styled-components";
import { Flex, Palette } from '../../style';
import {IoIosMore, IoIosRemove} from "react-icons/io";

const WrapperCoderEditor = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

const Iframe = styled(Flex)`
  border: 1px solid;
  height: 150px;
  width: 100%;
  margin-top: 10px;
  padding: 25px;
  color: ${({isValid}) => isValid ? Palette.green : Palette.red };
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row-reverse;
`;

const IconCrop = styled(IoIosMore)`
  position: absolute;
  right: 20px; 
  top: 10px;
  cursor: pointer;
  color: ${Palette.white};
  z-index: 1;
  font-size: 2em;
`;

const IconExpand = styled(IoIosRemove)`
  position: absolute;
  right: 20px; 
  top: 10px;
  cursor: pointer;
  color: ${Palette.white};
  z-index: 1;
  font-size: 2.5em;
`;

export default {
  WrapperCoderEditor,
  Iframe,
  IconCrop,
  IconExpand
};