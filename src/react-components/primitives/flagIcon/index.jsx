import React from "react"
import PropTypes from "prop-types"
import "./styles.css"

function FlagIcon({ id, size }) {
  const flagId = id.toLowerCase()
  const flagSize = size ? ` currency-flag-${size}` : ""
  return (
    <div className={`currency-flag${flagSize} currency-flag-${flagId}`} />
  )
}

export default FlagIcon
FlagIcon.propTypes = {
  id: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
}
FlagIcon.defaultProps = {
  id: undefined,
  size: undefined,
}
