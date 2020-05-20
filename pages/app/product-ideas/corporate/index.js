import PropTypes from 'prop-types';

import DashboardLayout from '../../../../layouts/DashboardLayout';
import CorporateView from '../../../../views/productIdeas/CorporateView';

const CorporatePage = ({ themes }) => (
  <DashboardLayout>
    <CorporateView themes={themes} />
  </DashboardLayout>
);

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/markets/1`);
  const markets = await res.json();

  return {
    props: {
      themes: markets.themes,
    },
  };
}

CorporatePage.propTypes = {
  themes: PropTypes.array.isRequired,
};

export default CorporatePage;
