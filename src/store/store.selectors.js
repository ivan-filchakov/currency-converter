import { useSelector } from "react-redux"

function useRatesData() {
  const ratesData = useSelector((store) => store.currencyRates.data)
  return { ...ratesData }
}

export default useRatesData
