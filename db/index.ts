import { drizzle } from 'drizzle-orm/node-postgres';
import { waitListUser } from "./schema";

// const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(process.env.DATABASE_URL!);


export {db,waitListUser}


