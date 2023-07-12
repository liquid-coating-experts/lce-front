import React from "react"
import { IconProps } from "types/icon"

const Facebook: React.FC<IconProps> = ({
  size = "60",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M42 40C42 41.105 41.105 42 40 42H8C6.895 42 6 41.105 6 40V8C6 6.895 6.895 6 8 6H40C41.105 6 42 6.895 42 8V40Z"
        fill="url(#paint0_linear_557_26245)"
      />
      <path
        opacity="0.05"
        d="M25 37.9999V26.9999H21V20.9999H25V18.8619C25 13.8199 27.666 11.0439 32.505 11.0439C34.5 11.0439 35.582 11.1839 36.103 11.2519L36.961 11.3629L37 12.2239V16.9999H33.365C32.237 16.9999 32 18.3779 32 19.5349V20.9999H36.723L35.795 26.9999H32V37.9999H25Z"
        fill="black"
      />
      <path
        opacity="0.07"
        d="M25.5 37.4999V26.4999H21.5V21.4999H25.5V18.8619C25.5 14.0739 27.922 11.5439 32.505 11.5439C34.476 11.5439 35.535 11.6819 36.045 11.7479L36.481 11.8049L36.501 12.2469V16.4999H33.366C31.743 16.4999 31.501 18.4009 31.501 19.5349V21.4999H36.141L35.368 26.4999H31.5V37.4999H25.5Z"
        fill="black"
      />
      <path
        d="M33.365 16H36V12.246C35.508 12.182 34.469 12.043 32.505 12.043C28.404 12.043 26 14.123 26 18.862V22H22V26H26V37H31V26H34.938L35.556 22H31V19.535C31 17.661 31.612 16 33.365 16Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_557_26245"
          x1="6.228"
          y1="4.896"
          x2="42.077"
          y2="43.432"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0D61A9" />
          <stop offset="1" stopColor="#16528C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Facebook
