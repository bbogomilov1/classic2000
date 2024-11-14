import GalleryComponent from "../components/gallery/GalleryComponent";
import { Helmet } from "react-helmet";

function GalleryPage() {
  return (
    <div>
      <Helmet>
        <title>Галерия - Класик2000 - Видин, България</title>
        <meta
          name="description"
          content="Разгледайте галерията на Класик2000, включваща нашия централния офис, сервизни помещения, ТИР паркинг и складови площи в град Видин."
        />
        <meta
          name="keywords"
          content="Класик2000, галерия, сервиз Видин, ТИР паркинг, складови помещения, Видин"
        />
      </Helmet>

      <GalleryComponent />
    </div>
  );
}

export default GalleryPage;
