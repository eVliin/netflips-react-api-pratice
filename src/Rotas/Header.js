import React, { useState } from "react";
import Home from "../Component/Home.js";
import Series from "../Component/Series.js";
import Movies from "../Component/Movies.js";
import Uldrp from "../Component/drop.js";
import Seriesicon from "../assets/icontv.js";
import Iconhome from "../assets/home.js";
import Logo from "../assets/logo.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Router)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Pages = styled.section`
  @media screen and (orientation: landscape) {
    padding-left: 14vw;
  }
`;

const Sec = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: min-content;
  height: 100%;
  background-color: #212121;
  @media screen and (orientation: portrait) {
    flex-direction: row;
    width: 100%;
    height: min-content;
    background-color: #212121;
    bottom: 0;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  @media screen and (orientation: landscape) {
    flex-direction: row-reverse;
  }
`;
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

const Ulicon = styled(Ul)`
  @media screen and (orientation: landscape) {
    margin-left: 1vw;
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

const Img = styled.img`
  width: 13vw;
  height: 13vw;
  @media screen and (orientation: landscape) {
    width: 7vw;
    height: 7vw;
`;

export default function Header() {
  const [bar, setBar] = useState(false);

  return (
    <Wrapper>
      <Sec>
        <Nav>
          {bar && (
        <Uldrp />
      )}
          <Ulicon>
            <Button
              onClick={(prevBar) => {
          setBar(!bar);
              }}
            >
              <Logo />
            </Button>
            <li>
              <Link to="/">
                <Iconhome />
              </Link>
            </li>
            <li>
              <Link to="/series">
                <Seriesicon />
              </Link>
            </li>
            <li>
              <Link to="/movies">
                <Img src={require("../assets/iconmov.png")} />
              </Link>
            </li>
          </Ulicon>
        </Nav>
      </Sec>
      <Pages>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Pages>
    </Wrapper>
  );
}
