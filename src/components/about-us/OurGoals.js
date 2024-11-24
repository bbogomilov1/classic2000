import { useState } from "react";
import styles from "./OurGoals.module.css";
import { useTranslation } from "react-i18next";

const OurGoals = ({ cardFront, cardBack }) => {
  const [isFlipped, setFlipped] = useState(false);
  const { t } = useTranslation("aboutUs");

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={styles.goalsContainer}>
      <div className={styles.container}>
        <div
          className={`${styles.flipCard} ${isFlipped ? styles.flipped : ""}`}
          role="region"
          aria-label="Goal flip card"
        >
          <div className={styles.flipCardInner}>
            <div className={styles.flipCardFront}>
              <div className={styles.cardContent}>{cardFront}</div>
              <button
                className={styles.flipButton}
                onClick={handleFlip}
                aria-expanded={isFlipped}
                aria-controls="goalCard"
              >
                {t("card")}
              </button>
            </div>
            <div className={styles.flipCardBack}>
              <div className={styles.cardContent}>{cardBack}</div>
              <button
                className={styles.flipButton}
                onClick={handleFlip}
                aria-expanded={isFlipped}
                aria-controls="goalCard"
              >
                {t("card")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
