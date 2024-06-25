import React from 'react'
import FooterComponent from './component/Footer/FooterComponent'
import { FloatButton } from 'antd'
import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import ServiceCard from './component/Cards/ServiceCard'
import { RiseOutlined } from '@ant-design/icons'
import { CheckCircleIcon } from '@heroicons/react/solid'

function Amelioration() {
  return (
    <div>
  <FloatButton.BackTop />
  <div>
    <div className='flex justify-center pb-24 pt-24 bg-[url("./component/images/forme.png")] bg-cover bg-center bg-local overflow-hidden'>
      <div className='h-60'>
        <h1 className="text-[35px] text-center text-white font-semibold pb-2">Améliorons ensemble votre <span className='underline underline-offset-8 decoration-indigo-500 decoration-wavy decoration-2'>site web</span></h1>
      </div>
    </div>
    <div className='flex mx-8 my-8 shadow-xl rounded-xl'>
      <div className='flex items-center p-2'>
        <img src={require('../src/component/images/ameliorationPic.png')} alt="Amélioration" className="w-full h-[400px] object-cover rounded-xl" />
      </div>
      <div className='flex flex-col justify-center mx-8 w-[90%] p-8'>
        <h1 className='font-semibold text-center text-xl pb-6'>Optimisation Expert de Votre Site Web</h1>
        <p className='pb-4 text-base text-justify font-light tracking-wide'>Chez Codev, nous nous engageons à donner un coup de neuf à votre site web pour le rendre plus performant et attrayant.</p>
        <p className='pb-4 text-base text-justify font-light tracking-wide'>
          Bien que nous commencions tout juste dans le domaine de l'amélioration de sites web, notre passion pour le web et notre engagement envers la qualité nous permettront de répondre parfaitement à vos besoins.
        </p>
        <p className='pb-4 text-justify font-light tracking-wide'>Nous proposons des solutions sur mesure, adaptées à votre entreprise, pour moderniser votre site et optimiser votre présence en ligne.</p>
        <p className='pb-4 text-justify font-light tracking-wide'>Confiez votre projet à Codev et découvrez comment nous pouvons transformer votre site web en un outil puissant pour votre entreprise.</p>
        <div className='flex justify-center'>
          <Link to="/contact"><button className='bg-indigo-500 hover:bg-indigo-300 p-3 rounded-xl text-white uppercase'>Contactez nous</button></Link>
        </div>
      </div>
    </div>
  </div>
  <div className='bg-indigo-500 p-8 my-12'>
    <div className="text-center my-8">
      <RiseOutlined style={{fontSize: '45px', color: 'white', marginBottom:'30px'}} />
      <h2 className="text-4xl text-white font-semibold">Nos Services</h2>
      <p className="text-white">Découvrez ce que nous pouvons faire pour vous</p>
    </div>
    <div className='flex justify-center flex-wrap my-8'>
      <ServiceCard 
        title="Audit de site web" 
        description="Nous analysons les performances de votre site et identifions les points d'amélioration." 
      />
      <ServiceCard 
        title="Refonte de design" 
        description="Nous modernisons le design de votre site pour qu'il soit plus attractif et intuitif." 
      />
      <ServiceCard 
        title="Optimisation technique" 
        description="Nous améliorons les aspects techniques pour une meilleure performance et un meilleur référencement." 
      />
    </div>
  </div>
  
  <div className='bg-white py-16 px-8'>
    <div className='max-w-4xl mx-auto text-center'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6'>
        Pourquoi choisir Codev pour l'Amélioration de Votre Site ?
      </h2>
      <p className='text-lg text-gray-600 mb-8'>
        Nous combinons innovation, expertise et écoute pour transformer votre site web en un outil puissant et efficace. Découvrez ce qui nous distingue et pourquoi vous devriez nous choisir.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
          <div className='flex items-center mb-4'>
            <CheckCircleIcon className='h-6 w-6 text-indigo-600 mr-3' />
            <h3 className='text-xl font-semibold text-gray-800'>Expertise Personnalisée</h3>
          </div>
          <p className='text-gray-600'>Nous fournissons des solutions sur mesure, adaptées spécifiquement à vos besoins et à ceux de votre entreprise.</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
          <div className='flex items-center mb-4'>
            <CheckCircleIcon className='h-6 w-6 text-indigo-600 mr-3' />
            <h3 className='text-xl font-semibold text-gray-800'>Design Moderne</h3>
          </div>
          <p className='text-gray-600'>Nous modernisons votre site avec un design attractif et une interface utilisateur intuitive pour améliorer l'expérience visiteur.</p>
        </div>
        <div className='bg-gray-100 p-6 rounded-lg shadow-lg'>
          <div className='flex items-center mb-4'>
            <CheckCircleIcon className='h-6 w-6 text-indigo-600 mr-3' />
            <h3 className='text-xl font-semibold text-gray-800'>Optimisation Technique</h3>
          </div>
          <p className='text-gray-600'>Nous optimisons chaque aspect technique pour garantir la performance, la rapidité et le référencement de votre site.</p>
        </div>
      </div>
      <div className='mt-8'>
        <Link to="/contact">
          <button className='bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700'>
            Discutons de Votre Projet
          </button>
        </Link>
      </div>
    </div>
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
  <Tooltip id="cms-tooltip" place="top" type="bg-indigo-500" effect="solid" />
</div>
  )
}

export default Amelioration