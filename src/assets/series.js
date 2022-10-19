import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 20vw;
  height: 20vw;
  @media screen and (orientation: landscape) {
    width: 10vw;
    height: 10vw;
  }
  }
`;

export default function Seriesicon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="85.333"
      height="85.333"
      version="1"
      viewBox="0 0 64 64"
    >
      <defs>
        <linearGradient
          id="gradient-0"
          x1="320.061"
          x2="320.061"
          y1="190"
          y2="510.087"
          gradientTransform="matrix(1 -.00194 .00223 1.14695 -1.135 -74.338)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(167, 251, 255, 0.18)"></stop>
          <stop offset="1" stopColor="#EB5296"></stop>
        </linearGradient>
        <linearGradient
          id="gradient-1"
          x1="319.205"
          x2="319.205"
          y1="120"
          y2="158.26"
          gradientTransform="matrix(.99995 -.01013 .01863 1.83825 -2.219 -97.355)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#76F0E9"></stop>
          <stop offset="1" stopColor="rgba(255, 255, 255, 0)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#gradient-0)"
        d="M112 494c-21-14-22-22-22-140 0-69 5-134 10-145 10-18 23-19 220-19s210 1 220 19c5 11 10 76 10 145 0 165 13 156-230 156-152 0-190-3-208-16zm228-124c22-11 40-22 40-25 0-10-81-45-90-40-13 8-13 85 0 85 6 0 29-9 50-20z"
        transform="matrix(.1 0 0 -.1 0 64)"
      ></path>
      <path
        fill="url(#gradient-1)"
        d="M207 154c-4-4-7-13-7-21 0-10 27-13 121-13 109 0 120 2 117 18-3 15-18 17-114 20-60 1-113-1-117-4z"
        transform="matrix(.1 0 0 -.1 0 64)"
      ></path>
    </svg>
  );
}
