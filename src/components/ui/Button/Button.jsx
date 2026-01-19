import PropTypes from "prop-types";
import "./Button.css";
/**
 * Button
 * --------------------------------------------------------
 * Bouton principal réutilisable.
 * Utilisé pour les actions importantes.
 */
export default function Button({ children, ...props }) {
  return (
    <button className="btn-attestation" {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
