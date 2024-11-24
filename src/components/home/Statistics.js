import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import styles from "./Statistics.module.css";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import client from "../../contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
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

const localeMapping = {
  en: "en-US",
  bg: "bg",
};

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);
  const { t, i18n } = useTranslation("home");

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await client.getEntries({
          content_type: "statistics",
          locale: localeMapping[i18n.language],
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
  }, [i18n.language]);

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
      <h1 className={styles.title}>{t("statistics.title")}</h1>
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
