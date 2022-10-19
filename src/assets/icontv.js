import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 20vw;
  height: 20vw;
  @media screen and (orientation: landscape) {
    width: 10vw;
    height: 10vw;
  }
`;

function Seriesicon() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient
          id="b"
          x1="320.06"
          x2="320.06"
          y1="190"
          y2="510.09"
          gradientTransform="matrix(1 -.00194 .00223 1.147 -1.135 -74.338)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(167, 251, 255, 0.18)"></stop>
          <stop offset="1" stopColor="#eb5296"></stop>
        </linearGradient>
        <linearGradient
          id="a"
          x1="319.2"
          x2="319.2"
          y1="120"
          y2="158.26"
          gradientTransform="matrix(.99995 -.01013 .01863 1.8382 -2.219 -97.355)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#76f0e9"></stop>
          <stop offset="1" stopColor="rgba(255, 255, 255, 0)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#b)"
        d="M112 494c-21-14-22-22-22-140 0-69 5-134 10-145 10-18 23-19 220-19s210 1 220 19c5 11 10 76 10 145 0 165 13 156-230 156-152 0-190-3-208-16zm228-124c22-11 40-22 40-25 0-10-81-45-90-40-13 8-13 85 0 85 6 0 29-9 50-20z"
        transform="matrix(.1 0 0 -.1 0 64)"
      ></path>
      <path
        fill="url(#a)"
        d="M207 154c-4-4-7-13-7-21 0-10 27-13 121-13 109 0 120 2 117 18-3 15-18 17-114 20-60 1-113-1-117-4z"
        transform="matrix(.1 0 0 -.1 0 64)"
      ></path>
    </Svg>
  );
}

export default Seriesicon;
