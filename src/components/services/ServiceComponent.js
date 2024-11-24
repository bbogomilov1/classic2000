import styles from "./ServiceComponent.module.css";
import { useTranslation } from "react-i18next";
import servicesImage from "../../static/services.png";

const ServiceComponent = () => {
  const { t } = useTranslation("services");

  return (
    <div className={styles.container} id="services">
      <h1 className={styles.title}>{t("services.title")}</h1>

      <section className={styles.titleContainer}>
        <img
          src={servicesImage}
          alt="Сервизни услуги за камиони и товарни автомобили"
          className={styles.servicesImage}
        />

        <article className={styles.description}>
          <h2 className={styles.subtitle}>{t("services.subtitle1")}</h2>
          <p>{t("services.desc1")}</p>
          <ul>
            <li>{t("services.item1")}</li>
            <li>{t("services.item2")}</li>
            <li>{t("services.item3")}</li>
            <li>{t("services.item4")}</li>
            <li>{t("services.item5")}</li>
          </ul>

          <h2 className={styles.subtitle}>{t("services.subtitle2")}</h2>
          <p>{t("services.desc2")}</p>
          <p>{t("services.desc3")}</p>
        </article>
      </section>
    </div>
  );
};

export default ServiceComponent;
