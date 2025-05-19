// import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema1 from "./schema";
import { waitListUser } from "./schema";

// // const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle(process.env.DATABASE_URL!,);


// export {db,waitListUser}

// Make sure to install the 'pg' package


import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
const db = drizzle({ client: pool,schema:{...schema1} });



export {db,waitListUser}
