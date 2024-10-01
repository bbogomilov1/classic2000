import styles from "./ContactsComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faClock,
  faWrench,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactsComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Контакти</h1>

      <div className={styles.contactsContainer}>
        <h2 className={styles.contactsSubtitle}>
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className={styles.statisticsIcon}
          />
          Телефон
        </h2>
        <div className={styles.contactsDescription}>
          <a href="tel:+35994626060">+359 94 62 60 60</a>
        </div>

        <h2 className={styles.contactsSubtitle}>
          {" "}
          <FontAwesomeIcon icon={faClock} className={styles.statisticsIcon} />
          Работно време (офис)
        </h2>
        <p className={styles.contactsDescription}>
          Понеделник - Петък 09:00 - 18:00 часа
        </p>
        <p className={styles.contactsDescription}>
          Почивни дни - Събота и Неделя
        </p>

        <h2 className={styles.contactsSubtitle}>
          <FontAwesomeIcon icon={faWrench} className={styles.statisticsIcon} />
          Работно време (мобилен сервиз)
        </h2>
        <p className={styles.contactsDescription}>Без почивен ден</p>

        <h2 className={styles.contactsSubtitle}>
          <FontAwesomeIcon
            icon={faLocationDot}
            className={styles.statisticsIcon}
          />
          Офис, сервизна база, паркинг
        </h2>
        <p className={styles.contactsDescription}>
          Южна промишлена зона (до КАТ)
        </p>
        <p className={styles.contactsDescription}>3700 Видин, България</p>
        <p className={styles.contactsDescription}>
          GPS локация: 43.972651, 22.868933
        </p>
      </div>
    </div>
  );
};

export default ContactsComponent;
