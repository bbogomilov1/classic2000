import styles from "./ContactsComponent.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faClock,
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
          Телефон:
        </h2>
        <div className={styles.contactsDescription}>
          <a href="tel:+35994626060">+359 94 62 60 60 - офис</a>
          <a href="tel:+359899610075">
            +359 899 610075 - сервиз (от 09ч до 17ч)
          </a>
        </div>

        <h2 className={styles.contactsSubtitle}>
          {" "}
          <FontAwesomeIcon icon={faClock} className={styles.statisticsIcon} />
          Работно време офис и сервиз:
        </h2>
        <p className={styles.contactsDescription}>
          Понеделник - петък 09:00 - 17.30 ч.
        </p>
        <p className={styles.contactsDescription}>
          Почивни дни - събота и неделя
        </p>

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
        <p className={styles.contactsDescription}>Гр. Видин, България</p>
        <p className={styles.contactsDescription}>
          GPS локация: 43.972651, 22.868933
        </p>
      </div>
    </div>
  );
};

export default ContactsComponent;
