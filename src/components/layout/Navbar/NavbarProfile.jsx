import PropTypes from "prop-types";
import { ChevronDownIcon } from "@/components/ui/icons/ChevronDownIcon";

/**
 * NavbarProfile
 * Bloc profil (visuel uniquement, conforme au design Figma)
 */
export default function NavbarProfile({ avatarLetter, email }) {
  return (
    <div className="navbar-profile-wrapper">
      <div className="navbar-profile" aria-label="Profil">
        <div className="navbar-profile__avatar" aria-hidden="true">
          {avatarLetter}
        </div>


        <span className="navbar-profile__email">{email}</span>
        <ChevronDownIcon size={16} className="navbar-profile__chevron" />
      </div>
    </div>
  );
}

NavbarProfile.propTypes = {
  avatarLetter: PropTypes.string,
  email: PropTypes.string,
};

NavbarProfile.defaultProps = {
  avatarLetter: "C",
  email: "prelead@pretto.fr",
};
