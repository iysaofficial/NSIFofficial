import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Home from "./pages";
import FAQPage from "./pages/faqpage";
import ContactPage from "./pages/contactpage";
import HomeIndo from "./pages/registration/homeindo";
import IndoOffline from "./pages/registration/indo-offline";
import IndoOnline from "./pages/registration/indo-online";
import ThankyouIndo from "./pages/registration/thankyouindo";
import ListLow from "./pages/low/listlow";
import List2025 from "./pages/low/2025/list2025";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/homeindo",
    element: <HomeIndo />,
  },
  {
    path: "/indo-offline",
    element: <IndoOffline />,
  },
  {
    path: "/indo-online",
    element: <IndoOnline />,
  },
  {
    path: "/thankyouindo",
    element: <ThankyouIndo />,
  },
  {
    path: "/listlow",
    element: <ListLow />,
  },
  {
    path: "/list2025",
    element: <List2025 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      {/* ✅ default title & meta */}
      <Helmet>
        <title>NSIF - National Science And Invention Fair</title>
        <meta name="description" content="Website resmi NSIF" />
      </Helmet>

      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
