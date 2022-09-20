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

  const handleInputChange = (el) => setInputState(Number(el.target.value))
  const handleFocus = (el) => el.target.select()

  useEffect(() => {
    if (typeof onChange === "function") onChange(inputState)
  }, [inputState])

  return (
    <label htmlFor={id} className="input">
      <input
        type={type}
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
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
