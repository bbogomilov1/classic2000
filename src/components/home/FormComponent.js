import Form from "react-bootstrap/Form";
import styles from "./FormComponent.module.css";
import { useTranslation } from "react-i18next";
import { Button, Col, Row } from "react-bootstrap";
import inquiryImg from "../../static/inquiry.png";

const FormComponent = () => {
  const { t } = useTranslation("home");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("form.title")}</h1>
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
                  {t("form.companyName")}
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="text"
                  placeholder={t("form.companyName")}
                  aria-label="Име на фирмата"
                />
              </Form.Group>
              <Form.Group controlId="contactPerson">
                <Form.Label className={styles.visuallyHidden}>
                  {t("form.contactPerson")}
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="text"
                  placeholder={t("form.contactPerson")}
                  aria-label="Лице за контакт"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group controlId="emailAddress">
                <Form.Label className={styles.visuallyHidden}>
                  {t("form.email")}
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="email"
                  placeholder={t("form.email")}
                  aria-label="E-mail адрес"
                />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label className={styles.visuallyHidden}>
                  {t("form.phoneNumber")}
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="tel"
                  placeholder={t("form.phoneNumber")}
                  aria-label="Телефонен номер"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group controlId="inquirySubject">
                <Form.Label className={styles.visuallyHidden}>
                  {t("form.messageSubject")}
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  type="text"
                  placeholder={t("form.messageSubject")}
                  aria-label="Тема за запитване"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="inquiryDescription">
                <Form.Label className={styles.visuallyHidden}>
                  {t("form.messageDesc")}
                </Form.Label>
                <Form.Control
                  className={styles.rowInput}
                  as="textarea"
                  rows={3}
                  placeholder={t("form.messageDesc")}
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
                {t("form.button")}
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormComponent;
