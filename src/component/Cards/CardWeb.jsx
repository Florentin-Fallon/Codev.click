import React from 'react'
import { Link } from 'react-router-dom'

function CardWeb({
    imgSrc,
    imgAlt,
    title,
    description,
    button,
    url
}) {
  return (
    <div>
        <div className='my-24 justify-center flex gap-24 mx-12 rounded-xl items-center shadow-xl bg-white'>
        <div className='items-center bg-cover'>
            <img src={imgSrc} alt={imgAlt} className='w-72 p-2 rounded-3xl'/>
        </div>
        <div className='flex-col flex justify-center p-12 w-[50%]'>
            <h1 className='text-black text-[30px] font-semibold pb-2 border-b-2 w-64 justify-center'>{title}</h1>
            <p className='tracking-wide text-justify leading-loose pt-6'>{description}</p>
            <div className='flex justify-center'>
                <Link to={url}><button className='bg-indigo-500 hover:bg-indigo-300 text-white px-4 py-2 mt-8 rounded-md'>{button}</button></Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardWeb