import { FloatButton } from 'antd'
import FooterComponent from './component/Footer/FooterComponent'
import React from 'react'

function Condition() {
  return (
    <div>
      <FloatButton.BackTop />
        <div className='pb-4 pt-14 flex justify-center'>
            <h1 className="text-xl text-center font-semibold border-b-2 w-80 pb-2">Conditions générales de vente CGV</h1>
        </div>
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default Condition