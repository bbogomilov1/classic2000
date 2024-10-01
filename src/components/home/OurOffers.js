import styles from "./OurOffers.module.css";
import { Col, Container, Row } from "react-bootstrap";
import goodsImage from "../../static/goods.png";
import servicesImage from "../../static/services.jpg";
import storagesImage from "../../static/storages.jpg";
import parkingImage from "../../static/parking.jpg";

const OurOffers = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Какво ви предлагаме</h1>
      <Container className={styles.offersContainer}>
        <Row className={styles.offersRow}>
          <Col
            className={styles.offersCol}
            onClick={() => {
              const element = document.getElementById("transport");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <h2>Транспорт на стоки</h2>
            <img src={goodsImage} alt="goods" className={styles.offersImg} />
            <ul className={styles.offersDescription}>
              <li>
                Прилагаме индивидуален подход към всеки свой клиент с цел да
                бъде осигурена максимална гъвкавост по време на работния процес
              </li>
              <li>Възможности за комплектни товари и групажни пратки</li>
            </ul>
          </Col>
          <Col
            className={styles.offersCol}
            onClick={() => {
              const element = document.getElementById("services");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <h2>Сервизна дейност</h2>
            <img
              src={servicesImage}
              alt="services"
              className={styles.offersImg}
            />
            <ul className={styles.offersDescription}>
              <li>диагностика на пътя</li>
              <li>
                ремонти и поддръжка на товарни автомобили, влекачи, ремаркета и
                полуремаркета
              </li>
              <li>демонтаж и монтаж на гуми</li>
              <li>заваръчни дейности</li>
            </ul>
          </Col>
          <Col
            className={styles.offersCol}
            onClick={() => {
              const element = document.getElementById("storage");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <h2>Складиране</h2>
            <img
              src={storagesImage}
              alt="storages"
              className={styles.offersImg}
            />
            <ul className={styles.offersDescription}>
              <li>
                Можем да предложим складова площ 1000 м² с възможност за
                разделяне на 2 х 500 квадратни метра
              </li>
              <li>Товаро - разтоварни операции с мотокар до 4 тона</li>
            </ul>
          </Col>
          <Col
            className={styles.offersCol}
            onClick={() => {
              const element = document.getElementById("parking");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <h2>ТИР Паркинг</h2>
            <img
              src={parkingImage}
              alt="parking"
              className={styles.offersImg}
            />
            <ul className={styles.offersDescription}>
              <li>Жива охрана</li>
              <li>Видео наблюдение</li>
              <li>Wi-Fi интернет</li>
              <li>Кафе машина</li>
              <li>WC</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurOffers;
