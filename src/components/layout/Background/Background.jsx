import PropTypes from "prop-types";
import "./Background.css";


/**
 * Background
 * --------------------------------------------------------
 * Composant de layout global chargé de :
 * - fournir un fond blanc pour l’ensemble de la page
 * - afficher une zone décorative grise avec l’illustration "city"
 *   en haut de la page (élément purement visuel)
 * - contenir le contenu réel de l’application au-dessus du décor
 *
 * Ce composant ne gère aucune logique métier.
 * Il sert uniquement à structurer et habiller la page.
 */
export default function Background({ children }) {
  return (
    <section className="background">
      <div className="background__city" aria-hidden="true" />
      <div className="background__content">
        {children}
      </div>
    </section>
  );
}

Background.propTypes = {
  children: PropTypes.node.isRequired,
};
