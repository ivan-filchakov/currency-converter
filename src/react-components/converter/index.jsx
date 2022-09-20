import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { RiExchangeDollarFill } from "react-icons/ri"
import CurrencySelect from "../currencySelect"
import useRatesData from "../../store/store.selectors"
import "./style.css"

function Converter() {
  const ratesData = useRatesData()

  const dispatch = useDispatch()
  useEffect(() => {
    if (!ratesData.rates) dispatch({ type: "currencyRates/request" })
  }, [ratesData.rates])

  const defaultA = "USD"
  const defaultB = "UAH"

  const [converterState, setConverterState] = useState(null)

  useEffect(() => setConverterState({
    currencies: ratesData.formatedSymbols,
    rates: ratesData.rates,
    A: {
      default: ratesData.formatedSymbols?.find(
        (el) => el.value === defaultA,
      ),
      rate: ratesData.rates?.[defaultA],
      amount: 0,
    },
    B: {
      default: ratesData.formatedSymbols?.find(
        (el) => el.value === defaultB,
      ),
      rate: ratesData.rates?.[defaultB],
      amount: 0,
    },
  }), [ratesData.rates])

  const handleCurrencyChange = (el, direction = "AB") => {
    const [editCurrency, targetCurrency] = direction.split("")
    const exRate = converterState[editCurrency].rate
    const newRate = converterState.rates?.[el.selectedCurrency?.value] || exRate
    const convertRate = converterState[targetCurrency].rate
    const newAmount = Number((el.amount * (convertRate / newRate)).toFixed(2))

    setConverterState({
      ...converterState,
      [editCurrency]: {
        ...converterState[editCurrency],
        selected: el.selectedCurrency,
        rate: newRate,
        amount: el.amount,
      },
      [targetCurrency]: {
        ...converterState[targetCurrency],
        amount: newAmount,
      },
    })
  }

  const [rotate, setRotate] = useState(1)
  useEffect(
    () => setRotate(-rotate),
    [converterState?.A.selected, converterState?.B.selected],
  )

  const isLoaded = converterState?.A.rate && converterState?.B.rate

  return (
    isLoaded
    && (
      <div className="converter">
        <CurrencySelect
          currencies={converterState.currencies}
          selectedCurrency={converterState.A.selected}
          defaultCurrency={converterState.A.default}
          amount={converterState.A.amount}
          onChange={(e) => handleCurrencyChange(e, "AB")}
        />
        <CurrencySelect
          currencies={converterState.currencies}
          selectedCurrency={converterState.B.selected}
          defaultCurrency={converterState.B.default}
          amount={converterState.B.amount}
          onChange={(e) => handleCurrencyChange(e, "BA")}
        />
        <div
          className="converter__bg"
          style={{ transform: `rotate(${rotate * 180}deg)` }}
        >
          <RiExchangeDollarFill size="64px" color="rgba(0,0,0,0.04)" />
        </div>
      </div>
    )
  )
}

export default Converter
