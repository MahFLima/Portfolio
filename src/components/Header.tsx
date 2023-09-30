import React from 'react';
import { Icon } from '../assets/Icon'
import { Menu } from './Menu';

export const Header: React.FC = () => {
  return (
    <header className='flex items-center px-4 py-5 lg:px-28 lg:py-10 justify-between bg-gray-200'>
      <p className='text-blue-900 font-semibold text-3xl'><Icon/></p>
      <nav className='hidden lg:flex gap-8 text-base font-medium'>
        <li className='list-none hover:text-purple-500'><a href="#">Sobre</a></li>
        <li className='list-none hover:text-purple-500'><a href="#">Experiencia</a></li>
        <li className='list-none hover:text-purple-500'><a href="#">Portfolio</a></li>
        <li className='list-none hover:text-purple-500'><a href="#">Contato</a></li>
      </nav>
      <span className='flex items-center gap-8'>
        {/* <button><Moon size={24} /></button> */}
        <button className='hidden lg:flex border border-1 border-blue-900 px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-gray-300'>Resume</button>
        <Menu/>
      </span>
    </header>
  );
}

