import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import fulllogo from "../static/textlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer} aria-label="Footer">
      <Container>
        <Row className={styles.footerRow}>
          <Col as="nav" aria-label="Company information and navigation">
            <div className={styles.footerList}>
              <img
                src={fulllogo}
                width="150"
                height="150"
                alt="Лого на Класик 2000 ООД"
                className={styles.footerLogo}
              />
              <ul>
                <li>
                  <a href="/about-us" title="Научете повече за Класик 2000 ООД">
                    За Класик 2000 ООД
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    title="Разгледайте нашите транспортни услуги"
                  >
                    Транспортни услуги
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col as="address" aria-label="Contact information">
            <div className={styles.footerList}>
              <h2>Контакти</h2>
              <ul>
                <li>
                  <a
                    href="tel:+35994626060"
                    title="Позвънете на +359 94 62 60 60"
                  >
                    +359 94 62 60 60
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+359899610075"
                    title="Позвънете на +359 899 610 075"
                  >
                    +359 899 610 075
                  </a>
                </li>
                <li>
                  <a
                    href="/contacts"
                    title="Свържете се с нас чрез страницата за контакти"
                  >
                    Пишете ни
                  </a>
                </li>
                <li>Град Видин, България</li>
                <li>Южна промишлена зона</li>
              </ul>
            </div>
          </Col>

          <Col aria-label="Social media links">
            <div className={styles.footerList}>
              <h2>Социални мрежи</h2>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/classic2000ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Посетете нашата Facebook страница"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className={styles.footerIcon}
                    />
                    Facebook страница
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
