import styles from "./OurOffers.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import goodsImage from "../../static/IMG_0472.webp";
import servicesImage from "../../static/services.webp";
import storagesImage from "../../static/storages.webp";
import parkingImage from "../../static/parking.webp";

const OurOffers = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("home");
  const currentLanguage = i18n.language;

  const getLocalizedUrl = (path) => `/${currentLanguage}${path}`;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("ourOffers.title")}</h1>
      <Container className={styles.offersContainer}>
        <Row className={styles.offersRow}>
          <Col className={styles.offersCol}>
            <img
              src={goodsImage}
              alt="Транспортни услуги - превоз на товари"
              className={styles.offersImg}
            />
            <h2 className={styles.offersTitle}>{t("ourOffers.subtitle1")}</h2>
            <div className={styles.offersDescription}>
              <p>{t("ourOffers.desc1")}</p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за транспортните услуги"
                onClick={() => navigate(getLocalizedUrl("/services"))}
              >
                {t("ourOffers.button")}
              </button>
            </div>
          </Col>
          <Col className={styles.offersCol}>
            <img
              src={storagesImage}
              alt="Складиране и товаро-разтоварни операции"
              className={styles.offersImg}
            />
            <h2 className={styles.offersTitle}>{t("ourOffers.subtitle2")}</h2>
            <div className={styles.offersDescription}>
              <p>{t("ourOffers.desc2")}</p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за услугите по складиране"
                onClick={() => navigate(getLocalizedUrl("/services"))}
              >
                {t("ourOffers.button")}
              </button>
            </div>
          </Col>
        </Row>

        <Row className={styles.offersRow}>
          <Col className={styles.offersCol}>
            <img
              src={parkingImage}
              alt="Охраняем паркинг за камиони"
              className={styles.offersImg}
            />
            <h2 className={styles.offersTitle}>{t("ourOffers.subtitle3")}</h2>
            <div className={styles.offersDescription}>
              <p>{t("ourOffers.desc3")}</p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за охраняемия паркинг"
                onClick={() => navigate(getLocalizedUrl("/services"))}
              >
                {t("ourOffers.button")}
              </button>
            </div>
          </Col>
          <Col className={styles.offersCol}>
            <img
              src={servicesImage}
              alt="Сервиз за тежкотоварни автомобили"
              className={styles.offersImgLong}
            />
            <h2 className={styles.offersTitle}>{t("ourOffers.subtitle4")}</h2>
            <div className={styles.offersDescription}>
              <p>{t("ourOffers.desc4")}</p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за сервизните услуги"
                onClick={() => navigate(getLocalizedUrl("/services"))}
              >
                {t("ourOffers.button")}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurOffers;
