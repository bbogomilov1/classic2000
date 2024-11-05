import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../static/logo.png";
import styles from "./MainNavigation.module.css";

const navItems = [
  { path: "/", label: "Начало" },
  { path: "/about-us", label: "За нас" },
  { path: "/services", label: "Услуги" },
  // { path: "/autopark", label: "Автопарк" },
  { path: "/gallery", label: "Галерия" },
  { path: "/contacts", label: "Контакти" },
];

const MainNavigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
          alt="React Bootstrap logo"
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
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
