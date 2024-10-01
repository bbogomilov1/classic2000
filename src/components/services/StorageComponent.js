import styles from "./StorageComponent.module.css";

const StorageComponent = () => {
  return (
    <div className={styles.container} id="storage">
      <h1 className={styles.title}>Склад и товарене & разтоварване</h1>
      <p className={styles.storageDescription}>
        Товаренето и разтоварването са важни и отговорни операции, а ние имаме
        нужния опит.
      </p>
      <p className={styles.storageDescription}>
        Можем да предложим складова площ 1000 m² с възможност за разделяне на 2
        х 500 m² и товаро-разтоварни операции с мотокар до 4 тона.
      </p>
      <ul className={styles.storageDescriptionList}>
        <li className={styles.storageDescriptionListItem}>24 часова охрана</li>
        <li className={styles.storageDescriptionListItem}>
          24 часово видео наблюдение на стоката
        </li>
      </ul>
      <p className={styles.storageDescription}>
        Извършваме транспортиране и складиране на стоки в наш склад. Когато Ви
        потрябват ще Ви ги доставим от нашата складова площ до Вашия обект.
      </p>
      <p className={styles.storageDescription}>Не складираме опасни товари.</p>
    </div>
  );
};

export default StorageComponent;