"use client";

import { createGlobalStyle } from "styled-components";
import { Montserrat } from "next/font/google";
const style = Montserrat({ subsets: ["latin"] });

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: ${style.style.fontFamily};
    color: black;
    font-weight: 500;
    text-decoration-line: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    scroll-behavior: smooth;
    background-color: #4a7bfa;
  }
  

  img {
    max-width: 100%;
    display: block;
  }

 
`;
