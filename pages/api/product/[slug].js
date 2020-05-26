import nextConnect from 'next-connect';

import { findProductBySlug } from '../../../lib/db/product';
import auth from '../../../middleware/auth';

const handler = nextConnect();

handler.use(auth).get(async (req, res) => {
  const {
    query: { slug },
  } = req;
  try {
    const product = await findProductBySlug(slug);
    if (!product) {
      return res.status(404).end();
    }
    return res.status(200).json({ quantity: product.quantity });
  } catch (err) {
    return res.status(500).send();
  }
});

export default handler;
