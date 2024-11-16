import styles from "./TransportComponent.module.css";
import transportImage from "../../static/IMG_0472.jpg";

const TransportComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Транспортни услуги</h1>
      <section className={styles.titleContainer}>
        <img
          src={transportImage}
          alt="Транспортни услуги на Класик 2000"
          className={styles.transportImage}
        />

        <article className={styles.description}>
          <h2 className={styles.subtitle}>Основни дестинации</h2>
          <p>
            Основните дестинации от/до, които превозваме товари са: Гърция,
            България, Германия, Нидерландия, Белгия, Люксембург, Франция, Дания,
            Норвегия, Швеция, Финландия, Литва, Латвия, Естония, Полша. При
            запитване имаме възможност за превози и от/за други релации на
            територията на Европейския съюз.
          </p>

          <h2 className={styles.subtitle}>Превози и типове товари</h2>
          <p>
            Извършваме превози основно на цели товари (FTL), но при възможност
            предлагаме и групажни превози (LTL).
          </p>

          <h2 className={styles.subtitle}>Специализация в превоза на дрехи</h2>
          <p>
            Специализирани сме в превоза на дрехи на закачалки в специални
            ремаркета фургони. С този тип превози стартира и нашата дейност.
          </p>

          <h2 className={styles.subtitle}>Нашият автопарк</h2>
          <p>
            За целите на дейността, Класик 2000 разполага със съвременен
            автопарк от около 50 товарни автомобила, състоящ се от влекачи с
            полуремаркета.
          </p>
        </article>
      </section>
    </div>
  );
};

export default TransportComponent;
