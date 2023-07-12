import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React, { useState } from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary" | "selected" | "option"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 rounded-md",
        {
          "text-black bg-theme_yellow-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white":
            variant === "primary",
          "text-gray-900 bg-transparent border-gray-920 hover:bg-gray-100":
            variant === "secondary",
          "text-theme_blue-900 bg-theme_yellow-900 border-gray-920 ":
            variant === "selected",
          "text-theme_yellow-900 bg-theme_blue-900 border-gray-920 ":
            variant === "option",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button
