import styled from 'styled-components';
import close from '../../image/close_icon.png';

const CatalogBlock = styled.div`
  margin: 50px auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ItemBlock = styled.div`
  width: 250px;
  height: 250px;
  margin: 20px 10px;
  box-shadow: 0px 0px 6px 0px #000000bf;
  text-align: center;
  font-size: 17px;
  padding: 40px;
  &:hover {
    box-shadow: ${({btn}) => btn ? '0px 0px 6px 0px #5aa264bf' : '0px 0px 6px 0px #e91e63'}
  }
`;

const AddBtn = styled.div`
  width: 110px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #5aa264bf;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 20px auto;
`;

const CloseBtn = styled.div`
  background-image: url(${close});
  background-size: cover;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: calc(100% - 20px)
`;

const Input = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 20px 0px 40px;
  padding-left: 5px;
  font-size: 17px;
  color: #636363;
  ::placeholder {
    color: palevioletred;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid palevioletred;
  font-size: 17px;
  padding: 15px;
`;

export default {
  CatalogBlock,
  ItemBlock,
  AddBtn,
  CloseBtn,
  Input,
  Textarea
}