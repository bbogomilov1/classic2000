import { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Транспортни услуги | Класик 2000</title>
        <meta
          name="description"
          content="Запознайте се с нашите транспортни, складови и паркинг услуги, предоставени от Класик 2000. Научете повече за надеждните решения, които предлагаме за вашите логистични нужди."
        />
        <meta
          name="keywords"
          content="транспортни услуги, логистика, паркинг услуги, складови услуги, транспортни решения, Класик 2000"
        />
        <meta property="og:title" content="Транспортни услуги | Класик 2000" />
        <meta
          property="og:description"
          content="Запознайте се с нашите транспортни, складови и паркинг услуги, предоставени от Класик 2000. Научете повече за надеждните решения, които предлагаме за вашите логистични нужди."
        />
      </Helmet>

      <TransportComponent />
      <ServiceComponent />
      <StorageComponent />
      <ParkingComponent />
    </div>
  );
}
export default ServicesPage;
