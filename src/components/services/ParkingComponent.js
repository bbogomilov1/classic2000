import { Col, Row } from "react-bootstrap";
import MapComponent from "../MapComponent";
import styles from "./ParkingComponent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faTreeCity } from "@fortawesome/free-solid-svg-icons";

const ParkingComponent = () => {
  return (
    <div className={styles.container} id="parking">
      <h1 className={styles.title}>Охраняем ТИР паркинг във Видин</h1>

      <p className={styles.description}>
        Паркингът се намира в базата ни. Локацията е удобна, защото се намира на
        влизане в град Видин. На около километър след отбивката за околовръстен
        път водещ към Дунав Мост 2.
      </p>

      <MapComponent />

      <Row className={styles.storageRow}>
        <Col className={styles.storageCol}>
          <FontAwesomeIcon
            icon={faShieldHalved}
            className={styles.storageIcon}
          />
          <h2>Предоставяме</h2>
          <ul className={styles.storageDescriptionList}>
            <li>Денонощна жива охрана;</li>
            <li>24 часово видео наблюдение;</li>
            <li>Безплатен Wi-Fi интернет;</li>
            <li>Кафе машина;</li>
            <li>WC.</li>
          </ul>
        </Col>
        <Col className={styles.storageCol}>
          <FontAwesomeIcon icon={faTreeCity} className={styles.storageIcon} />
          <h2>В близост</h2>
          <ul className={styles.storageDescriptionList}>
            <li>център град Видин;</li>
            <li>бензиностанция SHELL;</li>
            <li>хранителни магазини и банки.</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ParkingComponent;
