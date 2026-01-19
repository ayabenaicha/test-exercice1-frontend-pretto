import "./Navbar.css";
import NavbarLogo from "./NavbarLogo";
import NavbarItems from "./NavbarItems";
import NavbarProfile from "./NavbarProfile";
import NavbarHamburger from "./NavbarHamburger";
/**
 * Navbar
 * --------------------------------------------------------
 * Barre de navigation principale de l’application.
 * Elle contient :
 * - le logo
 * - les éléments de navigation (desktop)
 * - le profil utilisateur
 * - le menu hamburger (mobile / tablette)
 */
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <NavbarLogo />
        <NavbarItems />
        <NavbarProfile avatarLetter="C" email="prelead@pretto.fr" />

        <NavbarHamburger />
      </div>

      <div className="navbar__separator" />
    </header>
  );
}

