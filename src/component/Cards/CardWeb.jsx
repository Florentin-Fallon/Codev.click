import React from 'react'
import { Link } from 'react-router-dom'

function CardWeb({
    imgSrc,
    imgAlt,
    title,
    description,
    button
}) {
  return (
    <div>
        <div className='my-24 justify-center flex gap-24 mx-12 rounded-xl items-center shadow-xl'>
        <div>
            <img src={imgSrc} alt={imgAlt} className='w-100 h-40'/>
        </div>
        <div className='flex-col flex justify-center p-12 w-[50%]'>
            <h1 className='text-black text-[30px] font-semibold pb-2 border-b-2 w-60 justify-center'>{title}</h1>
            <p className='tracking-wide text-justify leading-loose pt-6'>{description}</p>
            <div className='flex justify-center'>
                <Link to="/propos"><button className='bg-indigo-500 hover:bg-indigo-300 text-white px-4 py-2 mt-8 rounded-md'>{button}</button></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardWeb