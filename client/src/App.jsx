import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
  )
}

export default App
