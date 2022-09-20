import React from "react"
import PropTypes from "prop-types"
import Select from "react-select"
import customSelectStyles from "./customSelectStyles"

function CustomSelect(
  {
    value,
    options,
    ...props
  },
) {
  return (
    <Select
      styles={customSelectStyles}
      value={value}
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
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
}
CustomSelect.defaultProps = {
  value: undefined,
  options: [],
}
