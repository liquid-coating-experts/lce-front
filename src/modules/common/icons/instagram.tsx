import React from "react"
import { IconProps } from "types/icon"

const Instagram: React.FC<IconProps> = ({
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
        d="M34.017 41.9902L14.017 42.0092C9.61699 42.0132 6.01399 38.4172 6.00899 34.0172L5.98999 14.0172C5.98599 9.61724 9.58199 6.01424 13.982 6.00924L33.982 5.99024C38.382 5.98624 41.985 9.58224 41.99 13.9822L42.009 33.9822C42.014 38.3832 38.417 41.9862 34.017 41.9902Z"
        fill="url(#paint0_radial_558_26260)"
      />
      <path
        d="M34.017 41.9902L14.017 42.0092C9.61699 42.0132 6.01399 38.4172 6.00899 34.0172L5.98999 14.0172C5.98599 9.61724 9.58199 6.01424 13.982 6.00924L33.982 5.99024C38.382 5.98624 41.985 9.58224 41.99 13.9822L42.009 33.9822C42.014 38.3832 38.417 41.9862 34.017 41.9902Z"
        fill="url(#paint1_radial_558_26260)"
      />
      <path
        d="M24 31C20.141 31 17 27.86 17 24C17 20.14 20.141 17 24 17C27.859 17 31 20.14 31 24C31 27.86 27.859 31 24 31ZM24 19C21.243 19 19 21.243 19 24C19 26.757 21.243 29 24 29C26.757 29 29 26.757 29 24C29 21.243 26.757 19 24 19Z"
        fill="white"
      />
      <path
        d="M31.5 18C32.3284 18 33 17.3284 33 16.5C33 15.6716 32.3284 15 31.5 15C30.6716 15 30 15.6716 30 16.5C30 17.3284 30.6716 18 31.5 18Z"
        fill="white"
      />
      <path
        d="M30 37H18C14.141 37 11 33.86 11 30V18C11 14.14 14.141 11 18 11H30C33.859 11 37 14.14 37 18V30C37 33.86 33.859 37 30 37ZM18 13C15.243 13 13 15.243 13 18V30C13 32.757 15.243 35 18 35H30C32.757 35 35 32.757 35 30V18C35 15.243 32.757 13 30 13H18Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_558_26260"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.38 42.0352) scale(44.899 44.899)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.328" stopColor="#FF543F" />
          <stop offset="0.348" stopColor="#FC5245" />
          <stop offset="0.504" stopColor="#E64771" />
          <stop offset="0.643" stopColor="#D53E91" />
          <stop offset="0.761" stopColor="#CC39A4" />
          <stop offset="0.841" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_558_26260"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.786 5.54054) scale(29.813 19.8644)"
        >
          <stop stopColor="#4168C9" />
          <stop offset="0.999" stopColor="#4168C9" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default Instagram
