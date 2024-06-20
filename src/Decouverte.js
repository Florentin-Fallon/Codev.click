import React from 'react';
import FooterComponent from './component/Footer/FooterComponent';
import { FloatButton } from 'antd';
import { Link } from 'react-router-dom';
import SimpleCarousel from './component/Cards/SimpleCarousel';
import { Tooltip } from 'react-tooltip';

function Decouverte() {
  return (
    <div>
      <FloatButton.BackTop />
      <div>
        <div className='flex justify-center pb-24 pt-24 bg-[url("./component/images/forme.png")] bg-cover bg-center bg-local overflow-hidden'>
          <div className='h-60'>
            <h1 className="text-[35px] text-center text-white font-semibold pb-2">Construisons ensemble votre nouveau <span className='underline underline-offset-8 decoration-indigo-500 decoration-wavy decoration-2'>site web</span></h1>
          </div>
        </div>
        <div className='flex mx-8 my-8 shadow-xl rounded-xl'>
          <div className='flex items-center p-2'>
            <img src={require('../src/component/images/propos.jpg')} alt="Decouverte" className="w-full h-[400px] object-cover rounded-xl" />
          </div>
          <div className='flex flex-col justify-center mx-8 w-[90%] p-8'>
            <h1 className='font-semibold text-center text-xl pb-6'>Maximisez vos objectifs avec Codev</h1>
            <p className='pb-4 text-base text-justify font-light tracking-wide'>Chez Codev, je transforme vos idées en sites web fonctionnels, visuels et innovants.</p>
            <p className='pb-4 text-base text-justify font-light tracking-wide'>
              Passionné par le web, je crée des sites vitrine sur mesure avec du code ou des <span data-tooltip-id="cms-tooltip" data-tooltip-content="Content Management System" className="underline cursor-pointer">CMS</span>, ainsi que des sites e-commerce. Je suis à votre écoute pour répondre à vos besoins et représenter parfaitement votre entreprise.
            </p>
            <p className='pb-4 text-justify font-light tracking-wide'>Chaque projet est unique. Je m'engage à fournir une attention personnalisée pour garantir un site moderne, technique et esthétique.</p>
            <p className='pb-4 text-justify font-light tracking-wide'>Faites confiance à Codev pour porter votre site web au plus haut niveau !</p>
            <div className='flex justify-center'>
              <Link to="/contact"><button className='bg-indigo-500 p-3 rounded-xl text-white uppercase pb-2'>Contactez nous</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SimpleCarousel 
          title='Découvrez nos projets'
          imgSrc={require('../src/component/images/avatar-D.png')}
          imgAlt={'Agence Delcam'}
          imgSrc2={require('../src/component/images/avatar-N.png')}
          imgAlt2={"Club d'airsoft"}
          imgSrc3={require('../src/component/images/Logo.png')}
          imgAlt3={'Agence Codev'}
        />
      </div>
      <div>
        <FooterComponent />
      </div>
      <Tooltip id="cms-tooltip" place="top" type="bg-indigo-500" effect="solid"/>
    </div>
  );
}

export default Decouverte;
