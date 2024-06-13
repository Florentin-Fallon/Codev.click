import FooterComponent from './component/Footer/FooterComponent'
import React from 'react'
import { FloatButton } from 'antd'

function Confidentialites() {
  return (
    <div>
      <FloatButton.BackTop />
        <div className='m-12 flex justify-center'>
            <h1 className="text-xl text-center font-semibold border-b-2 w-auto pb-2">Politique de confidentialié RGPD</h1>
        </div>
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default Confidentialites