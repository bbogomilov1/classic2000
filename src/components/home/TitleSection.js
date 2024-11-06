import styles from "./TitleSection.module.css";

const TitleSection = () => {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Кои сме ние?</h1>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Вече 20 години превозваме Вашите товари и свързваме бизнеса Ви с
          европейския пазар!
        </p>
        <p className={styles.description}>
          Нашата основна дейност е автомобилният международен транспорт на стоки
          и товари.
        </p>
        <p className={styles.description}>
          Вярваме, че предлаганите висококачествени услуги, индивидуалният
          подход, както и бързите гъвкави решения в комбинация с дългогодишният
          ни опит, са нещата които ни отличават от повечето наши конкуренти. В
          основата зад всичко стоят всички наши служители.
        </p>
        <p className={styles.description}>
          Днес Класик 2000 ООД си сътрудничи успешно с водещите български и
          международни компании в транспортната логистика и спедиция.
        </p>
      </div>
    </div>
  );
};

export default TitleSection;
