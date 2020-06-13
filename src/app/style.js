import styled, { createGlobalStyle } from 'styled-components';

export const Palette = {
  black: '#181818',
  darkSilver: '#6d6d6d',
  lightDark: '#505050',
  silver: '#edf0ef',
  white: '#f1f1f1',
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
    background: ${Palette.lightDark};
  }
  #root {
    width: 100%;
    height: auto;
    position: relative;
  }
   a {
    cursor: pointer;
    color: ${Palette.darkSilver};
    text-decoration: none;
    &:hover {
      color: ${Palette.lightDark};
    }
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
  min-height: ${({menu}) => menu ? '30vh' : '70vh'};
  background: ${({black}) => black ? Palette.black : Palette.silver};
  padding: 50px;
`;

export const Caption = styled.div`
  font-size: 25px;
  text-align: center;
  color: ${Palette.darkSilver};
  margin-bottom: 50px;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'flex-start'};
`;
