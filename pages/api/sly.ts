// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { v2 as cloudinary } from 'cloudinary';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    console.log('Making a post request');
    return res.status(200).json({ name: 'John Doe' });
  }

  return res.status(201).json({ name: 'Jane Doe' });
}
