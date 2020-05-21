import '@google/model-viewer';

import PropTypes from 'prop-types';

const ModelViewer = ({ model }) => (
  <model-viewer
    src={model.model}
    ar
    alt={model.name}
    auto-rotate
    camera-controls
    ios-src={model.iosModel}
    style={{ height: 'auto', width: '100%' }}
  />
);

ModelViewer.propTypes = {
  model: PropTypes.object.isRequired,
};

export default ModelViewer;
