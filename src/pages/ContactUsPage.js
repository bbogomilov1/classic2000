import styles from "./ContactUsPage.module.css";
import contactsImage from "../static/home.jpg";
import aboutImage from "../static/about-us.png";
import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "../components/home/FormComponent";
import ContactsComponent from "../components/contact-us/ContactsComponent";
import MapComponent from "../components/MapComponent";

function ContactUsPage() {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={contactsImage}
          alt="transport"
          className={styles.contactsImage}
        />
        <img
          src={aboutImage}
          alt="transport"
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
