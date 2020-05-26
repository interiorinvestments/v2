import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.Product ||
  mongoose.model('Product', productSchema);
