import PropTypes from "prop-types";
import "./ButtonCard.css";
/**
 * ButtonCard
 * --------------------------------------------------------
 * Carte cliquable servant d’action principale.
 * Peut afficher :
 * - une icône
 * - un label
 * - une flèche optionnelle
 */
export default function ButtonCard({ icon, label, showArrow = true }) {
  return (
    <button className="button-card">
      <div className="button-card__left">
        {icon && <span className="button-card__icon">{icon}</span>}
        <span className="button-card__label">{label}</span>
      </div>

      {showArrow && <span className="button-card__arrow">›</span>}
    </button>
  );
}

ButtonCard.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  showArrow: PropTypes.bool,
};
