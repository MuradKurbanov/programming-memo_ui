import styled from "styled-components";
import { Palette } from "../../style";

const InputBlock = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
  min-height: 30px;
  margin-top: 20px;
  border: none;
  border-bottom: 1px solid ${({require}) => require ? Palette.red : Palette.darkSilver};
  padding-left: 3px;
  font-size: 17px;
  color: ${Palette.lightBlack};
  background: none;
  ::placeholder {
    color: silver;
    font-size: 15px;
  }
`;

export default {
  InputBlock,
  Title,
  Input
}