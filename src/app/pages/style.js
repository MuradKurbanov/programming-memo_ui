import styled from 'styled-components';
import plus from '../image/plus_icon.png';

const Caption = styled.div`
  font-size: 25px;
  text-align: center;
  color: black;
  margin: 30px;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 20px;
  display: ${({flex}) => flex ? 'flex' : 'block'};
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

const Article = styled.div`
  margin: 20px;
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
  Caption,
  Wrapper,
  Article,
  AddTheme,
  Title,
  GeneralText,
}
