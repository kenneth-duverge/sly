// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getServices, Data } from '../../../utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const services = await getServices();
  return res.status(200).json({ data: services });
}
