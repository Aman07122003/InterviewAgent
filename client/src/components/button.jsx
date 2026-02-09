import React from "react"
export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    ...props
  }) {
    // base styles (always applied)
    const base =
      "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
    // variant styles
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      outline:
        "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-400",
      ghost: "hover:bg-gray-100 text-gray-900 focus:ring-gray-400",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    }
  
    // size styles
    const sizes = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10",
    }
  
    // fallback safety (prevents runtime errors)
    const variantClasses = variants[variant] || variants.primary
    const sizeClasses = sizes[size] || sizes.md
  
    return (
      <button
        className={`${base} ${variantClasses} ${sizeClasses} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
  