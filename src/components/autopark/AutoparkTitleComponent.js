import styles from "./AutoparkTitleComponent.module.css";

const AutoparkTitleComponent = () => {
  return (
    <div className={styles.container} id="transport">
      <h1 className={styles.title}>Автопарк</h1>
      <p className={styles.description}>
        Класик 2000 ООД разполага с модерен автомобилен парк, състоящ се от 72
        тежкотоварни композиции. Доверили сме се на марките DAF, Mercedes и
        Renault за влекачите и Kögel и Krone за полуремаркетата.
      </p>
      <p className={styles.description}>
        Поддръжаме камионите в техническа изправност за да осигурим навременна и
        безпроблемна доставка до получателя.
      </p>
    </div>
  );
};

export default AutoparkTitleComponent;
