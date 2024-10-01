import { Outlet } from "react-router-dom/dist";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
// import styles from "./RootLayout.module.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <Outlet>
        <main>{children}</main>
      </Outlet>
      <Footer />
    </>
  );
};

export default RootLayout;
