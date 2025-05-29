import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-dvh w-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
