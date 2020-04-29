import Head from 'next/head';
import PropTypes from 'prop-types';

const Page = ({ title, children }) => (
  <>
    <Head>
      <title>{`${title} | Interior Investments`}</title>
    </Head>
    {children}
  </>
);

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
