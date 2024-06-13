import React from 'react'
import SquishyCard from '../Cards/SquishyCard'
import { Link } from 'react-router-dom'

function Produits() {
  return (
    <div className='my-16'>
        <div className='justify-center flex'>
            <Link to="/services"><h1 className='text-black text-[40px] font-semibold pb-2 border-b-2 w-62'>Nos Services</h1></Link>
        </div>
            <div className='flex justify-center gap-8'>
                <div>
                    <SquishyCard 
                        namePackage='Pack Amélioration'
                        price='100€'
                        list='Optimisation de la performance'
                        lists='Refonte du design'
                        button='En savoir +' 
                        url='/amelioration'
                    />
                </div>
                <div>
                    <SquishyCard
                        namePackage='Pack Découverte'
                        price='200€'
                        list="Conception personnalisée"
                        lists='Médias sociaux'
                        threeList='Site vitrine de qualité'
                        button='En savoir +'
                        url='/decouverte'
                    />
                </div>
                <div>
                    <SquishyCard
                        namePackage='Pack Premium'
                        price='500€'
                        description='Conception haut de gamme'
                        list='Conception sur mesure'
                        lists='Intégration de fonctionnalités'
                        button='En savoir +'
                        url='/premium'
                    />
                </div>
        </div>
        
    </div>
  )
}

export default Produits