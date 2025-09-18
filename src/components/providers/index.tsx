import { RouterProvider } from "@tanstack/react-router";
import { ClerkClientProvider } from "@/components/providers/clerk-client";
import { ConvexClientProvider } from "@/components/providers/convex-client";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";
import { router } from "@/lib/router";

function Providers() {
  return (
    <ClerkClientProvider>
      <ConvexClientProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
          <Toaster closeButton richColors position="top-center" />
        </ThemeProvider>
      </ConvexClientProvider>
    </ClerkClientProvider>
  );
}

export { Providers };
