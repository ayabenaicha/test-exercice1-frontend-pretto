import PropTypes from "prop-types";
import "./SectionWidget.css";

export default function SectionWidget({ children }) {
  return (
    <section className="section-widget">
      {children}
    </section>
  );
}

SectionWidget.propTypes = {
  children: PropTypes.node.isRequired,
};
