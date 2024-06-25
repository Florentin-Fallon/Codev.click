import React from 'react';

function CardProfile({
  imgSrc,
  imgAlt,
  Name,
  Post
}) {
  return (
    <div className='max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg'>
      <div className='relative'>
        <img
          className='w-full h-auto'
          src={imgSrc}
          alt={imgAlt}
        />
        <div className='absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-4 text-center'>
          <h1 className='text-xl font-semibold'>{Name}</h1>
          <p className='text-sm'>{Post}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
