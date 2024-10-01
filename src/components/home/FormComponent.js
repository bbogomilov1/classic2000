import Form from "react-bootstrap/Form";
import styles from "./FormComponent.module.css";
import { Button, Col, Row } from "react-bootstrap";
import inquiryImg from "../../static/inquiry.png";

const FormComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Изпратете запитване</h1>
      <Form className={styles.formContainer}>
        <Row className={styles.formRow}>
          <Col sm="4">
            <img src={inquiryImg} alt="inquiry" className={styles.formImg} />
          </Col>
          <Col sm="8">
            <Row>
              <Form.Control
                className={styles.firstRowInput}
                type="text"
                placeholder="Име на фирмата"
              />
              <Form.Control
                className={styles.firstRowInput}
                type="text"
                placeholder="Лице за контакт"
              />
            </Row>
            <Row>
              <Form.Control
                className={styles.secondRowInput}
                type="email"
                placeholder="E-mail адрес"
              />
              <Form.Control
                className={styles.secondRowInput}
                type="tel"
                placeholder="Телефонен номер"
              />
            </Row>
            <Row>
              <Form.Control
                className={styles.thirdRowInput}
                type="text"
                placeholder="Тема за запитване"
              />
            </Row>
            <Row>
              <Form.Control
                className={styles.fourthRowInput}
                as="textarea"
                rows={3}
                placeholder="Описание на запитването"
              />
            </Row>

            <Row>
              <Button
                variant="primary"
                type="submit"
                className={styles.submitButton}
              >
                Изпрати
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormComponent;
