import nextConnect from 'next-connect';

import {
  deleteProduct,
  findProductBySlug,
  updateProductBySlug,
} from '../../../lib/db/product';
import auth from '../../../middleware/auth';

const handler = nextConnect();

handler
  .use(auth)
  .get(async (req, res) => {
    const {
      query: { slug },
    } = req;
    try {
      const product = await findProductBySlug(slug);
      if (!product) {
        return res.status(404).end();
      }
      return res.status(200).json({ product });
    } catch (err) {
      return res.status(500).send();
    }
  })
  .put(async (req, res) => {
    const {
      query: { slug },
      body: { quantity },
    } = req;
    try {
      const product = await updateProductBySlug(slug, { quantity });
      if (!product) {
        return res.status(404).end();
      }
      return res.status(202).json(product);
    } catch (err) {
      return res.status(500).send();
    }
  })
  .delete(async (req, res) => {
    const {
      query: { slug },
    } = req;
    try {
      await deleteProduct(slug);
      return res.status(204).json({ message: 'Product removed' });
    } catch (err) {
      return res.status(500).send();
    }
  });

export default handler;
