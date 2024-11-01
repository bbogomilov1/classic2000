import styles from "./TransportComponent.module.css";
import transportImage from "../../static/IMG_0472.jpg";

const TransportComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Транспортни услуги</h1>
      <div className={styles.titleContainer}>
        <img
          src={transportImage}
          alt="transport"
          className={styles.transportImage}
        />
        <div className={styles.description}>
          <p>
            Вече 20 години превозваме Вашите товари и свързваме бизнеса Ви с
            европейския пазар!
          </p>
          <p>
            Нашата основна дейност е автомобилният международен транспорт на
            стоки и товари.
          </p>
          <p>
            Вярваме, че предлаганите висококачествени услуги, индивидуалният
            подход, както и бързите гъвкави решения в комбинация с
            дългогодишният ни опит, са нещата които ни отличават от повечето
            наши конкуренти. В основата зад всичко стоят всички наши служители.
          </p>
          <p>
            Днес Класик 2000 ООД си сътрудничи успешно с водещите български и
            международни компании в транспортната логистика и спедиция.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransportComponent;

// import styles from "./TransportComponent.module.css";
// import { Col, Container, Row } from "react-bootstrap";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouse,
//   faEarthAmericas,
//   faTruckFast,
//   faCubes,
//   faCommentDots,
// } from "@fortawesome/free-solid-svg-icons";

// const TransportComponent = () => {
//   return (
//     <div className={styles.container} id="transport">
//       <h1 className={styles.title}>Транспортни услуги</h1>
//       <p className={styles.description}>
//         Прилагаме индивидуален подход към всеки свой клиент с цел да бъде
//         осигурена максимална гъвкавост по време на работния процес.
//       </p>

//       <Container className={styles.servicesContainer}>
//         <Row className={styles.servicesRow}>
//           <Col className={styles.servicesCol}>
//             <FontAwesomeIcon icon={faHouse} className={styles.servicesIcon} />
//             <h2>Вътрешен транспорт в България</h2>
//             <div className={styles.servicesDescription}>
//               <p>
//                 Няма място в България до което не можем стигнем с нашите модерни
//                 влекачи, да вземем Вашия товар и да го превозим безопасно до
//                 точка в страната посочена от Вас. Превозваме до всеки град,
//                 село, индустриална зона или друго място.
//               </p>
//               <p>
//                 Без проблеми ще превозим товара ви, ще ви дадем професионални
//                 съвети за особеностите при планиране и транспортиране на Вашите
//                 товари.
//               </p>
//             </div>
//           </Col>
//           <Col className={styles.servicesCol}>
//             <FontAwesomeIcon
//               icon={faEarthAmericas}
//               className={styles.servicesIcon}
//             />
//             <h2>Международен транспорт</h2>
//             <div className={styles.servicesDescription}>
//               <p>
//                 Основните дестинации от/до, които превозваме товари са: Гърция,
//                 България, Германия, Нидерландия, Белгия, Люксембург, Франция,
//                 Дания, Норвегия, Швеция, Финландия, Литва, Латвия, Естония,
//                 Полша, Чехия. При запитване имаме възможност за превози и от/за
//                 други релации на територията на Европейския съюз.
//               </p>
//             </div>
//           </Col>
//         </Row>
//         <Row className={styles.servicesRow}>
//           <Col className={styles.servicesCol}>
//             <FontAwesomeIcon
//               icon={faTruckFast}
//               className={styles.servicesIcon}
//             />
//             <h2>Видовете сухопътен транспорт, които предлагаме</h2>
//             <ul className={styles.servicesDescriptionList}>
//               <li>на комплектни (цели) товари (FTL);</li>
//               <li>на групажни пратки (LTL).</li>
//             </ul>
//           </Col>
//           <Col className={styles.servicesCol}>
//             <FontAwesomeIcon icon={faCubes} className={styles.servicesIcon} />
//             <h2>Специализирани товари</h2>
//             <ul className={styles.servicesDescriptionList}>
//               <li>Дрехи на закачалки;</li>
//               <li>
//                 Стока от общ характер за бордови полуремаркета и фургони (тип
//                 дрехарка);
//               </li>
//               <li>Товари с различен обем;</li>
//               <li>Хранителни стоки, но не под температурен режим.</li>
//             </ul>
//           </Col>
//         </Row>
//         <Row className={styles.servicesRow}>
//           <Col className={styles.servicesCol}>
//             <FontAwesomeIcon
//               icon={faCommentDots}
//               className={styles.servicesIcon}
//             />
//             <h2>И още...</h2>
//             <ul className={styles.servicesDescriptionList}>
//               <li>Логистични решения;</li>
//               <li>Експресни доставки с двама шофьори;</li>
//               <li>
//                 Професионални съвети за особеностите при транспортиране на
//                 Вашите товари.
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default TransportComponent;
