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
              Фирмата започва своята дейност през 2004 с два соло камиона.
              Постепенно Класик 2000 ООД печели първите си постоянни клиенти с
              коректност, точност и стабилно управление. През годините фирмата
              продължава да се развива и да увеличава своята партньорска мрежа,
              въпреки скорошната икономическа криза. Това доказва, че са усвоени
              една правилна управленска политика и гъвкав работен процес.
              Дългогодишният ни опит ни позволява да реагираме своевременно
              според различните предизвикателства на пазара.
            </p>
          </Col>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faLocationDot}
              className={styles.aboutUsIcon}
            />
            <h2>Къде?</h2>
            <p>
              Класик 2000 ООД е фирма с основна дейност международен транспорт
              на стоки, базирана в град Видин, България. Разполагаме със
              собствена база, включваща офис администрация, складова площ, ТИР
              паркинг и сервизни халета. Базата ни е основния логистичен център.
              Локацията предлага бърза и удобна връзка с Дунав мост-2 и
              международен път Е-79. Вярваме, че предлаганите висококачествени
              услуги, както и бързите и гъвкави решения, са това, което ни
              отличава от повечето наши конкуренти. Главна роля в това заемат
              всички наши работници - от администрацията до водачите, монтьорите
              и общия персонал.
            </p>
          </Col>
          <Col className={styles.aboutUsCol}>
            <FontAwesomeIcon
              icon={faMagnifyingGlassChart}
              className={styles.aboutUsIcon}
            />
            <h2>Как?</h2>
            <p>
              Класик 2000 ООД разполага с модерен автомобилен парк, състоящ се
              от 72 тежкотоварни композиции. Редовната им поддръжка е гаранция
              за качествени и навременни доставки. Всички превозните средства са
              с еко норма Евро-5 и Евро-6 и са застраховани според
              международната ЧМР (CMR) конвенция. Вижте актуалните ЧМР полици.
              Камионите ни са оборудвани със сателитна проследяваща система
              (GPS), която осигурява пълен контрол и проследимост на Вашите
              товари по всяко време. Днес Класик2000 ООД си сътрудничи успешно с
              водещи компании в транспортната логистика и спедиторски фирми,
              както местни, така и европейски.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsCompoent;
