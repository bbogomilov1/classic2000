import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import logo from "../static/logo.png";
import styles from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { path: "", label: "home" },
  { path: "about-us", label: "aboutUs" },
  { path: "services", label: "services" },
  { path: "gallery", label: "gallery" },
  { path: "contacts", label: "contacts" },
];

const MainNavigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { lang } = useParams();
  const { t, i18n } = useTranslation("navbar");
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLang) => {
    if (newLang !== lang) {
      const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);
      i18n.changeLanguage(newLang);
      navigate(newPath, { replace: true });
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogoClick = () => {
    if (window.innerWidth >= 992) {
      navigate("/");
    } else {
      toggleMenu();
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container className={styles.navbarContainer}>
        <img
          src={logo}
          width="80"
          height="80"
          className={`${styles.logo} ${isMenuOpen ? styles.rotated : ""}`}
          alt="Класик2000 - Начална страница"
          onClick={handleLogoClick}
        />

        <ul
          className={`${styles.navbarListContainer} ${
            isMenuOpen ? styles.showMenu : ""
          }`}
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.activeNavLink}`
                    : styles.navLink
                }
                end
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
              >
                {t(item.label)}
              </NavLink>
            </li>
          ))}
          <div className={styles.dropdown}>
            <button className={styles.dropdownBtn}>
              <FontAwesomeIcon
                icon={faGlobe}
                className={styles.langIcon}
                aria-label={faGlobe}
              />
            </button>
            <div className={styles.dropdownContent}>
              <button
                onClick={() => handleLanguageChange("bg")}
                disabled={i18n.language === "bg"}
              >
                BG
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                disabled={i18n.language === "en"}
              >
                EN
              </button>
            </div>
          </div>
        </ul>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
