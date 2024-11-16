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
        <title>Транспортни и Логистични Услуги | Класик 2000</title>
        <meta
          name="description"
          content="Разгледайте широката гама от транспортни, складови и паркинг услуги на Класик 2000. Ние предлагаме надеждни логистични решения, съобразени с вашите нужди."
        />
        <meta
          name="keywords"
          content="транспортни услуги, логистика, складови услуги, паркинг услуги, транспорт, логистични решения, Класик 2000, България"
        />
        <meta name="robots" content="index, follow" />
        {/* <link rel="canonical" href="http://localhost:3000/services" /> */}
      </Helmet>

      <TransportComponent />
      <ServiceComponent />
      <StorageComponent />
      <ParkingComponent />
    </div>
  );
}
export default ServicesPage;
