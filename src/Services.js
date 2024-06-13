import React from 'react'
import CardWeb from '../src/component/Cards/CardWeb.jsx'
import FooterComponent from './component/Footer/FooterComponent.jsx'
import { FloatButton } from 'antd'

function Services() {
  return (
    <div>
      <FloatButton.BackTop />
        <div className='flex justify-center pb-4 pt-14'>
          <h1 className="text-[30px] text-center font-semibold border-b-2 w-auto pb-2">Nos Services</h1>
        </div>
        <div className='text-center'>
          <p>Découvrez nos différents packs conçus pour répondre aux besoins spécifiques de votre entreprise.</p>
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
            description='Nous vous aidons à créer un site vitrine attrayant et professionnel, afin de présenter et valoriser votre activité de manière efficace.'
            button='En savoir plus'
            url='/decouverte'
          />
        </div>
        <div className='transition duration-300 transform hover:scale-105'>
          <CardWeb 
            imgSrc={require('../src/component/images/pack-premium.png')}
            imgAlt='Pack Premium'
            title='Pack Premium'
            description="Optez pour notre Pack Premium et bénéficiez d'un site web complet de 10 pages, conçu pour répondre parfaitement à vos besoins. Nous créons un site attrayant et fonctionnel pour valoriser votre activité et maximiser votre présence en ligne."
            button='En savoir plus'
            url='/premium'
          />
        </div>
          <div>
              <FooterComponent />
          </div>
    </div>
  )
}

export default Services