import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

const viteEnv = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_CONVEX_URL: z.url()
  },
  runtimeEnv: import.meta.env
});

export { viteEnv };
