import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/index.tsx";
import Eservice from "./components/Eservices/index.tsx";
import UsefulContacts from "./components/UsefulContacts/index.tsx";
import Card from "./components/Card/index.tsx";
import image1 from "./assets/MinistryProgramImages/image 1.svg";
import image2 from "./assets/MinistryProgramImages/image 2.svg";
import image3 from "./assets/MinistryProgramImages/image 3.svg";
import image4 from "./assets/MinistryProgramImages/image 4.svg";
import image5 from "./assets/MinistryProgramImages/image 5.svg";
import image6 from "./assets/MinistryProgramImages/image 6.svg";
import image7 from "./assets/MinistryProgramImages/image 7.svg";
import image8 from "./assets/MinistryProgramImages/image 8.svg";
import image9 from "./assets/MinistryProgramImages/image 9.svg";
import image10 from "./assets/MinistryProgramImages/image 10.svg";
import ejar from "./assets/MinistryProgramImages/ejar.svg";
import ejarbg from "./assets/MinistryProgramImages/ejarbg.png";
import mobileAppsImage from "./assets/MinistryProgramImages/IphoneApps 1.png";
import visionbg from "./assets/MinistryProgramImages/2030vision.png";
import MOMRAHCard from "./assets/MinistryProgramImages/MOMRAHCard.png";
import ServicePage from "./pages/ServicePage/servicePage.tsx";
import { Button } from "@chakra-ui/react";

import card1 from "./assets/cards/card1.png";
import card2 from "./assets/MinistryProgramImages/MOMRAHCard.png";
import card3 from "./assets/cards/card2.png";
import card4 from "./assets/cards/card3.png";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

const CardItem = ({
  description,
  programSiteURL,
  title,
  titleImage,
  backgroundImageURL,
}: any) => {
  return (
    <div
      className="update-card"
      style={{
        background: `linear-gradient(194deg, rgba(0, 0, 0, 0.00) 32.55%, #000 76.82%), url(${backgroundImageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="update-card-text">
        {titleImage && <img src={titleImage} alt={title} />}
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

const Home = () => (
  <div className="App">
    <div className="App-content">
      <div className="hero-section">
        <div className="hero-text">
          Enhancing integration of Municipal Services and housing products for
          Saudi cities
        </div>
      </div>
      <div className="home-content">
        <Eservice />
        <UsefulContacts />
        <div></div>
      </div>

      <div className="ministry-programs">
        <div className="ministry-programs-title">Ministry Programs</div>
        <div className="ministry-programs-content">
          <Card
            desciption="The Sustainable Building Program was set to offer various services that help establish the sustainability of the housing units. Such services include:
Construction quality inspection.
Prefabricated building inspection.
Building sustainability evaluation."
            programSiteURL="./assets/MinistryProgramImages/1.png"
            title="Sustainable Building"
            titleImage={image1}
          />
          <Card
            desciption="The Developmental Housing Program works with non-governmental associations and organizations across all the Kingdom’s cities and governorates to provide eligible families and those in need in society with the right of usufruct on housing units that have been donated through the Housing Support Portal run by the Ministry of Human Resources and Social Development (HRSD)."
            programSiteURL="./assets/MinistryProgramImages/2.png"
            title="Development Housing"
            titleImage={image2}
          />
          <Card
            backgroundImageURL={ejarbg}
            programSiteURL="./assets/MinistryProgramImages/2.png"
            titleImage={ejar}
          />
          <Card
            desciption="The Real Estate Units Subdivision service provides the procedures and requirements that allow sorting (subdividing) a building or real estate complex into several real estate units. The service establishes all the information on the unit, its share of land, the common parts of the real estate and the rights of use."
            programSiteURL="./assets/MinistryProgramImages/3.png"
            title="Real Estate Units Subdivision"
            titleImage={image3}
          />
          <Card
            desciption="The Ministry of Housing launched the Cooperative Housing Initiative in line with Vision 2030. The Initiative aims to improve access to affordable housing by regulating and bolstering cooperative housing societies. "
            programSiteURL="./assets/MinistryProgramImages/4.png"
            title="Cooperative Housing"
            titleImage={image4}
          />
          <Card
            desciption="The Modern Construction Initiative is one of the main pillars of the construction industry that aims to facilitate the transition from traditional to modern construction. Its approach is investing in cutting-edge technologies and keeping pace with the advancements in the industry. "
            programSiteURL="./assets/MinistryProgramImages/4.png"
            title="Construction Initiative"
            titleImage={image5}
          />
          <Card
            desciption="Creating an innovative real estate environment through a real estate incentive initiative that contributes to catalyzing investments in the real estate market and achieving a balance between supply and demand. "
            programSiteURL="./assets/MinistryProgramImages/4.png"
            title="Real Estate Stimulus"
            titleImage={image6}
          />
          <Card
            desciption="The Idle Lands Program is designated for the construction and development of idle lands through the creation of investment opportunities and the encouragement of the private sector to establish an active balance between supply and demand and motivate landowners to construct their lands and avoid the payment of fees on their undeveloped lands."
            programSiteURL="./assets/MinistryProgramImages/4.png"
            title="Idle Lands"
            titleImage={image7}
          />
          <Card
            desciption="Mullak Program was initiated by MOMRAH to facilitate the formation of homeowner associations (HOAs) and the management of the jointly-owned property. With this Program, owners can easily gain access to various services, maintain clear lines of communication, and keep their properties well-organized."
            programSiteURL="./assets/MinistryProgramImages/4.png"
            title="Mullak"
            titleImage={image8}
          />
          <Card
            programSiteURL="./assets/MinistryProgramImages/4.png"
            backgroundImageURL={visionbg}
          />
          <Card
            desciption="Housing development is a priority in Saudi Arabia, and the Developers Services Center is working to facilitate this goal by empowering real estate developers and streamlining the approvals and permit-getting processes. Etmam offers government and non-government relevant bodies and authorities a full set of administrative and consultation services they could possibly need."
            programSiteURL="./assets/MinistryProgramImages/4.png"
            title="Etmam"
            titleImage={image9}
          />
          <Card
            desciption="The Saudi Arabian government issued a decision to exempt property deals from 15 percent Value-added Tax (VAT) for properties worth up to SAR 1 million for first-time homebuyers with the objective of reducing home ownership costs for Saudi citizens."
            programSiteURL="./assets/MinistryProgramImages/4.png"
            title="VAT for First-time Homebuyers"
            titleImage={image10}
          />
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <div style={{ fontWeight: "600", fontSize: "22px" }}>
              You can now complete most of your proceedings through the
              Ministry’s apps
            </div>
            <Button className="footer-button" variant={"ghost"}>
              View Apps
            </Button>
          </div>
          <img src={mobileAppsImage} className="footer-image" alt="test" />
        </div>
      </div>
      <div className="ministry-updates">
        <div className="ministry-updates-title">Ministry Latest Updates</div>
        <div className="ministry-updates-content">
          <CardItem
            backgroundImageURL={card1}
            description="Minister of Municipal, Rural Affairs, and Housing Witnesses the Signing of Cooperation Agreement ...."
          />
          <CardItem
            backgroundImageURL={card2}
            description="MOMRAH Issues Updated Requirements for Construction of Residential Buildings"
          />
          <CardItem
            backgroundImageURL={card3}
            description="“Balady Maps”, a Navigation Feature Enabling Users to Quickly Access Locations Within Saudi Cities"
          />
          <CardItem
            backgroundImageURL={card4}
            description="Al-Hogail meets with the head of the Investment Office of the Turkish Presidency in Istanbul to discuss ..."
          />
        </div>
      </div>
    </div>
  </div>
);

export default App;
