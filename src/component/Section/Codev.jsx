import React from 'react'
import { Link } from 'react-router-dom'

function Codev() {
  return (
    <div className='my-24 justify-center flex gap-24 mx-12 rounded-xl items-center shadow-xl'>
        <div>
            <img src={require('../images/codev.png')} alt='Codev-logo' className='w-100 h-40'/>
        </div>
        <div className='flex-col flex justify-center p-12 w-[50%]'>
            <h1 className='text-black text-[30px] font-semibold pb-2 border-b-2 w-60 justify-center'>Pourquoi Codev ? </h1>
            <p className='tracking-wide text-justify leading-loose pt-6'><span className='bg-indigo-500 p-1 rounded-lg text-white'>Codev</span> - alliant le code et le développement - est né de ma passion pour le développement web depuis ma reconversion. En proposant mes services, je mets en avant mon amour pour ce que je fais et ma capacité à retranscrire cette passion dans les sites web de votre entreprise. Avec Codev, vous bénéficiez d'un engagement sincère, d'une expertise technique et d'une créativité sans limite pour donner vie à vos idées en ligne.</p>
            <div className='flex justify-center'>
                <Link to="/propos"><button className='bg-indigo-500 hover:bg-indigo-300 text-white px-4 py-2 mt-8 rounded-md'>En savoir +</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Codev