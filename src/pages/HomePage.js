import styles from "./HomePage.module.css";
import homeImage from "../static/home.jpg";
import TitleSection from "../components/home/TitleSection.js";
import Statistics from "../components/home/Statistics.js";
import OurOffers from "../components/home/OurOffers.js";
import FormComponent from "../components/home/FormComponent.js";

import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/services");
  };

  return (
    <div>
      <div className={styles.homeContainer}>
        <img src={homeImage} alt="transport" className={styles.homeImage} />

        <TitleSection />
      </div>

      <Statistics />
      <OurOffers />
      <div className={styles.seeMoreButtonContainer}>
        <button className={styles.seeMoreButton} onClick={handleSeeMoreClick}>
          вижте повече
        </button>
      </div>
      <FormComponent />
    </div>
  );
}

export default HomePage;
