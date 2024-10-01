import styles from "./TransportPage.module.css";
import transportImage from "../static/our-services.png";

import TransportTitleSection from "../components/transport/TransportTitleSection";
import DomesticTransportComponent from "../components/transport/DomesticTransportComponent";
import InternationalTransportComponent from "../components/transport/InternationalTransportComponent";
import OtherTransportComponent from "../components/transport/OtherTransportComponent";

function TransportPage() {
  return (
    <div>
      <img
        src={transportImage}
        alt="transport"
        className={styles.transportImage}
      />

      <TransportTitleSection />
      <DomesticTransportComponent />
      <InternationalTransportComponent />
      <OtherTransportComponent />
    </div>
  );
}

export default TransportPage;
