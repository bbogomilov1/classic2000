import styles from "./TransportComponent.module.css";
import { useTranslation } from "react-i18next";
import transportImage from "../../static/IMG_0472.jpg";

const TransportComponent = () => {
  const { t } = useTranslation("services");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("transport.title")}</h1>
      <section className={styles.titleContainer}>
        <img
          src={transportImage}
          alt="Транспортни услуги на Класик 2000"
          className={styles.transportImage}
        />

        <article className={styles.description}>
          <h2 className={styles.subtitle}>{t("transport.subtitle1")}</h2>
          <p>{t("transport.desc1")}</p>

          <h2 className={styles.subtitle}>{t("transport.subtitle2")}</h2>
          <p>{t("transport.desc2")}</p>

          <h2 className={styles.subtitle}>{t("transport.subtitle3")}</h2>
          <p>{t("transport.desc3")}</p>

          <h2 className={styles.subtitle}>{t("transport.subtitle4")}</h2>
          <p>{t("transport.desc4")}</p>
        </article>
      </section>
    </div>
  );
};

export default TransportComponent;
