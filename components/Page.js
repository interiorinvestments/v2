import Head from 'next/head';
import PropTypes from 'prop-types';

const Page = ({ title, children, ...rest }) => (
  <div {...rest}>
    <Head>
      <title>{`${title} | Interior Investments`}</title>
    </Head>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
