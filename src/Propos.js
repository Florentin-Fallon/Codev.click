import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'
import CardWeb from './component/Cards/CardWeb'
import CardProfile from './component/Cards/CardProfile'

function propos() {
  return (
    <div>
      <FloatButton.BackTop />
        <div className='bg-[url("./component/images/forme.png")] bg-center overflow-hidden'>
            <div className='pb-4 pt-24 flex justify-center'>
              <div className='h-36'>
                <h1 className="text-[30px] text-center text-white font-semibold border-b-2 w-auto pb-2">Bienvenue à l'agence !</h1>
              </div>
            </div>
              <CardWeb
                imgSrc={require('../src/component/images/propos.jpg')}
                imgAlt='Image 1'
                title='Nous sommes,'
                description="Une agence digitale spécialisée dans la création et l'amélioration de sites web. Nous accompagnons nos clients dans la réalisation de leurs projets digitaux en leur proposant des solutions sur mesure."
                button='Nous contacter'
                url='/contact'
              />
        </div>
        <div className='flex justify-center gap-8'>
            <CardProfile 
              imgSrc={require('../src/component/images/pack-amelioration.png')}
              imgAlt='Directeur, Développeur web'
              Name='Florentin Fallon'
              Post='Directeur & Développeur web'
            />
            <CardProfile
              imgSrc={require('../src/component/images/pack-decouverte.png')}
              imgAlt='Graphiste, Designer'
              Name='Léa Baudin'
              Post='Graphiste & Designer'
            />
        </div>
        <div>
          <FooterComponent />
        </div>
    </div>
  )
}

export default propos