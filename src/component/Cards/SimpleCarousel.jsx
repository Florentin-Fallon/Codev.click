import React from 'react'

function SimpleCarousel({
  title,
  imgSrc,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
  imgAlt,
  imgAlt2,
  imgAlt3,
  imgAlt4,
  imgAlt5,
}) {
  const cards = [
    { imgSrc, imgAlt, name: "Agence Delcam" },
    { imgSrc: imgSrc2, imgAlt: imgAlt2, name: "Neversoft" },
    { imgSrc: imgSrc3, imgAlt: imgAlt3, name: "Agence Codev" },
    { imgSrc: imgSrc4, imgAlt: imgAlt4, name: "Company 4" },
    { imgSrc: imgSrc5, imgAlt: imgAlt5, name: "Company 5" },
  ];

  return (
    <div className='my-24 p-8'>
      <h1 className='text-black text-center text-3xl mt-16 mb-24'>{title}</h1>
      <div className='flex flex-wrap justify-center'>
        {cards.map((card, index) => (
          card.imgSrc && card.imgAlt && (
            <div key={index} className='relative w-64 h-64 ml-4 mb-4 rounded-xl shadow-xl transition duration-300 transform hover:scale-110'>
              <img src={card.imgSrc} alt={card.imgAlt} className='w-full h-full object-cover rounded-xl'/>
              <p className='absolute bottom-2 left-2 text-white bg-indigo-300 text-sm rounded px-2 py-1'>{card.name}</p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default SimpleCarousel
