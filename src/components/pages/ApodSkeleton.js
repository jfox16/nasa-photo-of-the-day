import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ApodSkeleton = () => {
  return (
    <div className='Apod'>
      <div className='centered-content'>
        <h1><Skeleton width={'90%'} /></h1>
        <div className='content-flex'>
          <div className='image-div'>
            <Skeleton height={'100%'} />
          </div>
          <div className='description-div'>
            <h2 className='title'><Skeleton /></h2>
            <p><Skeleton /></p>
            <p><Skeleton /></p>
            <p><Skeleton count={15} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApodSkeleton;