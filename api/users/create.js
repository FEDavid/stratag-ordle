// /api/users/create.js
import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  const sql = neon(process.env.stratag_DATABASE_URL);

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name } = req.body;

  const result = await sql`
    INSERT INTO strateg_users (user_name)
    VALUES (${name})
    RETURNING *
  `;

  res.status(201).json(result[0]);
}