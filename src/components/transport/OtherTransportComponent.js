import styles from "./OtherTransportComponent.module.css";

const OtherTransportComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Други видове транспорт</h1>
      <p className={styles.description}>
        Въздушен, железопътен, речен и морски товарен превоз <b>не</b>{" "}
        извършваме.
      </p>
    </div>
  );
};

export default OtherTransportComponent;
