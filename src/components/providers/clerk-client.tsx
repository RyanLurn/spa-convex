import { ClerkProvider } from "@clerk/clerk-react";
import { shadcn } from "@clerk/themes";
import { viteEnv } from "@/lib/vite-env";

function ClerkClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={viteEnv.VITE_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: shadcn
      }}
    >
      {children}
    </ClerkProvider>
  );
}

export { ClerkClientProvider };
