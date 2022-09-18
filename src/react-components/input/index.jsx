import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./style.css"

function Input({ type, onChange, id }) {
  const [inputState, setInputState] = useState()
  function handleInputChange(el) {
    setInputState(el.target.value)
  }
  useEffect(() => {
    if (typeof onChange === "function") onChange(inputState)
  }, [inputState])

  return (
    <label htmlFor={id} className="input">
      <input
        type={type}
        onChange={handleInputChange}
        id={id}
      />
    </label>
  )
}

export default Input
Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}
