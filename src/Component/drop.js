import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  @media screen and (orientation: landscape) {
    flex-direction: column;
  }
  li {
    width: 20vw;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (orientation: landscape) {
      width: 10vw;
      height: 10vw;
    }
  }
`;

const Uld = styled(Ul)`
  transition: all 2s linear;
  @media screen and (orientation: portrait) {
    max-height: 5vw;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 20vw;
  height: 20vw;
  cursor:pointer;
  @media screen and (orientation: landscape) {
    width: 10vw;
    height: 10vw;
  }
`;

const Uldrp = () => {

  return (
    <Uld>
      <Button
      ></Button>
      <li>
        <Link to="/"> Home</Link>
      </li>
      <li>
        <Link to="/series"> Series</Link>
      </li>
      <li>
        <Link to="/movies"> Filmes</Link>
      </li>
    </Uld>
  );
}

export default Uldrp