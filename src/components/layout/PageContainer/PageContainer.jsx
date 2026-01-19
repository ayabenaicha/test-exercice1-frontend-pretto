import PropTypes from "prop-types";
import "./PageContainer.css";
/**
 * PageContainer
 * --------------------------------------------------------
 * Conteneur centralisant le contenu de la page.
 * Il fixe :
 * - la largeur maximale (Figma)
 * - les marges horizontales
 * - l’espacement vertical entre sections
 */
export default function PageContainer({ children }) {
  return (
    <div className="page-container">
      {children}
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
