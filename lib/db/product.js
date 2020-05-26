import Product from '../../models/product';

export const getAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (err) {
    return err;
  }
};

export const createProduct = async (product) => {
  const { company, image, name, price, quantity, slug } = product;
  try {
    const newProduct = new Product({
      company,
      image: image.url,
      name,
      price,
      quantity,
      slug,
    });
    await newProduct.save();
    return;
  } catch (err) {
    return err;
  }
};

export const findProductBySlug = async (slug) => {
  try {
    const product = await Product.findOne({ slug });
    if (!product) {
      return null;
    }
    return product;
  } catch (err) {
    throw new Error(err);
  }
};

export const findProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    return err;
  }
};

export const updateProductBySlug = async (slug) => {};
