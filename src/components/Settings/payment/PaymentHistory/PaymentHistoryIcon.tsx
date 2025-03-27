import React from "react";

export default function PaymentHistoryIcon({ className } : { className?: string }) {

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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 341 340" className={className}>
      <g filter="url(#PaymentDark_svg__a)">
        <rect
          width="206"
          height="10"
          x="68"
          fill="url(#PaymentDark_svg__b)"
          rx="4"
        ></rect>
      </g>
      <g filter="url(#PaymentDark_svg__c)">
        <path
          fill="url(#PaymentDark_svg__d)"
          d="M80 0h181v211.52c0 .968 0 1.452-.202 1.72a1 1 0 0 1-.737.395c-.334.021-.738-.247-1.545-.782l-6.618-4.388c-.799-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.161 0c-.431.103-.831.368-1.63.897l-5.566 3.69c-1.278.848-1.917 1.272-2.608 1.437a4 4 0 0 1-1.856 0c-.691-.165-1.33-.589-2.608-1.437l-5.566-3.69c-.799-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.161 0c-.431.103-.831.368-1.63.897l-5.566 3.69c-1.278.848-1.917 1.272-2.608 1.437a4 4 0 0 1-1.856 0c-.691-.165-1.33-.589-2.608-1.437l-5.566-3.69c-.799-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.161 0c-.431.103-.831.368-1.63.897l-5.566 3.69c-1.278.848-1.917 1.272-2.608 1.437a4 4 0 0 1-1.856 0c-.691-.165-1.33-.589-2.608-1.437l-5.566-3.69c-.799-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.161 0c-.431.103-.831.368-1.63.897l-5.566 3.69c-1.278.848-1.917 1.272-2.608 1.437a4 4 0 0 1-1.856 0c-.691-.165-1.33-.589-2.608-1.437l-5.566-3.69c-.799-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.161 0c-.431.103-.831.368-1.63.897l-5.566 3.69c-1.278.848-1.917 1.272-2.608 1.437a4 4 0 0 1-1.856 0c-.691-.165-1.33-.589-2.608-1.437l-5.566-3.69c-.799-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.161 0c-.431.103-.831.368-1.63.897l-5.566 3.69c-1.278.848-1.917 1.272-2.608 1.437a4 4 0 0 1-1.856 0c-.691-.165-1.33-.589-2.608-1.437l-5.566-3.69c-.799-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.161 0c-.431.103-.831.368-1.63.897l-5.566 3.69c-1.278.848-1.917 1.272-2.608 1.437a4 4 0 0 1-1.856 0c-.691-.165-1.33-.589-2.609-1.437l-5.565-3.69c-.8-.529-1.199-.794-1.63-.897a2.5 2.5 0 0 0-1.16 0c-.432.103-.832.368-1.63.897l-6.619 4.388c-.807.535-1.21.803-1.545.782a1 1 0 0 1-.737-.395c-.202-.268-.202-.752-.202-1.72z"
        ></path>
      </g>
      <path
        fill="url(#PaymentDark_svg__e)"
        fillRule="evenodd"
        d="M90 28.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C93.04 22 94.16 22 96.4 22h89.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C188.96 36 187.84 36 185.6 36H96.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C90 32.96 90 31.84 90 29.6zm0 51c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C93.04 73 94.16 73 96.4 73h83.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C182.96 87 181.84 87 179.6 87H96.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C90 83.96 90 82.84 90 80.6zm.436-37.216C90 43.04 90 44.16 90 46.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C93.04 54 94.16 54 96.4 54h68.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C171 50.96 171 49.84 171 47.6v-1.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C167.96 40 166.84 40 164.6 40H96.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748M90 97.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C93.04 91 94.16 91 96.4 91h68.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436H96.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C90 101.96 90 100.84 90 98.6zm.654 42.876C90 141.56 90 143.24 90 146.6v37.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C94.56 194 96.24 194 99.6 194h141.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622c.654-1.284.654-2.964.654-6.324v-37.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C246.44 137 244.76 137 241.4 137H99.6c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622M224 28.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C227.04 22 228.16 22 230.4 22h14.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C247.96 36 246.84 36 244.6 36h-14.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C224 32.96 224 31.84 224 29.6zm.436 46.784C224 76.04 224 77.16 224 79.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748c.856.436 1.976.436 4.216.436h14.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C251 83.96 251 82.84 251 80.6v-1.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C247.96 73 246.84 73 244.6 73h-14.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748"
        clipRule="evenodd"
      ></path>
      <g filter="url(#PaymentDark_svg__f)">
        <mask
          id="PaymentDark_svg__g"
          width="149"
          height="12"
          x="95"
          y="177"
          fill={currentTheme === "dark" ? "#000" : "#fff"}
          maskUnits="userSpaceOnUse"
        >
          <path fill={currentTheme === "dark" ? "#fff" : "#000"} d="M95 177h149v12H95z"></path>
          <path
            fillRule="evenodd"
            d="M97.707 178.293a1 1 0 1 0-1.414 1.414L99.586 183l-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a.999.999 0 1 0 1.414-1.414L102.414 183l3.293-3.293a.999.999 0 1 0-1.414-1.414L101 181.586zM112 186a1 1 0 0 0 0 2h130a1 1 0 0 0 0-2z"
            clipRule="evenodd"
          ></path>
        </mask>
        <path
          fill={currentTheme === "dark" ? "#464646" : "#fff"}
          fillRule="evenodd"
          d="M97.707 178.293a1 1 0 1 0-1.414 1.414L99.586 183l-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a.999.999 0 1 0 1.414-1.414L102.414 183l3.293-3.293a.999.999 0 1 0-1.414-1.414L101 181.586zM112 186a1 1 0 0 0 0 2h130a1 1 0 0 0 0-2z"
          clipRule="evenodd"
          shapeRendering="crispEdges"
        ></path>
        <path
          fill={currentTheme === "dark" ? "#fff" : "#000"}
          fillOpacity="0.05"
          d="m96.293 178.293.353.353zm1.414 0-.353.353zm-1.414 1.414-.354.354zM99.586 183l.353.354.354-.354-.354-.354zm-3.293 3.293-.354-.354zm0 1.414.353-.353zm1.414 0-.353-.353zm3.293-3.293.354-.353-.354-.354-.354.354zm3.293 3.293.353-.353zm1.414 0-.353-.353zM102.414 183l-.353-.354-.354.354.354.354zm3.293-3.293-.353-.353zm0-1.414-.353.353zm-1.414 0 .353.353zM101 181.586l-.354.353.354.354.354-.354zm-4.354-2.94a.5.5 0 0 1 .708 0l.707-.707a1.5 1.5 0 0 0-2.122 0zm0 .708a.5.5 0 0 1 0-.708l-.707-.707a1.5 1.5 0 0 0 0 2.122zm3.293 3.292-3.293-3.292-.707.707 3.293 3.293zm-3.293 4 3.293-3.292-.707-.708-3.293 3.293zm0 .708a.5.5 0 0 1 0-.708l-.707-.707a1.5 1.5 0 0 0 0 2.122zm.708 0a.5.5 0 0 1-.708 0l-.707.707a1.5 1.5 0 0 0 2.122 0zm3.292-3.293-3.292 3.293.707.707 3.293-3.293zm4 3.293-3.292-3.293-.708.707 3.293 3.293zm.708 0a.5.5 0 0 1-.708 0l-.707.707a1.5 1.5 0 0 0 2.122 0zm0-.708a.5.5 0 0 1 0 .708l.707.707a1.5 1.5 0 0 0 0-2.122zm-3.293-3.292 3.293 3.292.707-.707-3.293-3.293zm3.293-4-3.293 3.292.707.708 3.293-3.293zm0-.708a.5.5 0 0 1 0 .708l.707.707a1.5 1.5 0 0 0 0-2.122zm-.708 0a.5.5 0 0 1 .708 0l.707-.707a1.5 1.5 0 0 0-2.122 0zm-3.292 3.293 3.292-3.293-.707-.707-3.293 3.293zm-4-3.293 3.292 3.293.708-.707-3.293-3.293zM111.5 187a.5.5 0 0 1 .5-.5v-1a1.5 1.5 0 0 0-1.5 1.5zm.5.5a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5zm130 0H112v1h130zm.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5zm-.5-.5a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5zm-130 0h130v-1H112z"
          mask="url(#PaymentDark_svg__g)"
        ></path>
      </g>
      <path
        fill={currentTheme === "dark" ? "#000" : "#fff"}
        fillOpacity="0.1"
        fillRule="evenodd"
        d="M72 1h198a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-9v1h9a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h8V9h-8a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3"
        clipRule="evenodd"
      ></path>
      <defs>
        <filter
          id="PaymentDark_svg__a"
          width="206"
          height="14"
          x="68"
          y="0"
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
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect1_innerShadow_7925_146259"
          ></feBlend>
        </filter>
        <filter
          id="PaymentDark_svg__c"
          width="341"
          height="394.701"
          x="0"
          y="-1"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2.767"></feOffset>
          <feGaussianBlur stdDeviation="1.107"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7925_146259"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="6.65"></feOffset>
          <feGaussianBlur stdDeviation="2.66"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0503198 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_7925_146259"
            result="effect2_dropShadow_7925_146259"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="12.522"></feOffset>
          <feGaussianBlur stdDeviation="5.009"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0417275 0"></feColorMatrix>
          <feBlend
            in2="effect2_dropShadow_7925_146259"
            result="effect3_dropShadow_7925_146259"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="22.336"></feOffset>
          <feGaussianBlur stdDeviation="8.935"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0"></feColorMatrix>
          <feBlend
            in2="effect3_dropShadow_7925_146259"
            result="effect4_dropShadow_7925_146259"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="41.778"></feOffset>
          <feGaussianBlur stdDeviation="16.711"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0282725 0"></feColorMatrix>
          <feBlend
            in2="effect4_dropShadow_7925_146259"
            result="effect5_dropShadow_7925_146259"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="100"></feOffset>
          <feGaussianBlur stdDeviation="40"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0196802 0"></feColorMatrix>
          <feBlend
            in2="effect5_dropShadow_7925_146259"
            result="effect6_dropShadow_7925_146259"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect6_dropShadow_7925_146259"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="-1"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="shape"
            result="effect7_innerShadow_7925_146259"
          ></feBlend>
        </filter>
        <filter
          id="PaymentDark_svg__f"
          width="150"
          height="13"
          x="94.5"
          y="177.5"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7925_146259"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_7925_146259"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="PaymentDark_svg__d"
          x1="170.5"
          x2="170.5"
          y1="0"
          y2="226"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={currentTheme === "dark" ? "#161616" : "#bcbcbc"}></stop>
          <stop offset="0.039" stopColor={currentTheme === "dark" ? "#404040" : "#fff"}></stop>
          <stop offset="0.088" stopColor={currentTheme === "dark" ? "#404040" : "#fff"}></stop>
          <stop offset="1" stopColor={currentTheme === "dark" ? "#404040" : "#fff"}></stop>
        </linearGradient>
        <linearGradient
          id="PaymentDark_svg__e"
          x1="170.5"
          x2="170.5"
          y1="22"
          y2="194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={currentTheme === "dark" ? "#111111" : "#ecebeb"}></stop>
          <stop offset="1" stopColor={currentTheme === "dark" ? "#1F1F1F" : "#E6E6E6"}></stop>
        </linearGradient>
        <radialGradient
          id="PaymentDark_svg__b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 -10 132.598 0 171 10)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={currentTheme === "dark" ? "#5B5B5B" : "#A0A0A0"}></stop>
          <stop offset="1" stopColor={currentTheme === "dark" ? "#171717" : "#E6E6E6"}></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}
