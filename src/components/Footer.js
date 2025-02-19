import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import fulllogo from "../static/textlogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const currentLanguage = i18n.language;

  const getLocalizedUrl = (path) => `/${currentLanguage}${path}`;

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
                  <a
                    href={getLocalizedUrl("/about-us")}
                    title="Научете повече за Класик 2000 ООД"
                  >
                    {t("aboutUs")}
                  </a>
                </li>
                <li>
                  <a
                    href={getLocalizedUrl("/services")}
                    title="Разгледайте нашите транспортни услуги"
                  >
                    {t("services")}
                  </a>
                </li>
                <li>
                  <a
                    href={getLocalizedUrl("/gdpr")}
                    title="Научете повече за Политиката за поверителност"
                  >
                    {t("cookies")}
                  </a>
                </li>
                <li>
                  <a
                    href={getLocalizedUrl("/signals")}
                    title="Научете повече за Подаване на сигнали по ЗЗЛПСПОИН"
                  >
                    {t("signals")}
                  </a>
                </li>
                <li>
                  <a
                    href={getLocalizedUrl("/project")}
                    title="Научете повече за Подаване на сигнали по ЗЗЛПСПОИН"
                  >
                    {t("project")}
                  </a>
                </li>
              </ul>
            </div>
          </Col>

          <Col as="address" aria-label="Contact information">
            <div className={styles.footerList}>
              <h2>{t("contacts")}</h2>
              <ul>
                <li style={{ paddingBottom: "0rem" }}>
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className={styles.footerIcon}
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+35994626060"
                    title="Позвънете на +359 94 62 60 60"
                  >
                    +359 94 62 60 60
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className={styles.footerIcon}
                    style={{ color: "var(--primary-color" }}
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+359899610075"
                    title="Позвънете на +359 899 610 075"
                  >
                    +359 899 610 075
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.footerIcon}
                    aria-hidden="true"
                  />
                  <a
                    href={getLocalizedUrl("/contacts")}
                    title="Свържете се с нас чрез страницата за контакти"
                  >
                    {t("request")}
                  </a>
                </li>
                <li style={{ paddingBottom: "0rem" }}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.footerIcon}
                    aria-hidden="true"
                  />
                  {t("address1")}
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={styles.footerIcon}
                    style={{ color: "var(--primary-color" }}
                    aria-hidden="true"
                  />
                  {t("address2")}
                </li>
              </ul>
            </div>
          </Col>

          <Col aria-label="Social media links">
            <div className={styles.footerList}>
              <h2>{t("socials")}</h2>
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
                    {t("facebook")}
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
