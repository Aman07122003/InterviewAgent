export default function Input({
    type = "text",
    className = "",
    disabled = false,
    ...props
  }) {
    const base =
      "w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
  
    return (
      <input
        type={type}
        className={`${base} ${className}`}
        disabled={disabled}
        {...props}
      />
    )
  }
  