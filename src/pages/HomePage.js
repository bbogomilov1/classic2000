import styles from "./HomePage.module.css";
import { Helmet } from "react-helmet";
import homeImage from "../static/home.jpg";
import TitleSection from "../components/home/TitleSection.js";
import Statistics from "../components/home/Statistics.js";
import OurOffers from "../components/home/OurOffers.js";
import FormComponent from "../components/home/FormComponent.js";

function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Класик 2000 - Транспортни услуги и складови решения</title>
        <meta
          name="description"
          content="Класик 2000 предлага транспортни услуги, складови решения и охраняеми паркинги. Разберете повече за нашите услуги и свържете се с нас."
        />
        <meta
          name="keywords"
          content="транспорт, складови решения, охраняеми паркинги, логистика, Видин, България"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className={styles.homeContainer}>
        <img
          src={homeImage}
          alt="Транспортни услуги в България"
          className={styles.homeImage}
        />

        <TitleSection />
      </div>

      <Statistics />
      <OurOffers />
      <FormComponent />
    </div>
  );
}

export default HomePage;
