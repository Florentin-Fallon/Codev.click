import React from 'react';

function PageMaintenance() {
  return (
    <div className='flex items-center justify-center h-screen bg-indigo-500'>
      <div className='text-center text-white px-4'>
        <h1 className='text-4xl font-bold pb-4'>Un peu de patience, s'il vous plaît !</h1>
        <p className='text-lg pb-2'>Nous sommes actuellement en train de travailler sur notre site pour vous offrir une meilleure expérience.</p>
        <p className='text-lg pt-12 pb-2'>Si vous avez des questions urgentes, contactez-nous à :</p>
        <p className='text-lg'>
          <a href="mailto:codedev33@gmail.com" className='underline hover:text-gray-300 transition duration-300'>
            codedev33@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default PageMaintenance;
