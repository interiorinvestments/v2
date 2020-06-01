import nextConnect from 'next-connect';

import { deleteAllProducts, getAllProducts } from '../../lib/db/product';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler
  .use(auth)
  .get(async (req, res) => {
    res.status(200).json({ products: await getAllProducts() });
  })
  .delete(async (req, res) => {
    try {
      await deleteAllProducts();
      res.status(204).json({ message: 'removed' });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  });

export default handler;
