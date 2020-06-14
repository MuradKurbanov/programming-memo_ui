import styled from "styled-components";
import { Palette } from '../../style';

const Button = styled.div`
  cursor: pointer;
  color: ${Palette.lightBlack};
  margin: ${({margin}) => margin};
  text-decoration: ${({textDecoration}) => textDecoration || 'none'};
  text-align: ${({textAlign}) => textAlign};
  :hover {
    color: ${Palette.purple};
  }
`;

export default {
  Button
}