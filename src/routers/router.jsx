import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout.jsx";
import HomePage from "../pages/Homepage.jsx";
import TimelinePage from "../pages/TimelinePage.jsx";
import StatesPage from "../pages/StatesPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import FriendsPage from "../pages/FriendsPage.jsx";

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
      {
        path: "friends/:friendId",
        loader: async ({ params }) => {
          const friends = await fetch("/friends.json").then((res) =>
            res.json(),
          );
          return friends.find((f) => f.id === parseInt(params.friendId));
        },
        Component: FriendsPage,
      },
    ],
  },
]);

export default router;
