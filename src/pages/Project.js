import styles from "./Project.module.css";
import { useTranslation } from "react-i18next";

const ProjectComponent = () => {
  const { t } = useTranslation("covidSupport");

  return (
    <div
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: t("text") }}
      aria-label="Legal Information"
    />
  );
};

export default ProjectComponent;
