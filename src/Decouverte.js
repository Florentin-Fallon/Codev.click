import React from 'react';
import FooterComponent from './component/Footer/FooterComponent';
import { FloatButton } from 'antd';
import { Link } from 'react-router-dom';
import SimpleCarousel from './component/Cards/SimpleCarousel';
import { Tooltip } from 'react-tooltip';
import ServiceCard from './component/Cards/ServiceCard';
import { RiseOutlined } from '@ant-design/icons';

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
              <Link to="/contact"><button className='bg-indigo-500 hover:bg-indigo-300 p-3 rounded-xl text-white uppercase'>Contactez nous</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-indigo-500 p-8 my-12'>
        <div className="text-center my-8">
          <RiseOutlined  style={{fontSize: '45px', color: 'white', marginBottom:'30px'}}/>
          <h2 className="text-4xl text-white font-semibold">Nos Services</h2>
          <p className="text-white">Découvrez ce que nous pouvons faire pour vous</p>
        </div>
        <div className='flex justify-center flex-wrap my-8'>
          <ServiceCard 
            title="Conception personnalisée" 
            description="Nous créons des designs uniques adaptés à votre marque et à vos besoins spécifiques." 
          />
          <ServiceCard 
            title="Fonctionnalités avancées" 
            description="Intégration de fonctionnalités avancées pour une expérience utilisateur optimale." 
          />
          <ServiceCard 
            title="Intégration des réseaux sociaux" 
            description="Connectez votre site avec les réseaux sociaux pour une meilleure visibilité." 
          />
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
      <div className='flex justify-center items-center bg-indigo-500 text-white py-8'>
        <h3 className='text-2xl font-semibold mr-4'>Vous êtes toujours partant ?</h3>
        <Link to="/contact">
          <button className='bg-white text-indigo-500 hover:bg-gray-200 py-2 px-4 rounded-full'>
            Contactez-nous
          </button>
        </Link>
      </div>
      <div>
        <FooterComponent />
      </div>
      <Tooltip id="cms-tooltip" place="top" type="bg-indigo-500" effect="solid"/>
    </div>
  );
}

export default Decouverte;
