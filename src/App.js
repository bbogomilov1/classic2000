import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom/dist";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";
import GDPRComponent from "./pages/GDPR";

const routeChildren = [
  <Route key="home" index="true" element={<HomePage />} />,
  <Route key="about-us" path="about-us" element={<AboutUsPage />} />,
  <Route key="services" path="services" element={<ServicesPage />} />,
  <Route key="gallery" path="gallery" element={<GalleryPage />} />,
  <Route key="contacts" path="contacts" element={<ContactUsPage />} />,
  <Route key="gdpr" path="gdpr" element={<GDPRComponent />} />,
];

const routeDefinitions = createRoutesFromElements(
  <Route path=":lang" element={<RootLayout />} errorElement={<ErrorPage />}>
    {routeChildren}
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
