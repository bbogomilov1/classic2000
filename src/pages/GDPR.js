import styles from "./GDPR.module.css";
import { useTranslation } from "react-i18next";

const GDPRComponent = () => {
  const { t } = useTranslation("gdpr");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("title")}</h1>

      <div dangerouslySetInnerHTML={{ __html: t("text") }} />
    </div>
  );
};

export default GDPRComponent;
