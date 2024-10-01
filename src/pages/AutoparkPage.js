import styles from "./AutoparkPage.module.css";
import autoparkImage from "../static/autopark.png";
import AutoparkTitleComponent from "../components/autopark/AutoparkTitleComponent";
import AutoparkDetailsComponent from "../components/autopark/AutoparkDetailsComponent";
import AutoparkServiceComponent from "../components/autopark/AutoparkServiceComponent";

function AutoparkPage() {
  return (
    <div>
      <img
        src={autoparkImage}
        alt="transport"
        className={styles.autoparkImage}
      />

      <AutoparkTitleComponent />
      <AutoparkDetailsComponent />
      <AutoparkServiceComponent />
    </div>
  );
}

export default AutoparkPage;
