import React from 'react';

import Loader from '../../components/Loader';

const LoaderErp = () => {
  return (
    <div
      className="card"
      style={{ height: '79vh', display: 'grid', placeContent: 'center' }}
    >
      <Loader />
    </div>
  );
};

export default LoaderErp;
