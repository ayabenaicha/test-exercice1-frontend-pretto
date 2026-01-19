/**
 * NavItem
 * --------------------------------------------------------
 * Élément individuel de navigation.
 * Peut contenir :
 * - une icône
 * - un label
 * - un état actif
 */
export default function NavItem({ label, icon, active = false }) {
  return (
    <button className={`nav-item ${active ? "nav-item--active" : ""}`}>
      {icon && <span className="nav-item__icon">{icon}</span>}
      {label && <span className="nav-item__label">{label}</span>}
    </button>
  );
}
