import { useRouter } from 'next/router';

import DashboardLayout from '../../../../layouts/DashboardLayout';
import ThemeView from '../../../../views/ThemeView';

const ThemePage = ({ products }) => (
  <DashboardLayout>{/* <ThemeView theme={slug} /> */}</DashboardLayout>
);

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/categories`);
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
  const res = await fetch(`http://localhost:1337/products`);
  const products = await res.json();

  console.log(products);
  // fetch products and sort by searching for product category;
  return {
    props: {
      products: 'tiesto',
    },
  };
}

export default ThemePage;
