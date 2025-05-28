import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Settings from "@/pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
