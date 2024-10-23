import { useEffect } from "react";
import OurServices from "../components/services/OurServices";
import TransportComponent from "../components/services/TransportComponent";
import ServiceComponent from "../components/services/ServiceComponent";
import StorageComponent from "../components/services/StorageComponent";
import ParkingComponent from "../components/services/ParkingComponent";
function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <OurServices />
      <TransportComponent />
      <ServiceComponent />
      <StorageComponent />
      <ParkingComponent />
    </div>
  );
}
export default ServicesPage;
