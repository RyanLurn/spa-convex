import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/providers/theme";
import { Toaster } from "@/components/ui/sonner";
import { router } from "@/lib/router";

function Providers() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster closeButton richColors position="top-center" />
    </ThemeProvider>
  );
}

export { Providers };
