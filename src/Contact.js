import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'

function Contact() {
  return (
    <div>
      <div className='m-12 flex justify-center'>
          <h1 className="text-[30px] text-center font-semibold border-b-2 w-auto pb-2">Contact</h1>
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  )
}

export default Contact