import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'
import CardWeb from './component/Cards/CardWeb'
import CardProfile from './component/Cards/CardProfile'
import CardReseaux from './component/Cards/CardReseaux'
import CardValeurs from './component/Cards/CardValeurs'

function propos() {
  return (
    <div>
      <FloatButton.BackTop />
        <div className='bg-[url("./component/images/forme.png")] bg-center overflow-hidden'>
            <div className='pb-4 pt-24 flex justify-center'>
              <div className='h-36'>
                <h1 className="text-[50px] text-center text-white font-semibold border-b-2 w-auto pb-2">Bienvenue à l'agence !</h1>
              </div>
            </div>
              <CardWeb
                imgSrc={require('../src/component/images/codev.png')}
                imgAlt='Image 1'
                title='CODEV : votre agence digitale'
                description="Nous sommes une agence spécialisée dans la création et l'amélioration de sites web. Nous accompagnons nos clients dans la réalisation de leurs projets digitaux en proposant des solutions sur mesure."
                button='Contactez-nous dès maintenant !'
                url='/contact'
              />
        </div>
        <div className='relative'>
          <div className='absolute inset-0 bg-[url("./component/images/valeurs.png")] bg-cover bg-center filter blur-sm'></div>
            <div className='relative flex justify-center items-center h-screen'>
              <CardValeurs />
            </div>
          </div>
        <div>
          <h1 className='text-[40px] text-center text-black flex justify-center font-semibold my-8'>Nos membres</h1>
            <div className='flex justify-center gap-8'>
              <CardProfile 
                imgSrc={require('../src/component/images/fallonflorentin.png')}
                imgAlt='Directeur, Développeur web'
                Name='Florentin Fallon'
                Post='Directeur & Développeur web'
              />
            </div>
        <div>
            <CardReseaux />
          </div>
        </div>
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default propos