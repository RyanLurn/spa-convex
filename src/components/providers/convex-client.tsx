import { ConvexProvider, ConvexReactClient } from "convex/react";
import { viteEnv } from "@/lib/vite-env";

const convexClient = new ConvexReactClient(viteEnv.VITE_CONVEX_URL);

function ConvexClientProvider({ children }: { children: React.ReactNode }) {
  return <ConvexProvider client={convexClient}>{children}</ConvexProvider>;
}

export { ConvexClientProvider };
