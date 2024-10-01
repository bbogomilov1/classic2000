import styles from "./TransportTitleSection.module.css";

const TransportTitleSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Международен и вътрешен товарен авто транспорт
      </h1>
      <p className={styles.description}>
        Основна наша дейност на фирмата ни Класик 2000 ООД е превоз на стоки по
        пътната автомобилна мрежа. Бързи и гъвкави решения за бизнеса ни правят
        конкурентоспособни, а на Вас ви спестяват пари и главоболие.
        Конкурентните ни цени на превозите ни правят предпочитан превозвач на
        пазара. Изгодните ни цени и безпроблемното доставяне на стоки в ЕС ни
        спечелва нови клиенти на българския и международния пазар.
      </p>
      <p className={styles.description}>
        В променливото време, в което живеем и работим Класик 2000 ООД си
        сътрудничи успешно с водещи компании от транспортния бранш (логистични и
        спедиторски), както от България, така и от Европа.
      </p>
    </div>
  );
};

export default TransportTitleSection;