'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/diving-into-pool.png',
      alt: 'High diving',
      caption:
        'Diving from 10m board into 30+ feet deep water while learning to swim',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          High Diving Adventure
        </h2>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Crazy;
