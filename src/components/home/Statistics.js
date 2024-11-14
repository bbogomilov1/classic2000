import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import styles from "./Statistics.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import client from "../../contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  faStar,
  faTruck,
  faUsers,
  faMapLocationDot,
  faRoad,
  faEarthAmericas,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await client.getEntries({
          content_type: "statistics",
          order: "fields.sortOrder",
        });

        const stats = response.items.map((item) => ({
          icon: item.fields.icon,
          label: item.fields.label,
          num: item.fields.num,
        }));

        setStatistics(stats);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "faStar":
        return faStar;
      case "faTruck":
        return faTruck;
      case "faUsers":
        return faUsers;
      case "faMapLocationDot":
        return faMapLocationDot;
      case "faRoad":
        return faRoad;
      case "faEarthAmericas":
        return faEarthAmericas;
      case "faComments":
        return faComments;
      default:
        return null;
    }
  };

  const StatisticItem = ({ icon, label, num }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
      <Col className={styles.statisticsCol} ref={ref}>
        <FontAwesomeIcon
          icon={getIcon(icon)}
          className={styles.statisticsIcon}
          aria-label={label}
        />
        <div className={styles.statisticsLabel}>
          {label && documentToReactComponents(label)}
        </div>
        <i className={styles.statisticsNum}>
          {inView ? <CountUp end={num} duration={1.5} separator="," /> : "0"}
        </i>
      </Col>
    );
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Цифри и Факти | Класик 2000 ООД - Превоз и Логистика</title>
        <meta
          name="description"
          content="Разгледайте нашите впечатляващи статистики и факти - доказателство за дългогодишния опит и качеството на услугите ни в транспортната индустрия."
        />
      </Helmet>

      <h1 className={styles.title}>Цифри и факти</h1>
      <Container className={styles.statisticsContainer}>
        <Row className={styles.statisticsRow}>
          {statistics.map((stat, index) => (
            <StatisticItem
              key={index}
              icon={stat.icon}
              label={stat.label}
              num={stat.num}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Statistics;
