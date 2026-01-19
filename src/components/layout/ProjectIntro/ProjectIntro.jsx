import ButtonCard from "@/components/ui/ButtonCard/ButtonCard";
import "./ProjectIntro.css";
import CalculatorIcon from "@/assets/svg/Calculator.svg?react";
import CoinsIcon from "@/assets/svg/Coins.svg?react";
import projectIntroImg from "@/assets/images/project-intro.png";
/**
 * ProjectIntro
 * --------------------------------------------------------
 * Section d’introduction du projet.
 * Présente :
 * - un titre
 * - une description
 * - des actions principales (cartes-boutons)
 * - une illustration
 */
export default function ProjectIntro() {
  return (
    <div className="project-intro">
      <h2 className="text-section-title">
        Préparez votre projet en toute facilité
      </h2>

      <div className="project-intro__content">
       
        <div className="project-intro__left">
          <p className="text-section-description">
            Vous aimeriez savoir quel crédit vous pourriez obtenir pour votre
            projet ? Nos simulateurs sont connectés à un algorithme unique sur
            le marché nous permettant de connaître avec précision les offres
            des banques et d’identifier la meilleure pour vous.
          </p>

          <div className="project-intro__actions">
            <ButtonCard
              icon={<CalculatorIcon width={24} height={24} />}
              label="Simuler mon prêt"
            />
            <ButtonCard
              icon={<CoinsIcon width={24} height={24} />}
              label="Simuler mon rachat"
            />
          </div>
        </div>

     
        <div className="project-intro__right">
        <div className="project-intro__visual">
          <img
            src={projectIntroImg}
            alt="Simulation de crédit"
            loading="lazy"
           
          />
          </div>
        </div>
      </div>
    </div>
  );
}
