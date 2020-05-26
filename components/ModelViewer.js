import '@google/model-viewer';

import PropTypes from 'prop-types';

const ModelViewer = ({ product }) => (
  <model-viewer
    src={`${process.env.NEXT_PUBLIC_CMS_URL}${product.model.url}`}
    ar
    alt={product.name}
    auto-rotate
    camera-controls
    ios-src={`${process.env.NEXT_PUBLIC_CMS_URL}${product.iosModel.url}`}
    style={{ height: '100%', minHeight: '200px', width: '100%' }}
  />
);

ModelViewer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ModelViewer;
