import React from 'react';
import { Card } from './Card';
import { Browsers, Database, TreeStructure } from '@phosphor-icons/react';

export const Expirience: React.FC = () => {
  return (
    <div id="expirience" className='flex flex-col gap-20 items-center py-20 bg-gray-100'>
        <strong className='font-semibold text-3xl text-center'>Conhecimentos em</strong>
        <div className='flex gap-4 flex-wrap justify-center'>
            <Card children={<Database      className="text-purple-500" size={32} />} title='Banco de Dados' description='Criação e implementação de base de dados utilizando MySQL'/>
            <Card children={<Browsers      className="text-purple-500" size={32} />} title='Desenvolvimento Front-End' description='Construção de aplicações web, utilizando React, TypeScript.'/>
            <Card children={<TreeStructure className="text-purple-500" size={32} />} title='Desenvolvimento Back-End' description='Construção e implementação de APIs, utilizando Node.JS e PHP com Codeigniter'/>
        </div>
    </div>
  );
}

