import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './server/db/schema/announcements.ts',
    out:"./drizzleTest",
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.DATABASE_URL!,
    },
    verbose: true,
});