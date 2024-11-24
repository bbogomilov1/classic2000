import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!["bg", "en"].includes(lang)) {
      navigate("/bg", { replace: true });
    } else {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate]);

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
