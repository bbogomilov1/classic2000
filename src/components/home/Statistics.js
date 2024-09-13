import styles from "./Statistics.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTruck,
  faUsers,
  faRoad,
  faEarthAmericas,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const statNums = [
  {
    icon: faStar,
    label: (
      <>
        години от <br /> основаване
      </>
    ),
    num: 20,
  },
  {
    icon: faTruck,
    label: (
      <>
        тежкотоварни <br /> композиции
      </>
    ),
    num: 72,
  },
  {
    icon: faUsers,
    label: (
      <>
        oтдадени <br /> служители
      </>
    ),
    num: 84,
  },
  {
    icon: faRoad,
    label: (
      <>
        километри
        <br />
        през 2024 г.
      </>
    ),
    num: "4,7 млн",
  },
  {
    icon: faEarthAmericas,
    label: (
      <>
        до държави <br /> през 2024 г.
      </>
    ),
    num: 18,
  },
  {
    icon: faComments,
    label: (
      <>
        владеем <br /> езици
      </>
    ),
    num: 3,
  },
];

const Statistics = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Цифри и факти</h1>
      <Container className={styles.statisticsContainer}>
        <Row className={styles.statisticsRow}>
          {statNums.map((statNum, index) => (
            <Col className={styles.statisticsCol} key={index}>
              <FontAwesomeIcon
                icon={statNum.icon}
                className={styles.statisticsIcon}
              />
              <p>{statNum.label}</p>
              <i className={styles.statisticsNum}>{statNum.num}</i>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;
