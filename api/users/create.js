import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  const sql = neon(process.env.stratag_DATABASE_URL);

  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const { name } = req.body;

    const result = await sql`
      INSERT INTO stratag_users (user_name)
      VALUES (${name})
      RETURNING *
    `;

    res.status(201).json(result[0]);

  } catch (err) {
    // Unique constraint (duplicate user_name)
    if (err.code === '23505') {
      return res.status(409).json({
        error: 'User already exists'
      });
    }

    console.error(err);
    res.status(500).json({
      error: 'Something went wrong'
    });
  }
}