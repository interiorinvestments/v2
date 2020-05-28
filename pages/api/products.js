import nextConnect from 'next-connect';

import { getAllProducts } from '../../lib/db/product';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler.use(auth).get(async (req, res) => {
  res.status(200).json({ products: await getAllProducts() });
});

export default handler;
