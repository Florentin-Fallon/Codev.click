import React from 'react'

function CardProfile({
    imgSrc,
    imgAlt,
    Name,
    Post
}) {
  return (
    <div className='w-[20%] h-auto py-8'>
        <div className='h-auto'>
            <img src={imgSrc} alt={imgAlt} className='rounded-t-xl' />
        </div>
        <div className='bg-indigo-500 text-white rounded-b-xl'>
            <div className='flex flex-col text-center'>
                <h1 className='text-2xl font-semibold pt-6'>{Name}</h1>
                <p className='text-sm pb-6'>{Post}</p>
            </div>
        </div>
    </div>
  )
}

export default CardProfile