// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { readFileSync } from 'fs';

interface Service {
  name: string;
  appointment: number;
}

interface Data {
  data: Service[];
}

const data = readFileSync('./public/data.json', 'utf-8');

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({ data: JSON.parse(data) });
}
