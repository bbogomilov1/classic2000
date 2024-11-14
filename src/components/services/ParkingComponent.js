import { Helmet } from "react-helmet";
import { Col, Row } from "react-bootstrap";
import MapComponent from "../MapComponent";
import styles from "./ParkingComponent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faTreeCity } from "@fortawesome/free-solid-svg-icons";

const ParkingComponent = () => {
  return (
    <div className={styles.container} id="parking">
      <Helmet>
        <title>Охраняем ТИР паркинг във Видин | Класик 2000</title>
        <meta
          name="description"
          content="Охраняем ТИР паркинг във Видин с 24-часова жива охрана и видео наблюдение. На удобна локация близо до Дунав Мост 2 и важни обекти в града."
        />
        <meta
          name="keywords"
          content="ТИР паркинг Видин, охраняем паркинг Видин, паркинг за камиони Видин, паркинг Дунав Мост 2, паркинг с видео наблюдение, безплатен Wi-Fi"
        />
        <meta
          property="og:title"
          content="Охраняем ТИР паркинг във Видин | Класик 2000"
        />
        <meta
          property="og:description"
          content="Охраняем ТИР паркинг във Видин с 24-часова жива охрана и видео наблюдение. На удобна локация близо до Дунав Мост 2 и важни обекти в града."
        />
      </Helmet>

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
