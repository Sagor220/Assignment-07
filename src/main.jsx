import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { Toaster } from "react-hot-toast";

import router from "./routers/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-left" />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
