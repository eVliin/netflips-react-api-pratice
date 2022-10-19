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

function Iconhome() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="128"
      baseProfile="basic"
      viewBox="0 0 72 72"
    >
      <defs>
        <linearGradient
          id="gradient-3"
          x1="35.997"
          x2="35.997"
          y1="22.925"
          y2="58"
          gradientTransform="matrix(.99983 -.01852 .0167 .90214 -.963 6.343)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(0, 0, 0, 0)"></stop>
          <stop offset="1" stopColor="#7BFBF4"></stop>
        </linearGradient>
        <linearGradient
          id="gradient-4"
          x1="35.983"
          x2="35.983"
          y1="10"
          y2="36.079"
          gradientTransform="matrix(.99994 .01082 -.01284 1.1862 .13 -2.251)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFAED1"></stop>
          <stop offset="1" stopColor="rgba(255, 217, 217, 0.67)"></stop>
        </linearGradient>
        <clipPath id="clip-0">
          <path
            fill="#D8D8D8"
            stroke="#000"
            d="M7.786 3.684H68.819V63.126H7.786z"
          ></path>
        </clipPath>
        <linearGradient
          id="gradient-0"
          x1="54"
          x2="54"
          y1="14"
          y2="28.667"
          gradientTransform="matrix(1 .00396 -.0057 1.43952 -18.087 -10.219)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFAED1"></stop>
          <stop offset="1" stopColor="#FFD9D9"></stop>
        </linearGradient>
      </defs>
      <g clipPath="url(#clip-0)">
        <path
          fill="url(#gradient-3)"
          d="M35.997 22.925l22 18.377V50a8 8 0 01-8 8h-28a8 8 0 01-8-8v-8.698l22-18.377zM42 50V40a2 2 0 00-2-2h-8a2 2 0 00-2 2v10h12z"
        ></path>
        <path
          fill="url(#gradient-0)"
          d="M57.916 26.825l-8-6.667.084-3.491A2.667 2.667 0 0152.667 14h2.667A2.667 2.667 0 0158 16.667l-.084 10.158z"
        ></path>
        <path
          fill="url(#gradient-4)"
          d="M60.419 28.888c1.693 1.415 2.085 3.962.708 5.686a3.99 3.99 0 01-3.129 1.505 3.977 3.977 0 01-2.562-.931L36.641 19.445a1 1 0 00-1.282 0L16.564 35.148a4.004 4.004 0 01-6.104-1.199c-.909-1.679-.408-3.784 1.057-5.008l21.277-17.778a5 5 0 016.412 0l21.213 17.725z"
        ></path>
      </g>
    </Svg>
  );
}

export default Iconhome;
