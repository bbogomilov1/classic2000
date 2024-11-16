import styles from "./OurOffers.module.css";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import goodsImage from "../../static/IMG_0472.jpg";
import servicesImage from "../../static/services.png";
import storagesImage from "../../static/storages.jpg";
import parkingImage from "../../static/parking.jpg";

const OurOffers = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Какво ви предлагаме</h1>
      <Container className={styles.offersContainer}>
        <Row className={styles.offersRow}>
          <Col className={styles.offersCol}>
            <img
              src={goodsImage}
              alt="Транспортни услуги - превоз на товари"
              className={styles.offersImg}
            />
            <h2 className={styles.offersTitle}>Транспорт</h2>
            <div className={styles.offersDescription}>
              <p>
                Основните дестинации от/до, които превозваме товари са: Гърция,
                България, Германия, Нидерландия, Белгия, Люксембург, Франция,
                Дания, Норвегия, Швеция, Финландия, Литва, Латвия, Естония,
                Полша...
              </p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за транспортните услуги"
                onClick={() => navigate("/services")}
              >
                Прочетете повече
              </button>
            </div>
          </Col>
          <Col className={styles.offersCol}>
            <img
              src={storagesImage}
              alt="Складиране и товаро-разтоварни операции"
              className={styles.offersImg}
            />
            <h2 className={styles.offersTitle}>Складиране и ТРО</h2>
            <div className={styles.offersDescription}>
              <p>
                Можем да предложим складова площ 1000 m² с възможност за
                разделяне на 2 х 500 m² и товаро-разтоварни операции с мотокар
                до 4 тона...
              </p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за услугите по складиране"
                onClick={() => navigate("/services")}
              >
                Прочетете повече
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
            <h2 className={styles.offersTitle}>Охраняем паркинг за камиони</h2>
            <div className={styles.offersDescription}>
              <p>
                Паркингът се намира в базата ни. Локацията е удобна, защото се
                намира на влизане в град Видин...
              </p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за охраняемия паркинг"
                onClick={() => navigate("/services")}
              >
                Прочетете повече
              </button>
            </div>
          </Col>
          <Col className={styles.offersCol}>
            <img
              src={servicesImage}
              alt="Сервиз за тежкотоварни автомобили"
              className={styles.offersImgLong}
            />
            <h2 className={styles.offersTitle}>Сервиз</h2>
            <div className={styles.offersDescription}>
              <p>
                Предлагаме широк обхват от ремонтни услуги за тежкотоварни
                автомобили в собствен сервиз...
              </p>
              <button
                className={styles.readMoreButton}
                aria-label="Прочетете повече за сервизните услуги"
                onClick={() => navigate("/services")}
              >
                Прочетете повече
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurOffers;
