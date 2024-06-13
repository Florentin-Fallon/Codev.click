import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'

function Decouverte() {
  return (
    <div>
        <FloatButton.BackTop />
        <div>
            <div className='m-12 flex justify-center'>
                <h1 className="text-[30px] text-center font-semibold border-b-2 w-auto pb-2">Pack Découverte</h1>
            </div>
        </div>
        <div>
            <FooterComponent />
        </div>
    </div>
  )
}

export default Decouverte