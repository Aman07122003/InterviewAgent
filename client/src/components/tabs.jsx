import { useState } from "react"

// Root Tabs Wrapper
export function Tabs({ defaultValue, children, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <div className={className}>
      {typeof children === "function"
        ? children({ activeTab, setActiveTab })
        : children}
    </div>
  )
}

// Tabs List
export function TabsList({ children, className = "" }) {
  return (
    <div
      className={`inline-flex h-10 items-center rounded-md bg-gray-100 p-1 ${className}`}
    >
      {children}
    </div>
  )
}

// Tabs Trigger (Button)
export function TabsTrigger({
  value,
  activeTab,
  setActiveTab,
  children,
  className = "",
}) {
  const isActive = activeTab === value

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-3 py-1.5 text-sm rounded-md transition ${
        isActive
          ? "bg-white shadow text-black"
          : "text-gray-500 hover:text-black"
      } ${className}`}
    >
      {children}
    </button>
  )
}

// Tabs Content
export function TabsContent({
  value,
  activeTab,
  children,
  className = "",
}) {
  if (value !== activeTab) return null

  return <div className={`mt-2 ${className}`}>{children}</div>
}
