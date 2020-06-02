import styled from 'styled-components';

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
  justify-content: space-between;
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
  ${({open}) => open && `
    width: calc(100% - 80px);
    min-height: 500px;
    height: auto;
    cursor: default;
    position: absolute;
    top: 0;
    z-index: 3;
  `}
  &:hover {
    background: ${props => props.open ? 'white' : 'black'};
    color: ${props => props.open ? 'black' : 'white'};
  }
`;

const Title = styled.div`
  font-size: 19px;
  margin-bottom: 80px;
`;

const GeneralText = styled.div`
  margin: 40px 0px;
  font-size: 17px;
`;

const ParagraphBlock = styled.div`
  margin 50px 0px;
`;

const ParagraphTitle = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
`;

const ParagraphText = styled.div`
  margin-bottom: 10px;
`;

const Code = styled.textarea`
  width: 100%;
  padding: 10px;
  background: #ececec;
  font-size: 16px;
`;

const addBtn = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const addTechnologyBlock = styled.div`
  width: 500px;
  height: 500px;
  background: #ececec;
`;

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

export default {
  Caption,
  Wrapper,
  Article,
  Title,
  GeneralText,
  ParagraphBlock,
  ParagraphTitle,
  ParagraphText,
  Code,
  addBtn,
  addTechnologyBlock,
  Input
}
