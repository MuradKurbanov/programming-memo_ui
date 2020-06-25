import styled, { createGlobalStyle } from 'styled-components';

import larsseit from '../fonts/larsseit.ttf';
import futura from '../fonts/futura.otf';

export const Palette = {
  darkBlack: '#292929',
  lightBlack: '#505050',
  darkSilver: '#6d6d6d',
  lightSilver: '#efefef',
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
    font-family: larsseit, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
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
  @font-face {
    font-family: 'larsseit';
    src: local('larsseit'), local('larsseit');
    url(${larsseit}) format('ttf');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'futura';
    src: local('futura'), local('futura');
    url(${futura}) format('otf');
    font-weight: 500;
    font-style: normal;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: ${({black}) => black ? Palette.darkBlack : Palette.lightSilver};
  a {
    cursor: pointer;
    color: ${({black}) => black ? Palette.darkSilver : Palette.lightBlack};
    text-decoration: none;
    transition: color 0.3s linear;
    //font-weight: 100;
    &:hover {
      color: ${({black}) => black ? Palette.lightSilver : Palette.darkBlack};
    }
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Wrapper = styled.div`
  max-width: 2100px;
  min-width: 320px;
  min-height: 100vh;
  padding: 40px 50px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const Caption = styled.div`
  font-size: 27px;
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
