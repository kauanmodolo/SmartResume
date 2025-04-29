// src/db/migrate.ts
import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

const main = async () => {
  try {
    await migrate(db, { 
      migrationsFolder: "./drizzle/migrations" // Caminho correto
    });
    console.log("Migrations finished successfully");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
};

main();
