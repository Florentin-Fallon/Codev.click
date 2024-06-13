import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'

function Realisation() {
  return (
    <div>
      <FloatButton.BackTop />
        <div className='pb-4 pt-14 flex justify-center'>
            <h1 className="text-[30px] text-center font-semibold border-b-2 w-auto pb-2">Nos réalisation</h1>
        </div>
        <div>
            <FooterComponent />
        </div>
    </div>
  )
}

export default Realisation