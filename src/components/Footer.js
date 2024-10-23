import { Col, Container, Row } from "react-bootstrap";
import styles from "./Footer.module.css";
import logo from "../static/logo.png";
import fond from "../static/european-regional-development-fund-opic-bul.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Container>
        <Row className={styles.footerRow}>
          <Col>
            <img
              src={logo}
              width="150"
              height="150"
              alt="React Bootstrap logo"
              className={styles.footerLogo}
            />
          </Col>

          <Col>
            <div className={styles.footerList}>
              <h2>Класик 2000 ООД</h2>
              <a href="/about-us">За Класик 2000 ООД</a>
              <a href="/services">Транспортни услуги</a>
              <a href="/autopark">Автопарк</a>
              <a href="#">Документи, застраховки</a>
              <a href="#">Социална отговорност</a>
              <a href="#">GDPR</a>
              <a href="#">Подаване на сигнали по ЗЗЛПСПОИН</a>
            </div>
          </Col>

          <Col>
            <div className={styles.footerList}>
              <h2>Контакти</h2>
              <a href="tel:+35994626060">+359 94 62 60 60</a>
              <a href="tel:+359889697700">+359 889 69 77 00</a>
              <a href="tel:+359882721616">+359 882 72 16 16</a>
              <a href="tel:+359886508717">+359 886 50 87 17</a>
              <a href="/contacts">Пишете ни</a>
              <a href="#">Град Видин, България</a>
              <a href="#">Южна промишлена зона</a>
            </div>
          </Col>

          <Col>
            <div className={styles.footerList}>
              <h2>Социални мрежи</h2>
              <a
                href="https://www.facebook.com/classic2000ltd/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.footerIcon}
                />{" "}
                страница
              </a>
              <a href="https://twitter.com/classic20004" target="_blank">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className={styles.footerIcon}
                />{" "}
                страница (Twitter)
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
