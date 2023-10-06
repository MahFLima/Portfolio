import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import Project from "./Project";
import data from "../utils/data";

interface Props {
  title: string;
  link: string;
  linkIMG: string;
  children: string[];
}

const Projects: React.FC = () => {
  const [listProject, setListProject] = useState<Props[]>(data);

  useEffect(()=>{
    setListProject(data)
  },[])

  function scrollToTarget(target: any) {
    const targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

  return (
    <div id="projects" className="py-20 bg-gray-200 flex flex-col gap-4">
      <div className="pl-12">
        <p className=" text-xs text-gray-400 tracking-widest">MEUS PROJETOS</p>
        <strong className="font-semibold text-3xl text-center">
          Portfólio
        </strong>
      </div>
      <section className="px-10 ">
        {listProject.map((project, index)=>{return (
          <Project
            id={index}
            title={project.title}
            link={project.link}
            linkIMG={project.linkIMG}
            children={<>{project.children.map((item, index) => {return(<Tag id={index} name={item}/>)})}</>}
          />
        )})}
      </section>
    </div>
  );
};

export default Projects;
