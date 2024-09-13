import styles from "./HomePage.module.css";
import homeImage from "../static/home.jpg";
import TitleSection from "../components/home/TitleSection.js";
import Statistics from "../components/home/Statistics.js";
import OurOffers from "../components/home/OurOffers.js";
import FormComponent from "../components/home/FormComponent.js";
import PartnersSlider from "../components/home/PartnersSlider.js";

function HomePage() {
  return (
    <div>
      <img src={homeImage} alt="transport" className={styles.homeImage} />

      <TitleSection />
      <Statistics />
      <OurOffers />
      <FormComponent />
      <PartnersSlider />
    </div>
  );
}

export default HomePage;
