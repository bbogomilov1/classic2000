import Form from "react-bootstrap/Form";
import { Helmet } from "react-helmet";
import styles from "./FormComponent.module.css";
import { Button, Col, Row } from "react-bootstrap";
import inquiryImg from "../../static/inquiry.png";

const FormComponent = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Запитване за Услуги | Класик 2000 ООД</title>
        <meta
          name="description"
          content="Свържете се с нас за допълнителна информация относно нашите транспортни, складови и сервизни услуги. Попълнете формуляра и наш представител ще се свърже с вас скоро."
        />
      </Helmet>

      <h1 className={styles.title}>Изпратете запитване</h1>
      <Form className={styles.formContainer} aria-label="Форма за запитване">
        <Row className={styles.formRow}>
          <Col sm="4">
            <img
              src={inquiryImg}
              alt="Форма за запитване към Класик 2000 ООД"
              className={styles.formImg}
            />
          </Col>
          <Col sm="8">
            <Row>
              <Form.Group controlId="companyName">
                <Form.Label className={styles.visuallyHidden}>
                  Име на фирмата
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="text"
                  placeholder="Име на фирмата"
                  aria-label="Име на фирмата"
                />
              </Form.Group>
              <Form.Group controlId="contactPerson">
                <Form.Label className={styles.visuallyHidden}>
                  Лице за контакт
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="text"
                  placeholder="Лице за контакт"
                  aria-label="Лице за контакт"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group controlId="emailAddress">
                <Form.Label className={styles.visuallyHidden}>
                  E-mail адрес
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="email"
                  placeholder="E-mail адрес"
                  aria-label="E-mail адрес"
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label className={styles.visuallyHidden}>
                  Телефонен номер
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="tel"
                  placeholder="Телефонен номер"
                  aria-label="Телефонен номер"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group controlId="inquirySubject">
                <Form.Label className={styles.visuallyHidden}>
                  Тема за запитване
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="text"
                  placeholder="Тема за запитване"
                  aria-label="Тема за запитване"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="inquiryDescription">
                <Form.Label className={styles.visuallyHidden}>
                  Описание на запитването
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  as="textarea"
                  rows={3}
                  placeholder="Описание на запитването"
                  aria-label="Описание на запитването"
                />
              </Form.Group>
            </Row>

            <Row>
              <Button
                variant="primary"
                type="submit"
                className={styles.submitButton}
                aria-label="Изпрати запитване"
              >
                Изпрати запитване
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormComponent;
