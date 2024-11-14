import { Helmet } from "react-helmet";
import styles from "./StorageComponent.module.css";

const StorageComponent = () => {
  return (
    <div className={styles.container} id="storage">
      <Helmet>
        <title>Складови и товаро-разтоварни услуги | Класик 2000</title>
        <meta
          name="description"
          content="Предлагаме складова площ 1000 m² с възможност за разделяне на 2 х 500 m² и товаро-разтоварни услуги. Извършваме крос-док операции и осигуряваме 24 часова охрана и видео наблюдение."
        />
        <meta
          name="keywords"
          content="складови услуги, товаро-разтоварни операции, склад 1000 m², крос-док операции, 24 часова охрана, видео наблюдение, склад за стока"
        />
        <meta
          property="og:title"
          content="Складови и товаро-разтоварни услуги | Класик 2000"
        />
        <meta
          property="og:description"
          content="Предлагаме складова площ 1000 m² с възможност за разделяне на 2 х 500 m² и товаро-разтоварни услуги. Извършваме крос-док операции и осигуряваме 24 часова охрана и видео наблюдение."
        />
      </Helmet>

      <h1 className={styles.title}>Склад и товарене & разтоварване</h1>

      <section className={styles.storageDescriptionContainer}>
        <p className={styles.storageDescription}>
          Можем да предложим складова площ 1000 m² с възможност за разделяне на
          2 х 500 m² и товаро-разтоварни операции с мотокар до 2,5 тона.
        </p>

        <h2>Услуги</h2>
        <ul className={styles.storageDescriptionList}>
          <li className={styles.storageDescriptionListItem}>
            24 часова охрана
          </li>
          <li className={styles.storageDescriptionListItem}>
            24 часово видео наблюдение на стоката
          </li>
        </ul>

        <h2>Крос-док операции</h2>
        <p className={styles.storageDescription}>
          Извършваме и крос-док операции. Можем временно да складираме Ваша
          стока и да я претоварим за доставка на друг автомобил в желано от Вас
          време.
        </p>
      </section>
    </div>
  );
};

export default StorageComponent;
