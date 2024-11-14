import { Helmet } from "react-helmet";
import styles from "./ServiceComponent.module.css";
import servicesImage from "../../static/services.png";

const ServiceComponent = () => {
  return (
    <div className={styles.container} id="services">
      <Helmet>
        <title>Сервизни услуги за камиони | Класик 2000</title>
        <meta
          name="description"
          content="Класик 2000 предлага широк обхват от сервизни услуги за тежкотоварни автомобили, включително диагностика, ремонти, заваръчни дейности, и мобилен сервиз за аварирали камиони."
        />
        <meta
          name="keywords"
          content="сервизни услуги, сервиз за камиони, диагностика на камиони, ремонт на товарни автомобили, мобилен сервиз, заваръчни дейности"
        />
        <meta
          property="og:title"
          content="Сервизни услуги за камиони | Класик 2000"
        />
        <meta
          property="og:description"
          content="Класик 2000 предлага широк обхват от сервизни услуги за тежкотоварни автомобили, включително диагностика, ремонти, заваръчни дейности, и мобилен сервиз за аварирали камиони."
        />
        <meta
          property="og:image"
          content="../../static/services.png" // Add the path to an image for social sharing
        />
      </Helmet>

      <h1 className={styles.title}>Сервизни услуги</h1>

      <section className={styles.titleContainer}>
        <img
          src={servicesImage}
          alt="Сервизни услуги за камиони и товарни автомобили"
          className={styles.servicesImage}
        />

        <article className={styles.description}>
          <h2 className={styles.subtitle}>Нашите услуги</h2>
          <p>
            Предлагаме широк обхват от ремонтни услуги за тежкотоварни
            автомобили в собствен сервиз с нужното оборудване за:
          </p>
          <ul>
            <li>диагностика;</li>
            <li>
              ремонти и техническа поддръжка на товарни автомобили, влекачи,
              ремаркета и полуремаркета;
            </li>
            <li>демонтаж и монтаж на тежки гуми;</li>
            <li>професионални заваръчни дейности;</li>
            <li>други услуги.</li>
          </ul>

          <h2 className={styles.subtitle}>Мобилен сервиз</h2>
          <p>
            Към редовната сервизна услуга разполагаме и със специализиран
            мобилен сервиз за ремонти на аварирали товарни автомобили на пътя.
          </p>
          <p>
            Мобилният сервиз работи на запитване. Възможност за отзоваване в
            почивни дни и извънработно време.
          </p>
        </article>
      </section>
    </div>
  );
};

export default ServiceComponent;
