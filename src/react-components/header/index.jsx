import React from "react"
import { BsCurrencyExchange } from "react-icons/bs"
import StatusBar from "../statusBar"
import "./style.css"

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <BsCurrencyExchange
          color="#2c2c2c"
          size="32px"
        />
      </div>
      <div className="header__status">
        <StatusBar from="USD" to="UAH" />
        <StatusBar from="EUR" to="UAH" />
      </div>
    </header>
  )
}

export default Header
