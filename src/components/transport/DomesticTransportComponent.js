import styles from "./DomesticTransportComponent.module.css";
import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faShieldHalved,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const DomesticTransportComponent = () => {
  return (
    <div className={styles.container} id="transport">
      <h1 className={styles.title}>Вътрешен транспорт в България.</h1>
      <p className={styles.description}>
        → Класик 2000 ООД извършва, както международен товарен транспорт, така и
        вътрешен превоз в България.
      </p>
      <p className={styles.description}>
        → Няма място в България до което не можем стигнем с нашите модерни
        влекачи, да вземем Вашия товар и да го превозим безопасно до точка в
        страната посочена от Вас. Превозваме до всеки град, село, индустриална
        зона или друго място.
      </p>
      <p className={styles.description}>
        → Без проблеми ще превозим товара ви, ще ви дадем професионални съвети
        за особеностите при планиране и транспортиране на Вашите товари.
      </p>
      <p className={styles.description}>
        → Товарите, които ни поверите да транспортираме ще потеглят в точно
        уговорения час, за да пристигнат до получателя си навреме. Компанията ни
        извършва транспорт на товари в България и чужбина, като спазва всички
        изисквания на ЕС за извършване на транспортна дейност.
      </p>

      <Container className={styles.transportContainer}>
        <Row className={styles.transportRow}>
          <Col className={styles.transportCol}>
            <FontAwesomeIcon
              icon={faTruckFast}
              className={styles.transportIcon}
            />
            <h2>Превозваме товари:</h2>
            <ul className={styles.transportDescriptionList}>
              <li>Цели (комплектни) товари;</li>
              <li>Споделени товари.</li>
            </ul>
          </Col>
          <Col className={styles.transportCol}>
            <FontAwesomeIcon
              icon={faShieldHalved}
              className={styles.transportIcon}
            />
            <h2>Знаем, че за Вас е важна сигурността:</h2>
            <ul className={styles.transportDescriptionList}>
              <li>GPS проследяване на камионите с Вашия пратки;</li>
              <li>
                Оборудвани сме за правилното превозване и обезопасяване на вашия
                товар (щендери, скари, колани, предпазни ъгли, противоплъзгащи
                подложки, други).
              </li>
            </ul>
          </Col>
          <Col className={styles.transportCol}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.transportIcon}
            />
            <h2>Често извършваме превози до:</h2>
            <ul className={styles.transportDescriptionList}>
              <li>София;</li>
              <li>Пловдив;</li>
              <li>Варна;</li>
              <li>Бургас;</li>
              <li>Русе;</li>
              <li>Плевен;</li>
              <li>други точки на страната.</li>
            </ul>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
};

export default DomesticTransportComponent;
