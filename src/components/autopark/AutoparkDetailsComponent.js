import { Col, Container, Row } from "react-bootstrap";
import styles from "./AutoparkDetailsComponent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckPickup,
  faTruckMoving,
  faLocationArrow,
  faFileContract,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

const AutoparkDetailsComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Характеристики и подробности</h1>

      <Container className={styles.autoparkContainer}>
        <Row className={styles.autoparkRow}>
          <Col className={styles.autoparkCol}>
            <FontAwesomeIcon
              icon={faTruckPickup}
              className={styles.autoparkIcon}
            />
            <h2>Влекачи</h2>
            <ul className={styles.autoparkDescriptionList}>
              <li>марка DAF XF105 Space Cab / Super Space Cab;</li>
              <li>мощност 460 конски сили;</li>
              <li>еко норма Евро 6;</li>
              <li>еко норма Евро 5.</li>
            </ul>
          </Col>
          <Col className={styles.autoparkCol}>
            <FontAwesomeIcon
              icon={faTruckMoving}
              className={styles.autoparkIcon}
            />
            <h2>Полуремаркета</h2>
            <ul className={styles.autoparkDescriptionList}>
              <li>Дължина: 13,60 м;</li>
              <li>Обем: 90 м³;</li>
              <li>Вид: бордови (XL сертифицирани) и фургони тип дрехарка.</li>
            </ul>
          </Col>
        </Row>
        <Row className={styles.autoparkRow}>
          <Col className={styles.autoparkCol}>
            <FontAwesomeIcon
              icon={faLocationArrow}
              className={styles.autoparkIcon}
            />
            <h2>GPS проследяване на композициите ни</h2>
          </Col>
          <Col className={styles.autoparkCol}>
            <FontAwesomeIcon
              icon={faFileContract}
              className={styles.autoparkIcon}
            />
            <h2>ЧМР (CMR) застраховки</h2>
          </Col>
        </Row>
        <Row className={styles.autoparkRow}>
          <Col className={styles.autoparkCol}>
            <FontAwesomeIcon icon={faShield} className={styles.autoparkIcon} />
            <h2>
              Пълно оборудване на всяка една композиция за правилното превозване
              и обезопасяване на вашия товар
            </h2>
            <ul className={styles.autoparkDescriptionList}>
              <li>скари;</li>
              <li>колани;</li>
              <li>щендери;</li>
              <li>предпазни ъгли;</li>
              <li>противоплъзгащи подложки;</li>
              <li>други.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AutoparkDetailsComponent;
