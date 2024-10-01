import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../static/logo.png";
import styles from "./MainNavigation.module.css";

const navItems = [
  { path: "/", label: "Начало" },
  { path: "/about-us", label: "За нас" },
  { path: "/services", label: "Услуги" },
  { path: "/transport", label: "Транспорт" },
  { path: "/autopark", label: "Автопарк" },
  // { path: "/documents", label: "Документи" },
  { path: "/gallery", label: "Галерия" },
  { path: "/contacts", label: "Контакти" },
];

const MainNavigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <ul className={styles.navbarListContainer}>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? styles.navLink + " " + styles.activeNavLink
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
