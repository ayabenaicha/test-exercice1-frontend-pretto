import logoPretto from "@/assets/svg/logo-pretto.svg";

/**
 * NavbarLogo
 * Affiche le logo Pretto dans la navbar.
 */
export default function NavbarLogo() {
  return (
    <div className="navbar-logo">
      <img src={logoPretto} alt="Pretto" />
    </div>
  );
}
