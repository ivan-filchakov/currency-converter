import React from "react"
import Store from "./store"
import HomePage from "./pages/home-page"

function App() {
  return (
    <Store>
      <HomePage />
    </Store>
  )
}

export default App
