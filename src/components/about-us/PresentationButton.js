import styles from "./PresentationButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const PresentationButton = () => {
  const handleOpenPresentation = () => {
    window.open("/Classic2000-Presentation.pdf", "_blank");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Можете да се запознаете повече за нашата дейност от презентацията на
        английски език, която сме подготвили за вас:
      </h1>
      <button
        className={styles.presentationButton}
        onClick={handleOpenPresentation}
      >
        Classic2000 Presentation <FontAwesomeIcon icon={faFilePdf} />
      </button>
    </div>
  );
};

export default PresentationButton;
