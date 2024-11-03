import styles from "./StorageComponent.module.css";

const StorageComponent = () => {
  return (
    <div className={styles.container} id="storage">
      <h1 className={styles.title}>Склад и товарене & разтоварване</h1>
      <p className={styles.storageDescription}>
        Можем да предложим складова площ 1000 m² с възможност за разделяне на 2
        х 500 m² и товаро-разтоварни операции с мотокар до 2,5 тона.
      </p>
      <ul className={styles.storageDescriptionList}>
        <li className={styles.storageDescriptionListItem}>24 часова охрана</li>
        <li className={styles.storageDescriptionListItem}>
          24 часово видео наблюдение на стоката
        </li>
      </ul>
      <p className={styles.storageDescription}>
        Извършваме и крос-док операции. Можем временно да складираме Ваша стока
        и да я претоварим за доставка на друг автомобил в желано от Вас време.
      </p>
    </div>
  );
};

export default StorageComponent;
