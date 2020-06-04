import styled from "styled-components";

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  border: none;
  border-bottom: ${({require}) => require ? '1px solid red' : '1px solid silver'};
  padding-left: 3px;
  font-size: 17px;
  color: #636363;
  ::placeholder {
    color: silver;
    font-size: 15px;
  }
`;

export default {
  Input
}