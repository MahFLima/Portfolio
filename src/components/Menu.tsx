import React, { useState } from 'react';

export const Menu: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChecked(){
    setIsChecked(!isChecked);
  }

  return (
    <li className="lg:hidden p-4 lg:px-8 relative flex items-center space-x-1">
      
      <button className="shrink-0 p-1 flex items-center gap-2" onClick={handleChecked}>
        <a className="text-slate-800 hover:text-slate-900">Menu</a>
        <span className="sr-only">Show submenu for "Flyout Menu"</span>
        <svg className="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
          <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        </svg>
      </button>
      {/* 2nd level menu */}
      <ul className={isChecked ? "origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl" : "hidden"}>
        <li>
          <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
            <span className="whitespace-nowrap">Sobre</span>
          </a>
        </li>
        <li>
          <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
            <span className="whitespace-nowrap">Experiencia</span>
          </a>
        </li>
        <li>
          <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
            <span className="whitespace-nowrap">Portfolio</span>
          </a>
        </li>
        <li>
          <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
            <span className="whitespace-nowrap">Contato</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

