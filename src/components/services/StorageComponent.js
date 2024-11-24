import styles from "./StorageComponent.module.css";
import { useTranslation } from "react-i18next";

const StorageComponent = () => {
  const { t } = useTranslation("services");

  return (
    <div className={styles.container} id="storage">
      <h1 className={styles.title}>{t("storage.title")}</h1>

      <section className={styles.storageDescriptionContainer}>
        <p className={styles.storageDescription}>{t("storage.titleDesc")}</p>

        <h2>{t("storage.subtitle1")}</h2>
        <ul className={styles.storageDescriptionList}>
          <li className={styles.storageDescriptionListItem}>
            {t("storage.item1")}
          </li>
          <li className={styles.storageDescriptionListItem}>
            {t("storage.item2")}
          </li>
        </ul>

        <h2>{t("storage.subtitle2")}</h2>
        <p className={styles.storageDescription}>{t("storage.desc")}</p>
      </section>
    </div>
  );
};

export default StorageComponent;
