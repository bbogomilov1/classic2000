import { Col, Row } from "react-bootstrap";
import MapComponent from "../MapComponent";
import styles from "./ParkingComponent.module.css";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faTreeCity } from "@fortawesome/free-solid-svg-icons";

const ParkingComponent = () => {
  const { t } = useTranslation("services");

  return (
    <div className={styles.container} id="parking">
      <h1 className={styles.title}>{t("parking.title")}</h1>

      <p className={styles.description}>{t("parking.titleDesc")}</p>

      <MapComponent />

      <Row className={styles.storageRow}>
        <Col className={styles.storageCol}>
          <FontAwesomeIcon
            icon={faShieldHalved}
            className={styles.storageIcon}
          />
          <h2>{t("parking.subtitle1")}</h2>
          <ul className={styles.storageDescriptionList}>
            <li>{t("parking.item1")}</li>
            <li>{t("parking.item2")}</li>
            <li>{t("parking.item3")}</li>
            <li>{t("parking.item4")}</li>
            <li>{t("parking.item5")}</li>
          </ul>
        </Col>
        <Col className={styles.storageCol}>
          <FontAwesomeIcon icon={faTreeCity} className={styles.storageIcon} />
          <h2>{t("parking.subtitle2")}</h2>
          <ul className={styles.storageDescriptionList}>
            <li>{t("parking.item6")}</li>
            <li>{t("parking.item7")}</li>
            <li>{t("parking.item8")}</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ParkingComponent;
