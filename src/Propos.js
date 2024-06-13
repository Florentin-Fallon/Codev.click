import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'

function propos() {
  return (
    <div>
      <FloatButton.BackTop />
        <div>
            <div className='pb-4 pt-14 flex justify-center bg-[url("./component/images/forme.png")] bg-cover bg-center bg-local overflow-hidden'>
              <div className="h-80">
                <h1 className="text-[30px] text-center text-white font-semibold border-b-2 w-auto pb-2">Bienvenue à l'agence !</h1>
              </div>
            </div>
        </div>
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default propos