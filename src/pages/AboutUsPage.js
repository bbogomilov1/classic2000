import AboutUsCompoent from "../components/about-us/AboutUsComponent";
import { Helmet } from "react-helmet";
import styles from "./AboutUsPage.module.css";
import aboutImage from "../static/about-us.png";
import transportImage from "../static/our-services.png";
import OurGoals from "../components/about-us/OurGoals";

const cardContent = {
  firstCardFront: <h1 className={styles.cardFrontContent}>Нашата мисия</h1>,
  firstCardBack: (
    <>
      <h3 className={styles.cardFrontContent}>Нашата мисия е:</h3>
      <ul className={styles.cardContentList}>
        <li className={styles.cardContentListItem}>
          Успешно сътрудничество в дългосрочен план с различните видове
          товародатели и изпълнение на желаните от тях изисквания за транспорт;
        </li>
        <li className={styles.cardContentListItem}>
          Да бъдем социално и обществено отговорни и да продължим да осигуряваме
          работни места за нашия регион;
        </li>
        <li className={styles.cardContentListItem}>
          Да бъдем партньор на своите клиенти, допринасяйки към взаимните бизнес
          отношения с лоялност и коректност.
        </li>
      </ul>
    </>
  ),
  secondCardFront: <h1 className={styles.cardFrontContent}>Нашата визия</h1>,
  secondCardBack: (
    <>
      <h3 className={styles.cardFrontContent}>Нашата визия е:</h3>
      <ul className={styles.cardContentList}>
        <li className={styles.cardContentListItem}>
          Постоянно да търсим нови начини и методи за оптимизация на работните
          процеси;
        </li>
        <li className={styles.cardContentListItem}>
          Да поддържаме и/или увеличаваме броя на превозните средства в
          автопарка;
        </li>
        <li className={styles.cardContentListItem}>
          Успешно да развиваме един задружен и мотивиран екип;
        </li>
        <li className={styles.cardContentListItem}>
          Да поддържаме своето добро име и позиция на транспортния пазар.
        </li>
      </ul>
    </>
  ),
};

function AboutUsPage() {
  return (
    <div>
      <Helmet>
        <title>Класик 2000 - За нас</title>
        <meta
          name="description"
          content="Научете повече за Класик 2000 - нашата мисия, визия и ангажименти към качествени транспортни услуги и регионалната общност."
        />
        <meta
          name="keywords"
          content="транспорт, логистика, визия, мисия, Класик 2000, България"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <img
        src={transportImage}
        alt="Транспортни услуги в България"
        className={styles.aboutImage}
      />
      <img
        src={aboutImage}
        alt="Нашето визионерско виждане за транспорт"
        className={styles.aboutImage}
      />

      <AboutUsCompoent />
      <div className={styles.goalsContainer}>
        <OurGoals
          cardFront={cardContent.firstCardFront}
          cardBack={cardContent.firstCardBack}
        />
        <OurGoals
          cardFront={cardContent.secondCardFront}
          cardBack={cardContent.secondCardBack}
        />
      </div>
    </div>
  );
}

export default AboutUsPage;
