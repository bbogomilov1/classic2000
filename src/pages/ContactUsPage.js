import styles from "./ContactUsPage.module.css";
import contactsImage from "../static/home.jpg";
import { Col, Container, Row } from "react-bootstrap";
import FormComponent from "../components/home/FormComponent";
import ContactsComponent from "../components/contact-us/ContactsComponent";
import MapComponent from "../components/MapComponent";
import TeamComponent from "../components/contact-us/TeamComponent";

function ContactUsPage() {
  return (
    <div className={styles.container}>
      <img
        src={contactsImage}
        alt="transport"
        className={styles.contactsImage}
      />

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

      <TeamComponent />
    </div>
  );
}

export default ContactUsPage;
