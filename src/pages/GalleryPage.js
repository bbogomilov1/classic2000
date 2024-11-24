import GalleryComponent from "../components/gallery/GalleryComponent";
import { Helmet, HelmetProvider } from "react-helmet-async";

function GalleryPage() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>
            Галерия | Класик2000 - Транспортни Услуги и Складови Решения
          </title>
          <meta
            name="description"
            content="Разгледайте галерията на Класик2000, включваща централния офис, сервизни помещения, ТИР паркинг и складови площи във Видин, България."
          />
          <meta
            name="keywords"
            content="Класик2000, галерия, транспортни услуги, сервиз Видин, ТИР паркинг, складови помещения, логистика, Видин, България"
          />
          <meta name="robots" content="index, follow" />
          {/* <link rel="canonical" href="https://yourwebsite.com/gallery" /> */}
        </Helmet>
      </HelmetProvider>

      <GalleryComponent />
    </div>
  );
}

export default GalleryPage;
