import PropTypes from "prop-types";
import CheckIcon from "@/assets/svg/Stroke.svg?react";
import "./Card.css";
/**
 * Card
 * --------------------------------------------------------
 * Carte informative utilisée pour afficher
 * un avantage ou une caractéristique.
 */
export default function Card({ title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-card__title">
        <CheckIcon />
        <span >{title}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
