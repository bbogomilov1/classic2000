import styles from "./AutoparkServiceComponent.module.css";

const AutoparkServiceComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Собствен стационарен и мобилен сервиз</h1>
      <p className={styles.description}>
        Разполагаме със собствена сервизна база и авто специалисти, които се
        грижат за работоспособността на нашите камиони. Разполагаме с мобилен
        TIR сервиз за извършване на ремонт на пътя на аварирали тежкотоварни
        автомобили. Така фирмата ни затваря цикъла по управлението на
        автомобилите ни.
      </p>
    </div>
  );
};

export default AutoparkServiceComponent;
