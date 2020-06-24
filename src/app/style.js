import styled, { createGlobalStyle } from 'styled-components';

export const Palette = {
  darkBlack: '#181818',
  lightBlack: '#505050',
  darkSilver: '#6d6d6d',
  lightSilver: '#edf0ef',
  white: '#f1f1f1',
  purple: '#9474A5',
  red: '#b11717',
  green: '#5fb117'
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${Palette.lightBlack};
  }
  #root {
    width: 100%;
    height: auto;
    position: relative;
  }
`;

export const Container = styled.div`
  max-width: 2400px;
  min-width: 320px;
  width: 100%;
  height: auto;
  position: relative;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  min-height: ${({menu}) => menu ? '20vh' : '80vh'};
  background: ${({black}) => black ? Palette.darkBlack : Palette.lightSilver};
  padding: 40px 50px;
  a {
    cursor: pointer;
    color: ${({black}) => black ? Palette.darkSilver : Palette.lightBlack};
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${({black}) => black ? Palette.lightSilver : Palette.darkBlack};
    }
  }
`;

export const Caption = styled.div`
  font-size: 27px;
  line-height: 20px;
  text-align: ${({textAlign}) => textAlign || 'center' };
  color: ${Palette.lightBlack};
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || 'center'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  flex-direction: ${({flexDirection}) => flexDirection || 'row'}
  flex-wrap: wrap;
`;
