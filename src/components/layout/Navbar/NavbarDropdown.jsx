import PropTypes from "prop-types";

/**
 * NavbarDropdown
 * Dropdown visuel 
 */
export default function NavbarDropdown({ isOpen }) {
  if (!isOpen) return null;

  return <div className="navbar-dropdown" />;
}

/* Validation des props */
NavbarDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
