import React from "react";
import { Icon } from "../assets/Icon";
import { Menu } from "./Menu";

export const Header: React.FC = () => {
  return (
    <header className="w-full flex items-center px-4 py-2 lg:px-20 lg:py-4 justify-between bg-gray-200 fixed top-0 z-10">
      <p className="text-blue-900 font-semibold text-3xl">
        <Icon />
      </p>
      <nav className="hidden lg:flex gap-8 text-base font-medium">
        <li className="list-none hover:text-purple-500">
          <a href="#about">Sobre</a>
        </li>
        <li className="list-none hover:text-purple-500">
          <a href="#expirience">Experiencia</a>
        </li>
        <li className="list-none hover:text-purple-500">
          <a href="#projects">Portfolio</a>
        </li>
        <li className="list-none hover:text-purple-500">
          <a href="#">Contato</a>
        </li>
      </nav>
      <span className="lg:hidden flex items-center gap-8">
        {/* <button><Moon size={24} /></button> */}
        <Menu />
      </span>
    </header>
  );
};
