import styles from "./ServiceComponent.module.css";

const ServiceComponent = () => {
  return (
    <div className={styles.container} id="services">
      <h1 className={styles.title}>
        Сервиз за камиони - стационарен и мобилен
      </h1>
      <div className={styles.servicesDescription}>
        <p>
          Предлагаме широк обхват от ремонтни услуги за тежкотоварни автомобили
          в собствен сервиз с нужното оборудване за:
        </p>
        <ul className={styles.servicesDescriptionList}>
          <li>диагностика;</li>
          <li>демонтаж и монтаж на тежки гуми;</li>
          <li>професионални заваръчни дейности;</li>
          <li>
            ремонти и техническа поддръжка на товарни автомобили, влекачи,
            ремаркета и полуремаркета;
          </li>
          <li>други.</li>
        </ul>
        <p>
          Към редовната сервизна услуга разполагаме и със специализиран мобилен
          сервиз за ремонти на аварирали автомобили на пътя.
        </p>
        <p>Мобилният сервиз работи без почивен ден. Свържете се сега:</p>
        <div className={styles.servicesTelNumsContainer}>
          <a href="tel:+359886770505" className={styles.servicesTelNums}>
            +359 886 77 05 05
          </a>
          <a href="tel:+35994626060" className={styles.servicesTelNums}>
            +359 94 62 60 60
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
