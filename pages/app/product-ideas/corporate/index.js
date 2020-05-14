import DashboardLayout from '../../../../layouts/DashboardLayout';
import CorporateView from '../../../../views/productIdeas/CorporateView';

const CorporatePage = ({ themes }) => (
  <DashboardLayout>
    <CorporateView themes={themes} />
  </DashboardLayout>
);

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/markets/1');
  const markets = await res.json();

  return {
    props: {
      themes: markets.themes,
    },
  };
}

export default CorporatePage;
