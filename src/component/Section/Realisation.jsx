import React from 'react'
import CardHome from '../Cards/CardHome'

function Realisation() {
  return (
    <div className='my-16'>
        <div className='justify-center flex'>
            <h1 className='text-black text-[40px] font-semibold pb-2 border-b-2 w-62'>Nos Réalisations</h1>
        </div>
        <div className='flex justify-center gap-12'>
                <CardHome 
                    imgSrc={require('../images/delcam.png')}
                    imgAlt={'Delcam agence'}
                    imgAvatar={require('../images/avatar-D.png')}
                    title={'Delcam'}
                    description={'Agence OnlyFans'}
                    button={'Voir le site'}
                    url={'https://delcam.framer.website'}
                />
                <CardHome 
                    imgSrc={require('../images/neversoft.png')}
                    imgAlt={'Neversoft'}
                    imgAvatar={require('../images/avatar-N.png')}
                    title={'Neversoft'}
                    description={"Club d'airsoft"}
                    button={'Voir le site'}
                    url={'https://florentin-fallon.github.io/Neversoft/'}
                />
                <CardHome 
                    imgSrc={require('../images/florentin.png')}
                    imgAlt={'Codev'}
                    imgAvatar={require('../images/Logo.png')}
                    title={'Codev'}
                    description={'Site de freelance'}
                    button={'Voir le site'}
                    url={'https://codev.click'}
                />
        </div>
    </div>
  )
}

export default Realisation