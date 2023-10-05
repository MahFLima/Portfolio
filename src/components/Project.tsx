import React from 'react';

interface Props{
  title: string;
  link: string;
  linkIMG: string;
  children: React.ReactNode;
}

function Project(props: Props){
  return (
    <a href={props.link} target='_blank' className='w-96 h-72 opacity-70 hover:opacity-100'>
        <img className='w-full h-full object-cover rounded-t-2xl' src={props.linkIMG} alt="" />
        <div className='py-4 px-2 bg-white rounded-b-2xl'>
          <p className='text-base font-medium'>{props.title}</p>
          <div className='flex gap-3 mt-3'>
            {props.children}
          </div>
        </div>
    </a>
  );
}

export default Project;