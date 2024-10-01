import AccordionComponent from "./AccordionComponent";
import styles from "./InternationalTransportComponent.module.css";

const InternationalTransportComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Регулярен транспорт до държави в ЕС</h1>
      <AccordionComponent />
    </div>
  );
};

export default InternationalTransportComponent;
