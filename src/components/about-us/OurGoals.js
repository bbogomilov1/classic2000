import { useState } from "react";
import styles from "./OurGoals.module.css";

const OurGoals = ({ cardFront, cardBack }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={styles.goalsContainer}>
      <div className={styles.container}>
        <div
          className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
        >
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <div className={styles.cardContent}>{cardFront}</div>
              <button className={styles.flipButton} onClick={handleFlip}>
                обърни
              </button>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>{cardBack}</div>
              <button className={styles.flipButton} onClick={handleFlip}>
                обърни
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
