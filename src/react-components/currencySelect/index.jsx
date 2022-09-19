import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Input from "../primitives/input"
import Select from "../primitives/customSelect"
import "./style.css"

function CurrencySelect(
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
          value={currencyState.selectedCurrency}
          onChange={handleSelectChange}
          placeholder="Choose currency..."
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

export default CurrencySelect
CurrencySelect.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  selectedCurrency: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  amount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}
CurrencySelect.defaultProps = {
  currencies: undefined,
  selectedCurrency: undefined,
}
