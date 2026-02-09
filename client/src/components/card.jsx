// Main Card Container
export function Card({ children, className = "", ...props }) {
    const base = "rounded-lg border bg-white shadow-sm"
  
    return (
      <div className={`${base} ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  // Header
  export function CardHeader({ children, className = "", ...props }) {
    return (
      <div className={`p-6 space-y-2 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  // Title
  export function CardTitle({ children, className = "", ...props }) {
    return (
      <h3 className={`text-xl font-semibold ${className}`} {...props}>
        {children}
      </h3>
    )
  }
  
  // Description
  export function CardDescription({ children, className = "", ...props }) {
    return (
      <p className={`text-sm text-gray-500 ${className}`} {...props}>
        {children}
      </p>
    )
  }
  
  // Content
  export function CardContent({ children, className = "", ...props }) {
    return (
      <div className={`px-6 pb-6 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  // Footer
  export function CardFooter({ children, className = "", ...props }) {
    return (
      <div className={`px-6 pb-6 flex items-center ${className}`} {...props}>
        {children}
      </div>
    )
  }
  