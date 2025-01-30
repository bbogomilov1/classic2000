import AboutUsCompoent from "../components/about-us/AboutUsComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styles from "./AboutUsPage.module.css";
import { useTranslation } from "react-i18next";
import aboutImage from "../static/about-us.webp";
import transportImage from "../static/our-services.webp";
import OurGoals from "../components/about-us/OurGoals";

function AboutUsPage() {
  const { t } = useTranslation("aboutUs");

  const cardContent = {
    firstCardFront: (
      <h1 className={styles.cardFrontContent}>{t("titleFront1")}</h1>
    ),
    firstCardBack: (
      <>
        <h3 className={styles.cardFrontContent}>{t("titleBack1")}</h3>
        <ul className={styles.cardContentList}>
          <li className={styles.cardContentListItem}>{t("descBack1.desc1")}</li>
          <li className={styles.cardContentListItem}>{t("descBack1.desc2")}</li>
          <li className={styles.cardContentListItem}>{t("descBack1.desc3")}</li>
        </ul>
      </>
    ),
    secondCardFront: (
      <h1 className={styles.cardFrontContent}>{t("titleFront2")}</h1>
    ),
    secondCardBack: (
      <>
        <h3 className={styles.cardFrontContent}>{t("titleBack2")}</h3>
        <ul className={styles.cardContentList}>
          <li className={styles.cardContentListItem}>{t("descBack2.desc1")}</li>
          <li className={styles.cardContentListItem}>{t("descBack2.desc2")}</li>
          <li className={styles.cardContentListItem}>{t("descBack2.desc3")}</li>
          <li className={styles.cardContentListItem}>{t("descBack2.desc4")}</li>
        </ul>
      </>
    ),
  };

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Класик 2000 - За нас, Нашите Мисия и Визия</title>
          <meta
            name="description"
            content="Научете повече за Класик 2000 - нашата мисия, визия и ангажименти към качествени транспортни услуги и регионалната общност."
          />
          <meta
            name="keywords"
            content="транспорт, логистика, визия, мисия, Класик 2000, Видин, България, регионални услуги, международен транспорт, качествени услуги"
          />
          <meta name="robots" content="index, follow" />
          {/* <link rel="canonical" href="http://localhost:3000/about-us" /> */}
        </Helmet>
      </HelmetProvider>

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
