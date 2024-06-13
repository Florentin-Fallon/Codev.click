import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'

function Realisation() {
  return (
    <div>
      <FloatButton.BackTop />
      <div className='flex justify-center pb-4 pt-14 bg-[url("./component/images/forme.png")] bg-cover bg-center bg-local overflow-hidden'>
          <div className='h-60'>
            <h1 className="text-[30px] text-center text-white font-semibold border-b-2 w-auto pb-2">Nos Réalisations</h1>
          </div>
        </div>
        <div>
            <FooterComponent />
        </div>
    </div>
  )
}

export default Realisation