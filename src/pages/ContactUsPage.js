import styles from "./ContactUsPage.module.css";
import contactsImage from "../static/home.webp";
import aboutImage from "../static/about-us.webp";
import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "../components/home/FormComponent";
import ContactsComponent from "../components/contact-us/ContactsComponent";
import MapComponent from "../components/MapComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";

function ContactUsPage() {
  return (
    <div className={styles.container}>
      <HelmetProvider>
        <Helmet>
          <title>Контакти | Класик2000 - Транспорт и Логистика във Видин</title>
          <meta
            name="description"
            content="Свържете се с Класик2000, предоставящи услуги в град Видин, България - транспорт, складове и ТИР паркинг."
          />
          <meta
            name="keywords"
            content="Класик2000, контакти, транспортни услуги, складове, ТИР паркинг, логистика, Видин, България"
          />
          <meta name="robots" content="index, follow" />
          {/* <link rel="canonical" href="http://localhost:3000/contacts" /> */}
        </Helmet>
      </HelmetProvider>

      <div>
        <img
          src={contactsImage}
          alt="Класик2000 транспорт услуги"
          className={styles.contactsImage}
        />
        <img
          src={aboutImage}
          alt="Класик2000 информация за нас"
          className={styles.contactsImage}
        />
      </div>

      <Container>
        <Row className={styles.contactsRow}>
          <Col className={styles.contactsCol}>
            <ContactsComponent />
          </Col>
        </Row>
      </Container>

      <div className={styles.mapContainer}>
        <MapComponent />
      </div>
    </div>
  );
}

export default ContactUsPage;
