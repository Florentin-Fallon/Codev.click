import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className='flex justify-between bg-indigo-500 items-center p-4'>
            <div>
                <Link to="/">
                    <img src={require('../images/codevi.png')} alt='test' className='w-32' />
                </Link>
            </div>
            <div>
                <ul className='flex gap-12 mr-8'>
                    <li>
                        <Link to="/" className='font-semibold text-white hover:text-indigo-400'>Accueil</Link>
                    </li>
                    <li
                        className='relative'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/propos" className='font-semibold text-white hover:text-indigo-400'>
                            Qui sommes-nous ?
                        </Link>
                        {isDropdownOpen && (
                            <ul className='absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md'>
                                <li className='px-4 py-2 hover:bg-indigo-100 hover:rounded-t-md'>
                                    <Link to="/services">Nos Services</Link>
                                </li>
                                <li className='px-4 py-2 hover:bg-indigo-100 hover:rounded-b-md'>
                                    <Link to="/realisations">Nos réalisations</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/contact" className='font-semibold text-white hover:text-indigo-400'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
