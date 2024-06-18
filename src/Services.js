import React from 'react'
import CardWeb from '../src/component/Cards/CardWeb.jsx'
import FooterComponent from './component/Footer/FooterComponent.jsx'
import { FloatButton } from 'antd'

function Services() {
  return (
    <div>
      <FloatButton.BackTop />
        <div className='flex justify-center pb-4 pt-14 bg-[url("./component/images/forme.png")] bg-cover bg-center bg-local overflow-hidden'>
          <div className='h-60'>
            <h1 className="text-[30px] text-center text-white font-semibold border-b-2 w-auto pb-2">Nos Services</h1>
          </div>
        </div>
        <div className='transition duration-300 transform hover:scale-105'>
          <CardWeb 
            imgSrc={require('../src/component/images/pack-amelioration.png')}
            imgAlt='Pack amélioration'
            title='Pack Amélioration'
            description="Nous vous aidons à optimiser votre site web, tant au niveau du design que des fonctionnalités, en les adaptant précisément à vos besoins."
            button='En savoir plus'
            url='/amelioration'
          />
        </div>
        <div className='transition duration-300 transform hover:scale-105'>
          <CardWeb 
            imgSrc={require('../src/component/images/pack-decouverte.png')}
            imgAlt='Pack Découverte'
            title='Pack Découverte'
            description='Nous vous aidons à créer un site vitrine de plusieurs pages attrayant et professionnel, afin de présenter et valoriser votre activité de manière efficace.'
            button='En savoir plus'
            url='/decouverte'
          />
        </div>
          <div>
              <FooterComponent />
          </div>
    </div>
  )
}

export default Services