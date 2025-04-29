// src/db/migrate.ts
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";

const waitForDatabase = (ms: number) => 
  new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  try {
    await waitForDatabase(15000); // 👈 15 segundos de delay
    
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);
    
    await migrate(db, {
      migrationsFolder: "./src/drizzle",
    });
    console.log("✅ Migrations completed");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
};

main();
