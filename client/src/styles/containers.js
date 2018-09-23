import styled from 'styled-components';

export const SignUp = styled.main`
  border: 2.5px double #95cacf;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: auto;
  margin-top: 20px;
  width: 350px;
  height: 250px;
  text-align: center;
  background: #95cfb7;
  opacity: 0.75;
  margin-bottom: 20px;
  font-family: 'Gamja Flower', cursive;
`;

export const Login =
SignUp.extend``;

export const IntroParagraph = styled.main`
  text-align: justify;
`;

export const IntroParagraphDiv =
  IntroParagraph.extend`
  margin-left: 5%;
  margin-right: 5%;
`;
