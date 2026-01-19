import "./FinancingInfo.css";
import Card from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button/Button";

import imgDesktop from "@/assets/images/bottom-section-img.png";
import imgMobile from "@/assets/images/Img.png";
/**
 * FinancingInfo
 * --------------------------------------------------------
 * Section présentant l’attestation de financement.
 * Elle contient :
 * - un bloc de texte explicatif
 * - une liste de bénéfices (cartes grises)
 * - un bouton d’action principal
 * - une illustration adaptée au desktop et au mobile
 */
export default function FinancingInfo() {
  return (
    <section className="financing-info">
     
      <div className="financing-info__content">
        <h2 className="text-section-title">
          Votre attestation de financement
        </h2>

        <p className="text-section-description">
          Les biens de qualité reçoivent beaucoup d’offres. L’attestation de
          financement Pretto certifie au vendeur de votre capacité d’achat.
          De quoi le rassurer et mettre toutes les chances de votre côté.
        </p>

        <div className="financing-info__features">
          <Card
            title="Gratuite"
            description="Elle est incluse dans notre pack d’outils et services gratuits, et sans engagement !"
          />
          <Card
            title="Rapide"
            description="Recevez votre attestation en 24h, après dépôt des justificatifs."
          />
          <Card
            title="Rassurante"
            description="Destinée au vendeur, elle détaille votre projet de financement."
          />
        </div>

        <Button variant="secondary">
          Obtenir mon attestation
        </Button>
      </div>

      {/* RIGHT */}
      <div className="financing-info__visual">
        <picture>
          <source media="(min-width: 1440px)" srcSet={imgDesktop} />
          <img
            src={imgMobile}
            alt="Attestation de financement"
            loading="lazy"
          />
        </picture>
      </div>
    </section>
  );
}
