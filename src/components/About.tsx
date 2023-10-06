import { InstagramLogo, GithubLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";
import React from "react";

export const About: React.FC = () => {
  return (
    <div id="about" className="mt-10 flex-col-reverse px-10 py-12 gap-4 items-center lg:flex-row flex lg:justify-center lg:gap-16 bg-gray-200">
      <div className="lg:max-w-lg flex flex-col gap-6">
        <p className="text-xs text-gray-400 tracking-widest">MEU NOME É</p>
        <strong className="text-4xl">
          Mariana <span className="text-purple-500">Lima.</span>
        </strong>
        <p className="text-base">
          Sou desenvolvedora Web Front-End, realizo projetos freelancers focados em Typescript, React e frameworks de CSS como Tailwind, Styled Components. 
          Estou em busca de uma transição de carreira para desenvolvimento web.
        </p>
        <div className="flex gap-6">
          <a className="hover:text-purple-500" target="_blank" href="https://www.instagram.com/mari_alifer/"><InstagramLogo size={24} /></a>
          <a className="hover:text-purple-500" target="_blank" href="https://github.com/mahflima"><GithubLogo size={24} /></a>
          <a className="hover:text-purple-500" target="_blank" href="https://twitter.com/mariana88654"><TwitterLogo size={24} /></a>
          <a className="hover:text-purple-500" target="_blank" href="https://www.linkedin.com/in/mahflima/"><LinkedinLogo size={24} /></a>
        </div>
      </div>
      <img
        className=" w-96 h-96 rounded-full object-cover"
        src="https://github.com/mahflima.png"
        alt=""
      />
    </div>
  );
};
