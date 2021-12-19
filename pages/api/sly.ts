// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { readFile } from 'fs/promises';

interface Service {
  name: string;
  appointment: number;
}

interface Data {
  data: Service[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await readFile('./public/data.json', 'utf-8');

  return res.status(200).json({ data: JSON.parse(data) });
}
