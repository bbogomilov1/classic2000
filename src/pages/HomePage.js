import styles from "./HomePage.module.css";
import homeImage from "../static/home.jpg";
import TitleSection from "../components/home/TitleSection.js";
import Statistics from "../components/home/Statistics.js";
import OurOffers from "../components/home/OurOffers.js";
import FormComponent from "../components/home/FormComponent.js";

function HomePage() {
  return (
    <div className={styles.container}>
      {/* <div className={styles.homeContainer}> */}
      {/* <img src={homeImage} alt="transport" className={styles.homeImage} /> */}

      <TitleSection />
      {/* </div> */}

      <Statistics />
      <OurOffers />
      <FormComponent />
    </div>
  );
}

export default HomePage;
