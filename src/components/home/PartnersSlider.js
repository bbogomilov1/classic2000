import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import styles from "./PartnersSlider.module.css";

import LWKWalterLogo from "../../static/partners/lwk-walter.png";
import DBSchenkerLogo from "../../static/partners/db-schenker.jpg";
import DHLLogo from "../../static/partners/dhl.jpg";
import ClassicConsultLogo from "../../static/partners/classic-consult.png";
import GopetLogo from "../../static/partners/gopet.jpg";
import UnitCargoLogo from "../../static/partners/unit-cargo.jpg";
import DelamodeLogo from "../../static/partners/delamode.png";
import MilitzerLogo from "../../static/partners/militzer.png";
import THTrucksLogo from "../../static/partners/th-trucks.png";
import BarsLogo from "../../static/partners/bars.jpg";

const partnersLogos = [
  {
    id: 1,
    src: LWKWalterLogo,
    alt: "LWK Walter Logo",
  },
  { id: 2, src: DBSchenkerLogo, alt: "DB Schenker Logo" },
  { id: 3, src: DHLLogo, alt: "DHL Logo" },
  { id: 4, src: ClassicConsultLogo, alt: "Classic Consult Logo" },
  { id: 5, src: GopetLogo, alt: "Gopet Romania Logo" },
  { id: 6, src: UnitCargoLogo, alt: "Unit Cargo Transport Intelligence Logo" },
  { id: 7, src: DelamodeLogo, alt: "Delamode Logo" },
  { id: 8, src: MilitzerLogo, alt: "Militzer & Munch Logo" },
  { id: 9, src: THTrucksLogo, alt: "TH Trucks Logo" },
  { id: 10, src: BarsLogo, alt: "Bars Logo" },
];

const PartnersSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {partnersLogos.map((logo) => (
          <div key={logo.id} className={styles.slide}>
            <img src={logo.src} alt={logo.alt} className={styles.logo} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersSlider;
