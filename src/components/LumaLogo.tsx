'use client'
import React from "react";

export function LumaLogoSVG() {
    const [currentTheme, setCurrentTheme] = React.useState("dark");
  return (
    <svg
      className="w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 133 134"
    >
      <path
        fill={currentTheme ? "#808080" : "#404040"}
        d="M133 67C96.282 67 66.5 36.994 66.5 0c0 36.994-29.782 67-66.5 67 36.718 0 66.5 30.006 66.5 67 0-36.994 29.782-67 66.5-67"
      ></path>
    </svg>
  );
}
