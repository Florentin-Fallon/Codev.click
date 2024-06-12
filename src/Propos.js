import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'

function propos() {
  return (
    <div>
        <div>
            <div className='mb-4 mt-8 flex justify-center'>
                <h1 className="text-[30px] text-center font-semibold border-b-2 w-auto pb-2">Qui suis-je ?</h1>
            </div>
        </div>
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default propos