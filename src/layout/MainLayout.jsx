import { Outlet } from "react-router-dom";

import Header from "@/components/header";

const MainLayout = () => {
  return (
    <div className="flex justify-center bg-purple-50">
      <div className="relative min-h-screen w-full max-w-[480px] bg-white shadow-lg">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
