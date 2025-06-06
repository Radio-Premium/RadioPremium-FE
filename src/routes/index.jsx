import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import ChannelPlayer from "@/pages/ChannelPlayer";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Search from "@/pages/Search";
import Settings from "@/pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "search-result", element: <Search /> },
      { path: "channel-player", element: <ChannelPlayer /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
