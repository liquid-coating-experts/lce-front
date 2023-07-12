import React from "react"
import { IconProps } from "types/icon"

const Trolley: React.FC<IconProps> = ({
  size = "20",
  color = "currentColor",
  ...attributes
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <path
        d="M13.3634 8.02695L6.73047 4.21271"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 8 3 A 1.0001 1.0001 0 1 0 8 5 L 8 9 C 8 9.552 8.448 10 9 10 L 21 10 C 21.552 10 22 9.552 22 9 L 22 5 A 1.0001 1.0001 0 1 0 22 3 L 8 3 z M 2 6 A 1.0001 1.0001 0 1 0 2 8 L 3 8 C 3.5650302 8 4 8.4349698 4 9 L 4 20 C 4 21.64497 5.3550302 23 7 23 L 26 23 A 1.0001 1.0001 0 1 0 26 21 L 7 21 C 6.4349698 21 6 20.56503 6 20 L 6 9 C 6 7.3550302 4.6449698 6 3 6 L 2 6 z M 11 12 A 1.0001 1.0001 0 1 0 11 14 L 11 18 C 11 18.552 11.448 19 12 19 L 24 19 C 24.552 19 25 18.552 25 18 L 25 14 A 1.0001 1.0001 0 1 0 25 12 L 11 12 z M 10 24 A 2 2 0 0 0 8 26 A 2 2 0 0 0 10 28 A 2 2 0 0 0 12 26 A 2 2 0 0 0 10 24 z M 22 24 A 2 2 0 0 0 20 26 A 2 2 0 0 0 22 28 A 2 2 0 0 0 24 26 A 2 2 0 0 0 22 24 z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.47852 6.20404L10.0006 9.97685L16.5227 6.20404"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Trolley
