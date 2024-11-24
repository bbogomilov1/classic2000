import styles from "./TitleSection.module.css";
import { useTranslation } from "react-i18next";

const TitleSection = () => {
  const { t } = useTranslation("home");

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>{t("titleSection.title")}</h1>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{t("titleSection.desc")}</p>

        <h2 className={styles.subtitle}>{t("titleSection.subtitle1")}</h2>
        <p className={styles.description}>{t("titleSection.desc1")}</p>

        <h2 className={styles.subtitle}>{t("titleSection.subtitle2")}</h2>
        <p className={styles.description}>{t("titleSection.desc2")}</p>

        <h2 className={styles.subtitle}>{t("titleSection.subtitle3")}</h2>
        <p className={styles.description}>{t("titleSection.desc3")}</p>
      </div>
    </div>
  );
};

export default TitleSection;
