// import React, { useMemo } from "react"
import React from "react"
import PropTypes from "prop-types"
import Select from "react-select"
import customSelectStyles from "./customSelectStyles"

function CustomSelect(
  {
    value,
    options,
    defaultValue,
    ...props
  },
) {
  // const selectValue = useMemo(
  //   () => options.find((option) => option.value === value),
  //   [value, options],
  // )
  // console.log({ selectValue })
  return (
    <Select
      styles={customSelectStyles}
      defaultValue={defaultValue}
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
  defaultValue: PropTypes.shape({
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
  defaultValue: undefined,
  options: [],
}
