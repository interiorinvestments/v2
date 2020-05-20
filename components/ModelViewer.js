import '@google/model-viewer';

import PropTypes from 'prop-types';

const ModelViewer = ({ model }) => {
  console.log(model);
  return <h1>model</h1>;
};

ModelViewer.propTypes = {
  model: PropTypes.object.isRequired,
};

export default ModelViewer;
