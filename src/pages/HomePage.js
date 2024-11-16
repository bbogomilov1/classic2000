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
          content="транспортни услуги, складови решения, охраняем паркинг, логистика, международен транспорт, Класик 2000, Видин, България, логистични услуги, складово пространство"
        />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="http://localhost:3000/" /> */}
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
