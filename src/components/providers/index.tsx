import { RouterProvider } from "@tanstack/react-router";
import { ConvexClientProvider } from "@/components/providers/convex-client";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";
import { router } from "@/lib/router";

function Providers() {
  return (
    <ConvexClientProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster closeButton richColors position="top-center" />
      </ThemeProvider>
    </ConvexClientProvider>
  );
}

export { Providers };
