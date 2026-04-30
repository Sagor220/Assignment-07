import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout.jsx";
import HomePage from "../pages/Homepage.jsx";
import TimelinePage from "../pages/TimelinePage.jsx";
import StatesPage from "../pages/StatesPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },

      {
        path: "/timeline",
        Component: TimelinePage,
      },
      {
        path: "/stats",
        Component: StatesPage,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default router;
