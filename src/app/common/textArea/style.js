import styled from "styled-components";
import { Palette } from "../../style";

const Textarea = styled.textarea`
  width: 100%;
  min-height: 30px;
  margin-top: 5px;
  border-bottom: 1px solid ${({require}) => require ? Palette.red : Palette.darkSilver};
  font-size: 17px;
  padding: 3px;
  background: none;
  color: ${Palette.darkSilver};
  ::placeholder {
    color: silver;
    font-size: 15px;
  }
`;

export default {
  Textarea
}