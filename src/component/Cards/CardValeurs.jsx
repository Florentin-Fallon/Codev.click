import React from 'react';
import { CheckCircleOutlined, CommentOutlined, ClearOutlined } from '@ant-design/icons';

function CardValeurs() {
  return (
    <div className='py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl text-center text-gray-900 font-bold mb-12'>Nos valeurs</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Valeur 1 */}
          <div className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center'>
            <div className='text-4xl text-green-500 mb-4'>
              <CheckCircleOutlined />
            </div>
            <h2 className='text-xl text-gray-900 font-semibold mb-4 text-center'>Qualité</h2>
            <p className='text-base text-gray-700 leading-relaxed text-center'>
              Nous nous engageons à fournir un travail de qualité à nos clients. Nous sommes à l'écoute de leurs besoins et nous mettons tout en œuvre pour leur satisfaction.
            </p>
          </div>

          {/* Valeur 2 */}
          <div className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center'>
            <div className='text-4xl text-blue-500 mb-4'>
              <CommentOutlined />
            </div>
            <h2 className='text-xl text-gray-900 font-semibold mb-4 text-center'>Confiance</h2>
            <p className='text-base text-gray-700 leading-relaxed text-center'>
              La confiance est la base de toute relation. Nous nous engageons à être transparents avec nos clients et à leur fournir un service de qualité.
            </p>
          </div>

          {/* Valeur 3 */}
          <div className='bg-white rounded-xl shadow-lg p-6 flex flex-col items-center'>
            <div className='text-4xl text-red-500 mb-4'>
              <ClearOutlined />
            </div>
            <h2 className='text-xl text-gray-900 font-semibold mb-4 text-center'>Innovation</h2>
            <p className='text-base text-gray-700 leading-relaxed text-center'>
              L'innovation est au cœur de notre métier. Nous sommes constamment à la recherche de nouvelles idées et de nouvelles technologies pour améliorer nos services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardValeurs;
