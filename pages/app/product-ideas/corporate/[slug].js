import PropTypes from 'prop-types';

import DashboardLayout from '../../../../layouts/DashboardLayout';
import ThemeView from '../../../../views/ThemeView';

const { NEXT_PUBLIC_CMS_URL } = process.env;

const ThemePage = ({ products, title }) => (
  <DashboardLayout>
    <ThemeView products={products} title={title} />
  </DashboardLayout>
);

export async function getStaticPaths() {
  const res = await fetch(`${NEXT_PUBLIC_CMS_URL}/categories`);
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${NEXT_PUBLIC_CMS_URL}/products`);
  const allProducts = await res.json();
  const products = allProducts.filter(
    (product) => product.categories.slug !== params.slug
  );
  const title = products[0].categories[0].name;
  return {
    props: {
      products,
      title,
    },
  };
}

ThemePage.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ThemePage;
