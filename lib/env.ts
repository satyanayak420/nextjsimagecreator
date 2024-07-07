import { z } from "zod";

const envSchema = z.object({
  EMAIL: z.string().email().optional(),
  MONGO_URL: z.string(),
});

const { EMAIL, MONGO_URL } = process.env;

const parsedResults = envSchema.safeParse({ EMAIL, MONGO_URL });

if (!parsedResults.success) {
  console.error(parsedResults.error);
  throw new Error("Environment don't match the schema");
}

export const environmentVariables = parsedResults.data;

type EnvVarSchemaType = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvVarSchemaType {}
  }
}
