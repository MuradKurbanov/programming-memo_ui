import styled from 'styled-components';
import { Wrapper, Caption } from '../../style';
import plus from "../../image/plus_icon.png";

const Description = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
`;

const Catalog = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Article = styled.div`
  margin: 0px 25px 25px 0px;
  width: 400px;
  height: 300px;
  padding: 20px;
  box-shadow: 0px 0px 15px -5px rgba(0,0,0,0.75);
  cursor: pointer;
  background: white;
  overflow: hidden;
  font-size: 16px;
`;

const AddTheme = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${plus});
  background-size: cover;
`;

const Title = styled.div`
  font-size: 19px;
  margin-bottom: 80px;
`;

const GeneralText = styled.div`
  margin: 40px 0px;
  font-size: 17px;
`;

export default {
  Wrapper,
  Caption,
  Catalog,
  Article,
  AddTheme,
  Title,
  GeneralText,
  Description
}