import nextConnect from 'next-connect';

import { createProduct } from '../../../lib/db/product';
import auth from '../../../middleware/auth';

const handler = nextConnect();

handler.use(auth).post(async (req, res) => {
  const { product } = req.body;
  if (!product) {
    return res.status(400).send('Missing product');
  }
  try {
    const createdProduct = await createProduct(product);
    return res.status(201).send({ createdProduct });
  } catch (err) {
    return err;
  }
});

export default handler;
