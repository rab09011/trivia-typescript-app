import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/cotton_candy.avif";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  * {
    font-family: 'Rokkitt', serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #77c4cc;
    font-size: 3rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #f09169);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next,
  .end,
  .restart {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #77c4cc);
    border: 2px solid #77c4cc;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
