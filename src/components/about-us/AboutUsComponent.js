import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutUsComponent.module.css";
import { useTranslation } from "react-i18next";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLocationDot,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";

const AboutUsCompoent = () => {
  const { t } = useTranslation("aboutUs");

  return (
    <div className={styles.aboutUscontainer}>
      <h1 className={styles.aboutUstitle}>{t("title")}</h1>
      <Container className={styles.aboutUsContainer}>
        <Row className={styles.aboutUsRow}>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className={styles.aboutUsIcon}
              aria-hidden="true"
            />
            <h2>{t("subtitle1")}</h2>
            <p className={styles.aboutUsDescription}>{t("desc1")}</p>
          </Col>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.aboutUsIcon}
              aria-hidden="true"
            />
            <h2>{t("subtitle2")}</h2>
            <p className={styles.aboutUsDescription}>{t("desc2")}</p>
          </Col>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassChart}
              className={styles.aboutUsIcon}
              aria-hidden="true"
            />
            <h2>{t("subtitle3")}</h2>
            <p className={styles.aboutUsDescription}>{t("desc3")}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsCompoent;
