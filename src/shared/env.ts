import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_UMAMI_DATA_WEBSITE_ID: z.string().min(1),
    NEXT_PUBLIC_OPEN_TO_NEW_ROLES: z.enum(["yes", "no"]),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_UMAMI_DATA_WEBSITE_ID:
      process.env.NEXT_PUBLIC_UMAMI_DATA_WEBSITE_ID,
    NEXT_PUBLIC_OPEN_TO_NEW_ROLES: process.env.NEXT_PUBLIC_OPEN_TO_NEW_ROLES,
  },
});
