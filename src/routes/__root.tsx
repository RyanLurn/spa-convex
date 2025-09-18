import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AuthLoading, Authenticated, Unauthenticated } from "convex/react";
import { LoadingSpinner } from "@/components/utils/loading-spinner";

const RootLayout = () => (
  <div className="h-screen w-screen">
    <Unauthenticated>
      <SignInButton />
    </Unauthenticated>
    <Authenticated>
      <div className="fixed top-4 right-4">
        <UserButton />
      </div>
      <Outlet />
    </Authenticated>
    <AuthLoading>
      <LoadingSpinner message="Authenticating, please wait..." />
    </AuthLoading>
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
