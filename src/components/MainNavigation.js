import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../static/logo.png";
import styles from "./MainNavigation.module.css";

const navItems = [
  { path: "/", label: "Начало" },
  { path: "/about", label: "За нас" },
  { path: "/services", label: "Услуги" },
  { path: "/transport", label: "Транспорт" },
  { path: "/fleet", label: "Автопарк" },
  { path: "/documents", label: "Документи" },
  { path: "/gallery", label: "Снимки" },
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
              <Link to={item.path} className={styles.navLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
