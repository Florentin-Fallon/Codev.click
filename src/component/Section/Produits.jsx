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
                        price='200€'
                        list='Optimisation de la performance'
                        lists='Refonte du design'
                        threeList='Amélioration des fonctionnalités'
                        button='En savoir +' 
                        url='/amelioration'
                    />
                </div>
                <div>
                    <SquishyCard
                        namePackage='Pack Découverte'
                        price='500€'
                        list="Conception personnalisée"
                        lists='Fonctionnalités avancées'
                        threeList='Intégration des réseaux sociaux'
                        button='En savoir +'
                        url='/decouverte'
                    />
                </div>
        </div>
        
    </div>
  )
}

export default Produits