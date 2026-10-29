import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import router from "./routes";

// Global Styles & Icon Fonts
import "./assets/themify-icon/themify-icons.css";
import "./assets/simple-line-icon/simple-line-icons.css";
import "./assets/font-awesome/css/all.css";
import "./assets/elagent/style.css";
import "./assets/animate.css";
import "./assets/main.css";
import "./assets/responsive.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>NSIF - National Science And Invention Fair</title>
        <meta name="description" content="Website resmi NSIF" />
      </Helmet>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
