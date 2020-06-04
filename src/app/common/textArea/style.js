import styled from "styled-components";

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  border: ${({require}) => require ? '1px solid red' : '1px solid silver'};
  font-size: 15px;
  padding: 3px;
  ::placeholder {
    color: silver;
    font-size: 15px;
  }
`;

export default {
  Textarea
}