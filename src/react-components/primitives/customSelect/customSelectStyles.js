const customSelectStyles = {
  dropdownIndicator: (provided, { isFocused, isDisabled }) => ({
    ...provided,
    display: isDisabled ? "none" : "grid",
    transform: isFocused && "scaleY(-1)",
    transition: ".3s ease",
    color: isDisabled ? "#2c2c2c" : "#818181",
    ":hover": { color: "#2c2c2c" },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isDisabled ? "#2c2c2c" : "#818181",
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: "200px",
    scrollbarColor: "#FFD400 #C3C3C3",
    scrollbarWidth: "thin",
    "::-webkit-scrollbar": {
      width: "3px",
    },
    "::-webkit-scrollbar-track": {
      background: "#C3C3C3",
      borderRadius: "4px",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#FFD400",
      borderRadius: "4px",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 20,
    boxShadow: "none",
    backgroundColor: "#eeeeee",
    top: -8,
    zIndex: 110,
    paddingTop: 50,
    paddingRight: 11,
    paddingBottom: 16,
  }),
  valueContainer: (provided) => ({
    ...provided,
    color: "inherit",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "inherit",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    color: isSelected ? "#FFD400" : "#2c2c2c",
    backgroundColor: isSelected ? "#2c2c2c" : "none",
    paddingLeft: 18,
    paddingTop: 5,
    paddingBottom: 5,
    transition: ".3s ease",
    ":hover": {
      color: "#000000",
      backgroundColor: "#FFD400",
      cursor: "pointer",
    },
    ":active": {
      color: "red",
      backgroundColor: "none",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    minWidth: "100px",
    width: "100%",
    zIndex: state.isFocused ? 111 : 109,
    background: state.isFocused ? "#ffffff" : "#eeeeee",
    borderRadius: 32,
    border: `1px solid ${state.isFocused ? "#e6e6e6" : "transparent"}`,
    paddingLeft: 8,
    boxShadow: "none",
    color: state.isDisabled ? "#c2c2c2" : "#4A4847",
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      backgroundColor: "red",
    },
  }),
}

export default customSelectStyles
