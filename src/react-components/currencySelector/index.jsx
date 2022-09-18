import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Input from "../primitives/input"
import Select from "../primitives/customSelect"
import "./style.css"

function CurrencySelector(
  {
    currencies,
    selectedCurrency,
    amount,
    onChange,
  },
) {
  const [currencyState, setCurrencyState] = useState({
    selectedCurrency,
    amount,
  })
  const handleInputChange = (el) => {
    setCurrencyState({ ...currencyState, amount: el })
  }
  const handleSelectChange = (el) => {
    setCurrencyState({ ...currencyState, selectedCurrency: el })
  }
  useEffect(() => {
    if (typeof onChange === "function") onChange(currencyState)
  }, [currencyState])
  return (
    <div className="currencySelect">
      <div className="currencySelect__select">
        <Select
          options={currencies}
          value={selectedCurrency}
          onChange={handleSelectChange}
        />
      </div>
      <div className="currencySelect__input">
        <Input
          type="number"
          value={amount}
          onChange={handleInputChange}
          id="curr1"
        />
      </div>
    </div>
  )
}

export default CurrencySelector
CurrencySelector.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  selectedCurrency: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  amount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
