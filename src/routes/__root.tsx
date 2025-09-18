import { Outlet, createRootRoute } from "@tanstack/react-router";

const RootLayout = () => (
  <div className="h-screen w-screen">
    <Outlet />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
