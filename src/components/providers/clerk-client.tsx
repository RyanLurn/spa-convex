import { ClerkProvider } from "@clerk/clerk-react";
import { viteEnv } from "@/lib/vite-env";

function ClerkClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={viteEnv.VITE_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  );
}

export { ClerkClientProvider };
