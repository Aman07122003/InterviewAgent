export default function Label({
    children,
    className = "",
    htmlFor,
    ...props
  }) {
    const base = "text-sm font-medium leading-none"
  
    return (
      <label
        htmlFor={htmlFor}
        className={`${base} ${className}`}
        {...props}
      >
        {children}
      </label>
    )
  }
  