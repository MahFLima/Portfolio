import React from "react";
import Project from "./Project";

const Projects: React.FC = () => {
  return (
    <div className="">
      <div>
        <p className="text-xs text-gray-400 tracking-widest">MEUS PROJETOS</p>
        <strong className="font-semibold text-3xl text-center">
          Portfólio
        </strong>
      </div>
      <section>
        <Project/>
      </section>
    </div>
  );
};

export default Projects;
