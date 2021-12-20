// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import path from 'path';
import { readFileSync } from 'fs';

interface Service {
  id: string;
  name: string;
  appointment: number;
}

interface Data {
  data: Service;
}
const prodPath = path.join(__dirname, 'data.json');
const devPath = path.join(__dirname, 'public', 'data.json');
const filePath = process.env.NODE_ENV === 'production' ? prodPath : devPath;
const data = readFileSync(filePath, 'utf-8');

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const services: Service[] = JSON.parse(data);
  const service = services.find((s) => s.id === req.query.id)!;

  return res.status(200).json({ data: service });
}
