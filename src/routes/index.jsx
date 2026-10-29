import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  FAQPage,
  ContactPage,
  HomeIndo,
  IndoOffline,
  IndoOnline,
  ThankYouIndo,
  ListLow,
  List2025,
  List2026,
  NewsPage,
} from "../pages";

export const router = createBrowserRouter([
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
    element: <ThankYouIndo />,
  },
  {
    path: "/listlow",
    element: <ListLow />,
  },
  {
    path: "/list2025",
    element: <List2025 />,
  },
  {
    path: "/list2026",
    element: <List2026 />,
  },
  {
    path: "/newspage",
    element: <NewsPage />,
  },
]);

export default router;
