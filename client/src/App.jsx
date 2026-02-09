import React from "react"
import Button from "./components/button"

const App = () => {
  return (
    <div className="bg-amber-400 h-screen w-full flex items-center justify-center">
      <Button variant="danger" size="md">
        Click Me
      </Button>
    </div>
  )
}

export default App
