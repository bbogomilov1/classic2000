import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom/dist";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ServicesPage from "./pages/ServicesPage";
// import AutoparkPage from "./pages/AutoparkPage";
import GalleryPage from "./pages/GalleryPage";
import ContactUsPage from "./pages/ContactUsPage";

const routeChildren = [
  <Route key="home" index="true" element={<HomePage />} />,
  <Route key="about-us" path="about-us" element={<AboutUsPage />} />,
  <Route key="services" path="services" element={<ServicesPage />} />,
  // <Route key="autopark" path="autopark" element={<AutoparkPage />} />,
  <Route key="gallery" path="gallery" element={<GalleryPage />} />,
  <Route key="contacts" path="contacts" element={<ContactUsPage />} />,
];

const routeDefinitions = createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route path="/" element={<RootLayout />} children={routeChildren} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
