import PropTypes from 'prop-types';

import DashboardLayout from '../../../layouts/DashboardLayout';
import ProductView from '../../../views/ProductView';

const ProductPage = ({ product }) => (
  <DashboardLayout>
    <ProductView product={product} />
  </DashboardLayout>
);
export async function getServerSideProps({ params }) {
  console.log(params);
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/products`);
  const products = await res.json();
  const product = products.find((item) => item.slug === params.slug);
  return {
    props: {
      product,
    },
  };
}

ProductPage.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductPage;
