import AboutUsCompoent from "../components/about-us/AboutUsComponent";
import styles from "./AboutUsPage.module.css";
import aboutImage from "../static/about-us.png";
import PresentationButton from "../components/about-us/PresentationButton";
import OurGoals from "../components/about-us/OurGoals";

const cardContent = {
  firstCardFront: <h1 className={styles.cardFrontContent}>Нашата мисия</h1>,
  firstCardBack: (
    <>
      <h3>Нашата мисия е:</h3>
      <ul className={styles.cardContentList}>
        <li className={styles.cardContentListItem}>
          Успешно сътрудничество в дългосрочен план с производители и търговци
          на едро, търсещи нови възможности за развитие;
        </li>
        <li className={styles.cardContentListItem}>
          Постоянно да търсим нови методи и начини за подобрение на предлаганите
          от нас услуги;
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
      <h3>
        Ние, в Класик2000 ООД, целим непрекъснато да се развиваме във всички
        важни насоки за нашата дейност, като:
      </h3>
      <ul className={styles.cardContentList}>
        <li className={styles.cardContentListItem}>
          разширяваме набора от предлагани услуги;
        </li>
        <li className={styles.cardContentListItem}>
          увеличаваме броя на превозните средства в автопарка;
        </li>
        <li className={styles.cardContentListItem}>
          успешно развиваме един задружен и мотивиран екип;
        </li>
        <li className={styles.cardContentListItem}>
          подобряваме своята позиция и поддържаме своето добро име сред
          участниците в пазара на националния и международния транспорт.
        </li>
      </ul>
    </>
  ),
};

function AboutUsPage() {
  return (
    <div>
      <img src={aboutImage} alt="transport" className={styles.aboutImage} />

      <AboutUsCompoent />
      <PresentationButton />
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
