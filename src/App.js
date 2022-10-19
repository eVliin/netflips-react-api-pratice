import React, { Component } from "react";
import Header from "./Rotas/Header.js";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #fff;
    list-style: none;
  }
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: transparent;
    }
    *::-webkit-scrollbar-button {
    display: none;
    }
    *::-webkit-scrollbar-track {
      display: none;
    }
    *::-webkit-scrollbar-track-piece {
      display: none;
    }
    *::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    }
    *::-webkit-scrollbar-corner {
      display: none;
    background: #FF0000;
    border-radius: 5px;
    }
`;
export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: #151515;
  height: 100vh;
  overflow: scroll;
`;
export default class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <GlobalStyle />
      </Wrapper>
    );
  }
}
