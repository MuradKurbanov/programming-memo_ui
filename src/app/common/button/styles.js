import styled from "styled-components";

const Button = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid silver;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 20px auto;
  ${({edit}) => edit} & {
    width: auto;
    height: auto;
    border-radius: 0px;
    border: none;
    margin: 0px;
    margin-right: 30px;
    margin-top: 30px;
    :hover {
      color: silver;
    }
  }`;

export default {
  Button
}