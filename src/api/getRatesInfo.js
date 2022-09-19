import apiURL from "./api.url"

function getLatestRates() {
  return fetch(`${apiURL}latest`).then((res) => res.json())
}

function getSymbols() {
  return fetch(`${apiURL}symbols`).then((res) => res.json())
}

export { getLatestRates, getSymbols }
