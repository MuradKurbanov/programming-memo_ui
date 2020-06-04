import styled from 'styled-components';

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
  padding: 20px;
  transition: box-shadow 0.4s linear;
  cursor: pointer;
  color: black;
  & > a {
    color: black;
    text-decoration: none;
  }
  &:hover {
    box-shadow: ${({btn}) => btn ? '0px 0px 6px 0px #5aa264bf' : '0px 0px 6px 0px #cacaca'}
  }
`;

const Name = styled.div`
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
`;

const Description = styled.div`
  font-size: 15px;
  margin-top: 50px;
`;

export default {
  CatalogBlock,
  ItemBlock,
  Name,
  Description
}