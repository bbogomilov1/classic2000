import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutUsComponent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLocationDot,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";

const AboutUsCompoent = () => {
  return (
    <div className={styles.aboutUscontainer}>
      <h1 className={styles.aboutUstitle}>За нас</h1>
      <Container className={styles.aboutUsContainer}>
        <Row className={styles.aboutUsRow}>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className={styles.aboutUsIcon}
            />
            <h2>Кога?</h2>
            <p>
              Класик 2000 е семейна фирма, започнала своята дейност през
              далечната вече 2004-а година. Започнахме без опит и само с един
              малък камион. С много труд, постоянство и коректност, печелим
              първите си редовни клиенти. 20 години по-късно Класик 2000 е едно
              утвърдено и познато име в българския транспортен бранш и
              продължава своето успешно развитие, въпреки многото трудности през
              годините.
            </p>
          </Col>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.aboutUsIcon}
            />
            <h2>Къде?</h2>
            <p>
              Седалището ни е в град Видин, България. След много инвестиции през
              2015-а успяхме да обединим цялата ни дейност на едно място,
              съчетаващо офиси, складове, паркинг и сервиз. Локацията ни е на
              входа на град Видин и предлага бърза удобна връзка с Дунав мост-2
              и международен път Е-79. Това е от ключово значение за процеса на
              работа при предлагането на бързи и ефикасни транспортни решения.
            </p>
          </Col>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassChart}
              className={styles.aboutUsIcon}
            />
            <h2>Как?</h2>
            <p>
              С много труд, отдаденост и постоянство изградихме това, което сме
              днес. Опитният ни екип е на Ваше разположение, за да намери
              най-доброто транспортно решение.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsCompoent;
