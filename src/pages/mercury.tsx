import { useState } from "react";
// ===== component =====
import Layout from "../layouts/Layout";
import PlanetsPic from "../components/PlanetsPic";
import InformationContainer from "../container/InformationContainer";
import PlanetInformation from "../components/PlanetInfomation";

// ===== type =====
import type { CurrentPageInformation } from "../models/planet";

// ===== data =====
import { mercuryData } from "../data/planetData";

// ===== image =====
import MercuryOverviewPic from "../assets/planet-mercury.svg";
import MercuryInternalPic from "../assets/planet-mercury-internal.svg";
import MercurySurfacePic from "../assets/geology-mercury.png";

export default function Mercury() {
  const [currentView, setCurrentView] =
    useState<CurrentPageInformation>("overview");

  return (
    <Layout active={currentView} planet="mercury" onChange={setCurrentView}>
      <PlanetsPic
        currentView={currentView}
        overviewPath={MercuryOverviewPic}
        internalPath={MercuryInternalPic}
        surfacePath={MercurySurfacePic}
      />
      <PlanetInformation
        currentView={currentView}
        data={mercuryData}
        planet="mercury"
      />
      <InformationContainer informations={mercuryData.information} />
    </Layout>
  );
}
