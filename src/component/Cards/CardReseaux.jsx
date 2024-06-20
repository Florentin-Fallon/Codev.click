import React from 'react'
import { InstagramOutlined, TwitterOutlined, TikTokOutlined, GithubOutlined } from '@ant-design/icons'

function CardReseaux() {
  return (
    <div className='my-12 mx-12'>
        <div className=' bg-white p-8 shadow-2xl rounded-xl flex flex-col items-center'>
            <div>
                <h1 className='text-[40px] text-center text-black justify-center font-semibold pb-8'>Nos réseaux sociaux</h1>
            </div>
            <div className='flex justify-center gap-16'>
                <div>
                    <a href='https://www.instagram.com/codedev33/' target='_blank' rel='noreferrer'>
                    <InstagramOutlined style={{color: '#E1306C', fontSize: '25px' }}/>
                    </a>
                </div>
                <div>
                    <a href='https://x.com/codedev33' target='_blank' rel='noreferrer'>
                    <TwitterOutlined style={{color: '#1DA1F2', fontSize: '25px' }}/>
                    </a>
                </div>
                <div>
                    <a href='https://www.tiktok.com/@codedev33' target='_blank' rel='noreferrer'>
                    <TikTokOutlined style={{color: '#EE1D52', fontSize: '25px'  }}/>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/Florentin-Fallon' target='_blank' rel='noreferrer'>
                    <GithubOutlined style={{color: '#181717', fontSize: '25px'  }}/>
                    </a>
                </div>
        </div>
    </div>
    </div>
  )
}

export default CardReseaux