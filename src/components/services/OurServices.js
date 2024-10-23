import styles from "./OurServices.module.css";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import goodsImage from "../../static/IMG_0472.jpg";
import servicesImage from "../../static/services.png";
import storagesImage from "../../static/storages.png";
import parkingImage from "../../static/parking.jpg";

const OurServices = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Какво ви предлагаме</h1>
      <Container className={styles.offersContainer}>
        <Row className={styles.offersRow}>
          <Col
            className={styles.offersCol}
            onClick={() => {
              if (!isServicesPage) {
                const element = document.getElementById("transport");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            <img src={goodsImage} alt="goods" className={styles.offersImg} />
            <h2>Транспорт</h2>
            <div className={styles.offersDescription}>
              <p>
                Основните дестинации от/до, които превозваме товари са: Гърция,
                България, Германия, Нидерландия, Белгия, Люксембург, Франция,
                Дания, Норвегия, Швеция, Финландия, Литва, Латвия, Естония,
                Полша. При запитване имаме възможност за превози и от/за други
                релации на територията на Европейския съюз:
              </p>
              <p>
                Извършваме превози основно на цели товари (FTL), но при
                възможност предлагаме и групажни превози (LTL);
              </p>
              <p>
                Специализирани сме в превоза на <b>дрехи на закачалки</b> в
                специални ремаркета фургони. С този тип превози стартира и
                нашата дейност.
              </p>
              <p>
                За целите на дейността, Класик 2000 разполага със съвременен
                автопарк от около <b>50 товарни автомобила</b>, състоящ се от
                влекачи с полуремаркета.
              </p>
            </div>
          </Col>
          <Col
            className={styles.offersCol}
            onClick={() => {
              if (!isServicesPage) {
                const element = document.getElementById("storage");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            <img
              src={storagesImage}
              alt="storages"
              className={styles.offersImg}
            />
            <h2>Складиране и ТРО</h2>
            <div className={styles.offersDescription}>
              <p>
                Можем да предложим складова площ 1000 m² с възможност за
                разделяне на 2 х 500 m² и товаро-разтоварни операции с мотокар
                до 4 тона.
              </p>
              <li>24 часова охрана;</li>
              <li>24 часово видео наблюдение на стоката.</li>
              <p>
                Извършваме и крос-док операции. Можем временно да складираме
                Ваша стока и да я претоварим за доставка на друг автомобил в
                желано от Вас време.
              </p>
            </div>
          </Col>
        </Row>

        <Row className={styles.offersRow}>
          <Col
            className={styles.offersCol}
            onClick={() => {
              if (!isServicesPage) {
                const element = document.getElementById("parking");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            <img
              src={parkingImage}
              alt="parking"
              className={styles.offersImg}
            />
            <h2>Охраняем паркинг за камиони</h2>
            <div className={styles.offersDescription}>
              <p>
                Паркингът се намира в базата ни. Локацията е удобна, защото се
                намира на влизане в град Видин. На около километър след
                отбивката за околовръстен път водещ към Дунав Мост 2.
              </p>
              <li>Денонощна жива охрана;</li>
              <li>24-часово видео наблюдение;</li>
              <li>Безплатен Wi-Fi интернет;</li>
              <li>Кафе машина;</li>
              <li>WC.</li>
            </div>
          </Col>
          <Col
            className={styles.offersCol}
            onClick={() => {
              if (!isServicesPage) {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }
            }}
          >
            <img
              src={servicesImage}
              alt="services"
              className={styles.offersImg}
            />
            <h2>Сервиз</h2>
            <div className={styles.offersDescription}>
              <p>
                Предлагаме широк обхват от ремонтни услуги за тежкотоварни
                автомобили в собствен сервиз с нужното оборудване за:
              </p>
              <li>диагностика;</li>
              <li>
                ремонти и техническа поддръжка на товарни автомобили, влекачи,
                ремаркета и полуремаркета;
              </li>
              <li>демонтаж и монтаж на тежки гуми;</li>
              <li>професионални заваръчни дейности;</li>
              <li>други.</li>
              <p>
                Към редовната сервизна услуга разполагаме и със специализиран
                мобилен сервиз за ремонти на аварирали товарни автомобили на
                пътя.
              </p>
              <p>
                Мобилният сервиз работи на запитване. Възможност за отзоваване в
                почивни дни и извънработно време.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
