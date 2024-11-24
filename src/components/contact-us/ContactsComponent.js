import styles from "./ContactsComponent.module.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactsComponent = () => {
  const { t } = useTranslation("contacts");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>

      <div className={styles.contactsContainer}>
        <h2 className={styles.contactsSubtitle}>
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className={styles.statisticsIcon}
            aria-hidden="true"
          />
          {t("phoneTitle")}
        </h2>
        <div className={styles.contactsDescription}>
          <a href="tel:+35994626060" title="Обадете се на офис телефона">
            {t("phoneDesc1")}
          </a>
          <a href="tel:+359899610075" title="Обадете се на сервизния телефон">
            {t("phoneDesc2")}
          </a>
        </div>

        <h2 className={styles.contactsSubtitle}>
          {" "}
          <FontAwesomeIcon icon={faClock} className={styles.statisticsIcon} />
          {t("workingHoursTitle")}
        </h2>
        <p className={styles.contactsDescription}>{t("workingHoursDesc1")}</p>
        <p className={styles.contactsDescription}>{t("workingHoursDesc2")}</p>

        <h2 className={styles.contactsSubtitle}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.statisticsIcon}
            aria-hidden="true"
          />
          {t("addressTitle")}
        </h2>
        <p className={styles.contactsDescription}>{t("addressDesc1")}</p>
        <p className={styles.contactsDescription}>{t("addressDesc2")}</p>
        <p className={styles.contactsDescription}>{t("addressDesc3")}</p>
      </div>
    </div>
  );
};

export default ContactsComponent;
