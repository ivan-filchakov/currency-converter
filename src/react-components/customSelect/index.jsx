import React, { useMemo } from "react"
import PropTypes from "prop-types"
import Select from "react-select"
import customSelectStyles from "./customSelectStyles"

function CustomSelect({ value, options, ...props }) {
  const selectValue = useMemo(
    () => options.find((option) => option.value === value),
    [value, options],
  )

  return (
    <Select
      styles={customSelectStyles}
      defaultValue={value}
      value={selectValue}
      options={options}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    />
  )
}

export default CustomSelect
CustomSelect.propTypes = {
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
}
