import { Col, Container, Row } from "react-bootstrap";
import styles from "./TeamComponent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faViber, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import bul from "../../static/languages/bul.png";
import eng from "../../static/languages/eng.png";
import ger from "../../static/languages/ger.png";

import sashoQR from "../../static/qr/qr-bg-sasho-stoikov.png";
import marinelaQR from "../../static/qr/qr-bg-marinela-stoikova.png";
import pavelQR from "../../static/qr/qr-bg-pavel-stoikov.png";
import zornitsaQR from "../../static/qr/qr-bg-zornitsa-krumova.png";
import kostadinQR from "../../static/qr/qr-bg-kostadin-krastev.png";
import lidiaQR from "../../static/qr/qr-bg-lidia-ilieva.png";
import ivanQR from "../../static/qr/qr-bg-ivan-ivanov.png";

const team = {
  sasho: {
    image: sashoQR,
    name: "Сашо Стойков",
    position: "Управител",
    contact: {
      phone: "+35994626060",
    },
    lang: {
      bul: bul,
    },
  },
  marinela: {
    image: marinelaQR,
    name: "Маринела Стойкова",
    position: "Финанси и счетоводство",
    contact: {
      phone: "+35994606215",
    },
    lang: {
      bul: bul,
    },
  },
  pavel: {
    image: pavelQR,
    name: "Павел Стойков",
    position: "Транспортен отдел",
    contact: {
      phone: "+359885702252",
      viber: "+359885702252",
      whatsapp: "+359885702252",
    },
    lang: {
      bul: bul,
      eng: eng,
    },
  },
  zornitsa: {
    image: zornitsaQR,
    name: "Зорница Крумова",
    position: "Транспортен отдел",
    contact: {
      phone: "+359883338181",
      viber: "+359883338181",
      whatsapp: "+359883338181",
    },
    lang: {
      bul: bul,
      eng: eng,
    },
  },
  kostadin: {
    image: kostadinQR,
    name: "Костадин Кръстев",
    position: "Транспортен отдел",
    contact: {
      phone: "+359887484000",
      viber: "+359887484000",
      whatsapp: "+359887484000",
    },
    lang: {
      bul: bul,
      eng: eng,
    },
  },
  lidia: {
    image: lidiaQR,
    name: "Лидия Илиева-Кошева",
    position: "Транспортен отдел",
    contact: {
      phone: "+359886508717",
      viber: "+359886508717",
      whatsapp: "+359886508717",
    },
    lang: {
      bul: bul,
      eng: eng,
      ger: ger,
    },
  },
  ivan: {
    image: ivanQR,
    name: "Иван Иванов",
    position: "Транспортен отдел",
    contact: {
      phone: "+359889697700",
      viber: "+359889697700",
      whatsapp: "+359889697700",
    },
    lang: {
      bul: bul,
    },
  },
};

const TeamComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Нашият екип</h1>
      <Container className={styles.teamContainer}>
        <Row className={styles.teamRow}>
          {Object.entries(team)
            .slice(0, 4)
            .map(([key, value]) => (
              <Col className={styles.teamCol}>
                <img
                  src={value.image}
                  alt="qr code"
                  className={styles.teamImg}
                />
                <h2>{value.name}</h2>
                <div>
                  {value.lang && value.lang.bul && (
                    <img
                      src={value.lang.bul}
                      alt="bul"
                      className={styles.langIcon}
                    />
                  )}
                  {value.lang && value.lang.eng && (
                    <img
                      src={value.lang.eng}
                      alt="eng"
                      className={styles.langIcon}
                    />
                  )}
                  {value.lang && value.lang.ger && (
                    <img
                      src={value.lang.ger}
                      alt="ger"
                      className={styles.langIcon}
                    />
                  )}
                </div>
                <p>{value.position}</p>
                <div>
                  <a href={`tel:${value.contact.phone}`} target="_blank">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={styles.teamIcon}
                    />
                  </a>

                  {value.contact.viber && (
                    <a
                      href={`viber://chat?number=%2B${value.contact.viber}`}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faViber}
                        className={styles.teamIcon + " " + styles.viberIcon}
                      />
                    </a>
                  )}

                  {value.contact.whatsapp && (
                    <a
                      href={`https://wa.me/${value.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className={styles.teamIcon + " " + styles.whatsappIcon}
                      />
                    </a>
                  )}
                </div>
              </Col>
            ))}
        </Row>
        <Row className={styles.teamRow}>
          {Object.entries(team)
            .slice(4, 7)
            .map(([key, value]) => (
              <Col className={styles.teamCol}>
                <img
                  src={value.image}
                  alt="qr code"
                  className={styles.teamImg}
                />
                <h2>{value.name}</h2>
                <div>
                  {value.lang && value.lang.bul && (
                    <img
                      src={value.lang.bul}
                      alt="bul"
                      className={styles.langIcon}
                    />
                  )}
                  {value.lang && value.lang.eng && (
                    <img
                      src={value.lang.eng}
                      alt="eng"
                      className={styles.langIcon}
                    />
                  )}
                  {value.lang && value.lang.ger && (
                    <img
                      src={value.lang.ger}
                      alt="ger"
                      className={styles.langIcon}
                    />
                  )}
                </div>
                <p>{value.position}</p>
                <div>
                  <a href={`tel:${value.contact.phone}`} target="_blank">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={styles.teamIcon}
                    />
                  </a>

                  {value.contact.viber && (
                    <a
                      href={`viber://chat?number=%2B${value.contact.viber}`}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faViber}
                        className={styles.teamIcon + " " + styles.viberIcon}
                      />
                    </a>
                  )}

                  {value.contact.whatsapp && (
                    <a
                      href={`https://wa.me/${value.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className={styles.teamIcon + " " + styles.whatsappIcon}
                      />
                    </a>
                  )}
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default TeamComponent;
