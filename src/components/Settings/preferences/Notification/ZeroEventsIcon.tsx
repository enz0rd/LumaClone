'use client'
import React from "react";

export function ZeroEventsIcon({ className }: { className?: string }) {
  const [currentTheme, setCurrentTheme] = React.useState("dark");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if(localStorage.getItem("theme") === "system") {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return setCurrentTheme("dark");
        } else {
          return setCurrentTheme("light");
        }
      }
      return setCurrentTheme(localStorage.getItem("theme") || "dark");
    }
  }, []);
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 36 43"
      className={className}
    >
      <mask
        id="CalendarCompactLight_svg__a"
        width="34"
        height="38"
        x="1"
        y="0"
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <path fill={currentTheme === "dark" ? "#000" : "#fff"} d="M1 0h34v38H1z"></path>
        <path
          fillRule="evenodd"
          d="M8 3a2 2 0 1 1 4 0v2.011c.825-.01 1.751-.01 2.8-.01h6.4c1.049 0 1.975 0 2.8.01v-2.01a2 2 0 1 1 4 0v2.318a6.4 6.4 0 0 1 1.632.553 8 8 0 0 1 3.496 3.496C34 11.08 34 13.32 34 17.8v6.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496C27.92 37 25.68 37 21.2 37h-6.4c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C2 30.921 2 28.681 2 24.2v-6.4c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496A6.4 6.4 0 0 1 8 5.32z"
          clipRule="evenodd"
        ></path>
      </mask>
      <path
        fill={currentTheme === "dark" ? "#FFF" : "#000"}
        fillOpacity="0.1"
        d="M12 5.011h-.5v.507l.507-.007zm12 0-.007.5.507.007v-.507zm4 .308h-.5v.407l.399.082zm1.632.553-.227.446zm3.496 3.496-.446.227zm0 23.264-.446-.227zm-3.496 3.496-.227-.445zm-23.264 0 .227-.445zm-3.496-3.496.445-.227zm0-23.264.445.227zm3.496-3.496-.227-.445zM8 5.32l.101.49.399-.083v-.407zM10 .5A2.5 2.5 0 0 0 7.5 3h1A1.5 1.5 0 0 1 10 1.5zM12.5 3A2.5 2.5 0 0 0 10 .5v1A1.5 1.5 0 0 1 11.5 3zm0 2.011v-2.01h-1v2.01zm2.3-.51c-1.048 0-1.978 0-2.807.01l.014 1c.82-.01 1.743-.01 2.793-.01zm6.4 0h-6.4v1h6.4zm2.807.01c-.83-.01-1.76-.01-2.807-.01v1c1.05 0 1.972 0 2.793.01zm.493.5v-2.01h-1v2.01zm0-2.01A1.5 1.5 0 0 1 26 1.5v-1A2.5 2.5 0 0 0 23.5 3zM26 1.5A1.5 1.5 0 0 1 27.5 3h1A2.5 2.5 0 0 0 26 .5zM27.5 3v2.318h1V3zm2.359 2.426a6.9 6.9 0 0 0-1.758-.598l-.202.98c.577.12 1.065.284 1.506.509zm3.715 3.714a8.5 8.5 0 0 0-3.715-3.714l-.454.89a7.5 7.5 0 0 1 3.277 3.278zm.926 8.66c0-2.233 0-3.937-.11-5.296-.112-1.365-.339-2.426-.816-3.364l-.892.454c.395.774.604 1.688.71 2.991.108 1.31.108 2.966.108 5.214zm0 6.4v-6.4h-1v6.4zm-.926 8.658c.477-.938.704-1.999.815-3.364.111-1.359.111-3.063.111-5.295h-1c0 2.249 0 3.905-.107 5.214-.107 1.303-.316 2.218-.71 2.991zm-3.715 3.715a8.5 8.5 0 0 0 3.715-3.715l-.892-.454a7.5 7.5 0 0 1-3.277 3.278zM21.2 37.5c2.232 0 3.936 0 5.295-.11 1.365-.112 2.426-.338 3.364-.816l-.454-.891c-.774.394-1.688.603-2.991.71-1.31.107-2.966.107-5.214.107zm-6.4 0h6.4v-1h-6.4zm-8.659-.926c.938.478 1.999.704 3.364.816 1.359.11 3.063.11 5.295.11v-1c-2.248 0-3.905 0-5.214-.107-1.303-.107-2.218-.316-2.99-.71zm-3.715-3.715a8.5 8.5 0 0 0 3.715 3.715l.454-.891a7.5 7.5 0 0 1-3.278-3.278zM1.5 24.2c0 2.232 0 3.936.11 5.295.112 1.365.339 2.426.816 3.364l.891-.454c-.394-.773-.603-1.688-.71-2.991C2.5 28.104 2.5 26.449 2.5 24.2zm0-6.4v6.4h1v-6.4zm.926-8.659c-.477.938-.704 2-.815 3.364C1.5 13.865 1.5 15.568 1.5 17.8h1c0-2.248 0-3.905.107-5.214.107-1.303.316-2.217.71-2.99zm3.715-3.714A8.5 8.5 0 0 0 2.426 9.14l.891.454a7.5 7.5 0 0 1 3.278-3.277zM7.9 4.829a6.9 6.9 0 0 0-1.758.598l.454.89c.441-.224.929-.389 1.506-.509zM7.5 3V5.32h1V3z"
        mask="url(#CalendarCompactLight_svg__a)"
      ></path>
      <g filter="url(#CalendarCompactLight_svg__b)">
        <rect
          width="32"
          height="32"
          x="2"
          y="5"
          fill="url(#CalendarCompactLight_svg__c)"
          rx="8"
        ></rect>
      </g>
      <g filter="url(#CalendarCompactLight_svg__d)">
        <path
          fill={currentTheme === "dark" ? "#111111" : "#DDD"}
          d="M17.666 30.333q-2.184-.008-3.758-1.077-1.566-1.07-2.412-3.098-.838-2.028-.83-4.88 0-2.842.838-4.846.846-2.002 2.412-3.046 1.575-1.053 3.75-1.053t3.741 1.053q1.575 1.052 2.421 3.055.847 1.995.838 4.837 0 2.86-.846 4.889-.839 2.028-2.404 3.097-1.566 1.07-3.75 1.07m0-3.046q1.49 0 2.378-1.502.89-1.503.88-4.507 0-1.977-.405-3.293-.399-1.315-1.135-1.977a2.47 2.47 0 0 0-1.718-.662q-1.481 0-2.37 1.485-.888 1.485-.897 4.447 0 2.003.398 3.344.405 1.332 1.142 2.003a2.5 2.5 0 0 0 1.727.662"
        ></path>
      </g>
      <path
        fill={currentTheme === "dark" ? "#FFF" : "#000"}
        fillOpacity="0.1"
        fillRule="evenodd"
        d="M12.5 7.667V3a2.5 2.5 0 0 0-5 0v4.667a2.5 2.5 0 0 0 5 0M8 3a2 2 0 1 1 4 0v4.667a2 2 0 1 1-4 0zm20.5 4.667V3a2.5 2.5 0 0 0-5 0v4.667a2.5 2.5 0 0 0 5 0M24 3a2 2 0 1 1 4 0v4.667a2 2 0 1 1-4 0z"
        clipRule="evenodd"
      ></path>
      <g filter="url(#CalendarCompactLight_svg__e)">
        <rect
          width="4"
          height="8.667"
          x="8"
          y="1"
          fill="url(#CalendarCompactLight_svg__f)"
          rx="2"
        ></rect>
        <rect
          width="4"
          height="8.667"
          x="24"
          y="1"
          fill="url(#CalendarCompactLight_svg__g)"
          rx="2"
        ></rect>
      </g>
      <defs>
        <linearGradient
          id="CalendarCompactLight_svg__c"
          x1="17.636"
          x2="18"
          y1="8.914"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={currentTheme === "dark" ? "#303030" : "#f5f5f5"}></stop>
          <stop offset="1" stopColor={currentTheme === "dark" ? "#404040" : "#fff"}></stop>
        </linearGradient>
        <linearGradient
          id="CalendarCompactLight_svg__f"
          x1="10"
          x2="10"
          y1="1"
          y2="9.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={currentTheme === "dark" ? "#424242" : "#EFEFEF"}></stop>
          <stop offset="1" stopColor={currentTheme === "dark" ? "#444444" : "#fff"}></stop>
        </linearGradient>
        <linearGradient
          id="CalendarCompactLight_svg__g"
          x1="26"
          x2="26"
          y1="1"
          y2="9.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={currentTheme === "dark" ? "#424242" : "#EFEFEF"}></stop>
          <stop offset="1" stopColor={currentTheme === "dark" ? "#444444" : "#fff"}></stop>
        </linearGradient>
        <filter
          id="CalendarCompactLight_svg__b"
          width="36"
          height="39"
          x="0"
          y="4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_7935_148035"
            result="effect2_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix>
          <feBlend
            in2="effect2_dropShadow_7935_148035"
            result="effect3_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="effect3_dropShadow_7935_148035"
            result="effect4_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"></feColorMatrix>
          <feBlend
            in2="effect4_dropShadow_7935_148035"
            result="effect5_dropShadow_7935_148035"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_7935_148035"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="CalendarCompactLight_svg__d"
          width="14"
          height="18.667"
          x="10.666"
          y="12.333"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.667"></feOffset>
          <feGaussianBlur stdDeviation="1.333"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect1_innerShadow_7935_148035"
          ></feBlend>
        </filter>
        <filter
          id="CalendarCompactLight_svg__e"
          width="22"
          height="12.667"
          x="7"
          y="1"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_7935_148035"
            result="effect2_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"></feColorMatrix>
          <feBlend
            in2="effect2_dropShadow_7935_148035"
            result="effect3_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="effect3_dropShadow_7935_148035"
            result="effect4_dropShadow_7935_148035"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="3"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"></feColorMatrix>
          <feBlend
            in2="effect4_dropShadow_7935_148035"
            result="effect5_dropShadow_7935_148035"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect5_dropShadow_7935_148035"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
