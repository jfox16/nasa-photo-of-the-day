
import React, { useEffect, useState } from 'react';

import ApodSkeleton from './ApodSkeleton';

import fetchApod from 'functions/fetchApod';
import formatDate from 'functions/formatDate';

import './Apod.css';

const Apod = () => {

  const [ data, setData ] = useState(null);
  // const data = {
  //   copyright: "Mike Cohea",
  //   date: "2021-02-17",
  //   explanation: "This was not a typical sun pillar.  Just after sunrise two weeks ago in Providence, Rhode Island, USA, a photographer, looking out his window, was suddenly awestruck. The astonishment was caused by a sun pillar that fanned out at the top.  Sun pillars, singular columns of light going up from the Sun, are themselves rare to see, and are known to be caused by sunlight reflecting from wobbling, hexagon-shaped ice-disks falling through Earth's atmosphere.  Separately, upper tangent arcs are known to be caused by sunlight refracting through falling hexagon-shaped ice-tubes. Finding a sun pillar connected to an upper tangent arc is extraordinary, and, initially, took some analysis to figure out what was going on. A leading theory is that this sun pillar was also created, in a complex and unusual way, by falling ice tubes.  Few might believe that such a rare phenomenon was seen again if it wasn't for the quick thinking of the photographer -- and the camera on his nearby smartphone.    News from Mars: NASA Perseverance Coverage",
  //   hdurl: "https://apod.nasa.gov/apod/image/2102/SunPillar_Cohea_3400.jpg",
  //   media_type: "image",
  //   service_version: "v1",
  //   title: "Sun Pillar with Upper Tangent Arc",
  //   url: "https://apod.nasa.gov/apod/image/2102/SunPillar_Cohea_960.jpg"
  // }

  const [ error, setError ] = useState(null);

  // Run when component loads for the first time
  useEffect(() => {
    fetchApod()
      .then(res => setData(res.data))
      .catch(err => setError(err));
  }, []);

  useEffect(() => {
    console.log('data:', data);
  }, [ data ]);

  if (!data) {
    return <ApodSkeleton />
  }

  return (
    <div className='Apod'>
      <div className='centered-content'>
        <h1>Astronomy Picture of the Day</h1>
        <div className='content-flex'>
          <div className='image-div'>
            <a href={data.hdurl} target='_blank' rel='noopener noreferrer'>
              <img className='apod-image' src={data.url} alt={data.title} />
            </a>
          </div>
          <div className='description-div'>
            <h2 className='title'>{data.title}</h2>
            <p>{`© ${data.copyright}`}</p>
            <p>{formatDate(data.date)}</p>
            <p>{data.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apod;