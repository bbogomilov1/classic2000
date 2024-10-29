import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import styles from "./Statistics.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTruck,
  faUsers,
  faMapLocationDot,
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
        товарни <br /> автомобили
      </>
    ),
    num: 50,
  },
  {
    icon: faUsers,
    label: (
      <>
        брой <br /> служители
      </>
    ),
    num: 84,
  },
  {
    icon: faMapLocationDot,
    label: (
      <>
        курсове
        <br /> през 2024 г.
      </>
    ),
    num: 1100,
  },
  {
    icon: faRoad,
    label: (
      <>
        километри
        <br /> през 2024 г.
      </>
    ),
    num: 5300000,
  },
  {
    icon: faEarthAmericas,
    label: (
      <>
        до държави <br /> през 2024 г.
      </>
    ),
    num: 19,
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

const StatisticItem = ({ icon, label, num }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Col className={styles.statisticsCol} ref={ref}>
      <FontAwesomeIcon icon={icon} className={styles.statisticsIcon} />
      <p>{label}</p>
      <i className={styles.statisticsNum}>
        {inView ? <CountUp end={num} duration={1.5} separator="," /> : "0"}
      </i>
    </Col>
  );
};

const Statistics = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Цифри и факти</h1>
      <Container className={styles.statisticsContainer}>
        <Row className={styles.statisticsRow}>
          {statNums.map((statNum, index) => (
            <StatisticItem
              key={index}
              icon={statNum.icon}
              label={statNum.label}
              num={statNum.num}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;
