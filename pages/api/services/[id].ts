// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getServiceById, Service } from '../../_utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Service }>
) {
  const serviceId = parseInt(req.query.id as string);
  const service = await getServiceById(serviceId);

  return res.status(200).json({ data: service });
}
