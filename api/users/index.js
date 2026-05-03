import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`SELECT * FROM strateg_users`;
  res.json(data);
}