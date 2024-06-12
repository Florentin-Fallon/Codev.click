import FooterComponent from './component/Footer/FooterComponent'
import React from 'react'

function Mentions() {
  return (
    <div>
        <div className='m-12 flex justify-center'>
            <h1 className="text-xl text-center font-semibold border-b-2 w-auto pb-2">Mentions légales</h1>
        </div>
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default Mentions