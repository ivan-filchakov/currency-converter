import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./style.css"

function Input(
  {
    type,
    value,
    onChange,
    id,
  },
) {
  const [inputState, setInputState] = useState(value)
  function handleInputChange(el) {
    setInputState(Number(el.target.value))
  }
  useEffect(() => {
    if (typeof onChange === "function") onChange(inputState)
  }, [inputState])

  return (
    <label htmlFor={id} className="input">
      <input
        type={type}
        value={inputState}
        onChange={handleInputChange}
        id={id}
      />
    </label>
  )
}

export default Input
Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}
