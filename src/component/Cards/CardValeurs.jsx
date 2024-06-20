import React from 'react'
import { ClearOutlined, CommentOutlined, CheckCircleOutlined } from '@ant-design/icons'

function CardValeurs() {
  return (
    <div className='my-12 py-12'>
        <div>
            <h1 className='text-[40px] text-center text-black flex justify-center font-semibold pb-8'>Nos valeurs</h1>
        </div>
        <div className='flex justify-center gap-8'>
            <div className='bg-white w-[300px] h-[300px] rounded-xl flex justify-center items-center shadow-lg'>
                <div className='px-8 text-wrap '>
                    <div>
                        <div className='flex justify-center items-center pb-4'>
                            <CheckCircleOutlined  style={{fontSize: '25px' }}/>
                        </div>
                    </div>
                    <h1 className='text-[25px] text-black font-semibold text-center pb-8'>Qualité</h1>
                    <p className='text-[15px] text-black text-justify tracking-normal'>Nous nous engageons à fournir un travail de qualité à nos clients. Nous sommes à l'écoute de leurs besoins et nous mettons tout en oeuvre pour leur satisfaction.</p>
                </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] rounded-xl flex justify-center items-center shadow-lg'>
                <div className='px-8 text-wrap '>
                    <div>
                        <div className='flex justify-center items-center pb-4'>
                            <CommentOutlined  style={{fontSize: '25px' }}/>
                        </div>
                    </div>
                    <h1 className='text-[25px] text-black font-semibold pb-8 text-center'>Confiance</h1>
                    <p className='text-[15px] text-black text-justify tracking-wide'>La confiance est la base de toute relation. Nous nous engageons à être transparents avec nos clients et à leur fournir un service de qualité.</p>
                </div>
            </div>
            <div className='bg-white w-[300px] h-[300px] rounded-xl flex justify-center items-center shadow-lg'>
                <div className='px-8 text-wrap'>
                    <div>
                        <div className='flex justify-center items-center pb-4'>
                            <ClearOutlined  style={{fontSize: '25px' }}/>
                        </div>
                    </div>
                    <h1 className='text-[25px] text-black font-semibold pb-8 text-center'>Innovation</h1>
                    <p className='text-[15px] text-black text-justify tracking-wide'>L'innovation est au coeur de notre métier. Nous sommes constamment à la recherche de nouvelles idées et de nouvelles technologies pour améliorer nos services.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardValeurs