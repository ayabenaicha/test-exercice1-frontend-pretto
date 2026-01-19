import Navbar from "../../components/layout/Navbar/Navbar";
import Background from "../../components/layout/Background/Background";
import PageContainer from "../../components/layout/PageContainer/PageContainer";
import SectionWidget from "../../components/layout/SectionWidget/SectionWidget";

import ProjectIntro from "../../components/layout/ProjectIntro/ProjectIntro";
import FinancingInfo from "../../components/layout/FinancingInfo/FinancingInfo";
/**
 * Dashboard
 * --------------------------------------------------------
 * Page principale de l’application.
 * Assemble :
 * - la navbar
 * - le fond décoratif
 * - les sections métier
 */
export default function Dashboard() {
  return (
    <>
      <Navbar />

      <Background>
        <PageContainer>
          <SectionWidget>
            <ProjectIntro />
          </SectionWidget>

          <SectionWidget>
            <FinancingInfo />
          </SectionWidget>
        </PageContainer>
      </Background>
    </>
  );
}
