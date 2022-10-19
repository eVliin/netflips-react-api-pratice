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

function Logo() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsBx="https://boxy-svg.com"
      opacity="0.97"
      viewBox="0 0 800 800"
    >
      <defs>
        <linearGradient id="nnneon-grad" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0" stopColor="hsl(176, 100%, 73%)"></stop>
          <stop offset="1" stopColor="hsl(334, 89%, 64%)"></stop>
        </linearGradient>
        <filter
          id="nnneon-filter"
          width="400%"
          height="400%"
          x="-100%"
          y="-100%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            x="0%"
            y="0%"
            in="SourceGraphic"
            result="blur"
            stdDeviation="5 13"
          ></feGaussianBlur>
        </filter>
        <filter
          id="nnneon-filter2"
          width="400%"
          height="400%"
          x="-100%"
          y="-100%"
          colorInterpolationFilters="sRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feGaussianBlur
            x="0%"
            y="0%"
            in="SourceGraphic"
            result="blur"
            stdDeviation="7 4"
          ></feGaussianBlur>
        </filter>
        <style bxFonts="Carter One">
          @import
          url(https://fonts.googleapis.com/css2?family=Carter+One%3Aital%2Cwght%400%2C400&amp;display=swap);
        </style>
        <radialGradient
          id="gradient-0"
          cx="405.963"
          cy="383.822"
          r="8.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFAED1"></stop>
          <stop offset="1" stopColor="#7BFBF4"></stop>
        </radialGradient>
        <radialGradient
          id="gradient-1"
          cx="405.963"
          cy="383.822"
          r="8.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(0, 0, 0, 0.06)"></stop>
          <stop offset="1" stopColor="rgba(0, 0, 0, 0.06)"></stop>
        </radialGradient>
      </defs>
      <g
        fill="none"
        stroke="url(#nnneon-grad)"
        strokeWidth="19.5"
        transform="rotate(224 400 400)"
      >
        <circle
          cx="400"
          cy="400"
          r="221.5"
          filter="url(#nnneon-filter)"
        ></circle>
        <circle
          cx="439"
          cy="400"
          r="221.5"
          filter="url(#nnneon-filter2)"
          opacity="0.25"
        ></circle>
        <circle
          cx="361"
          cy="400"
          r="221.5"
          filter="url(#nnneon-filter2)"
          opacity="0.25"
        ></circle>
        <circle cx="400" cy="400" r="221.5"></circle>
      </g>
      <text
        style={{ whiteSpace: "pre" }}
        x="397.209"
        y="392.558"
        fill="url(#gradient-1)"
        stroke="url(#gradient-0)"
        fontFamily="Carter One"
        fontSize="26"
        paintOrder="markers stroke"
        transform="matrix(20.61736 0 0 16.41308 -7981.03 -5890.073)"
      >
        N
      </text>
    </Svg>
  );
}

export default Logo;
