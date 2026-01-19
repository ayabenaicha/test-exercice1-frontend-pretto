import NavItem from "./NavItem";
import HouseIcon from "@/assets/svg/House.svg?react";
import TuneIcon from "@/assets/svg/Tune.svg?react";
import HelpIcon from "@/assets/svg/help.svg?react";
/**
 * NavbarItems
 * --------------------------------------------------------
 * Ensemble des éléments de navigation visibles sur desktop.
 */
export default function NavbarItems() {
  return (
    <nav className="navbar-items">
      <NavItem
        label="Tableau de bord"
        icon={<HouseIcon width={24} height={24} />}
        active
      />

      <NavItem
        label="Simulation"
        icon={<TuneIcon width={24} height={24} />}
      />
      {/* Icône seule (aide) */}
      <NavItem
        icon={<HelpIcon width={24} height={24} />}
      />
      {/* Séparateur visuel */}
      <div className="separator_element" />
    </nav>
  );
}
