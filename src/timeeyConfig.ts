import { z } from "zod";

function getTimeeyConfig(): Config {
  return configSchema.parse({
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  });
}

const configSchema = z
  .object({
    serverUrl: z.string().url(),
  })
  .strict(); // don't allow additional properties

type Config = z.infer<typeof configSchema>;

export default getTimeeyConfig;
