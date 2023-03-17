import { memo } from "react";
import PropTypes from "prop-types";

const buttonPartialOptions = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  warning: "warning",
  info: "info",
  light: "light",
  dark: "dark",
  link: "link",
};

// parent: <ButtonPartial btnOption="">click me</ButtonPartial>

const ButtonPartial = ({ btnOption, icon, children, onClick }) => {
  // const defaultBtnOption = buttonPartialOptions.primary;
  return (
    // <button className={`btn btn-${btnOption ? btnOption : defaultBtnOption}`}>
    <button className={`btn btn-${btnOption} my-2 me-2`} onClick={onClick}>
      {icon && <i className={`bi ${icon}`}></i>}
      {children}
    </button>
  );
};
ButtonPartial.propTypes = {
  btnOption: PropTypes.oneOf(Object.values(buttonPartialOptions)), //convert object values to array of values
  icon: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonPartial.defaultProps = {
  btnOption: buttonPartialOptions.primary,
};

export { buttonPartialOptions };
export default memo(ButtonPartial);
