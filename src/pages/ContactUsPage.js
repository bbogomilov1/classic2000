import styles from "./ContactUsPage.module.css";
import contactsImage from "../static/home.jpg";
import aboutImage from "../static/about-us.png";
import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "../components/home/FormComponent";
import ContactsComponent from "../components/contact-us/ContactsComponent";
import MapComponent from "../components/MapComponent";
import { Helmet } from "react-helmet";

function ContactUsPage() {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Контакти - Класик2000 - Видин, България</title>
        <meta
          name="description"
          content="Свържете се с Класик2000, предоставящи услуги в град Видин, България - транспорт, складове и ТИР паркинг."
        />
        <meta
          name="keywords"
          content="Класик2000, контакти, Видин, транспорт, складове, ТИР паркинг"
        />
      </Helmet>

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
          <Col className={styles.contactsCol}>
            <FormComponent />
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
