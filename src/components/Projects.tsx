import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import Project from "./Project";
import data from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  title: string;
  link: string;
  linkIMG: string;
  children: string[];
}

const Projects: React.FC = () => {
  const [listProject, setListProject] = useState<Props[]>(data);

  useEffect(() => {
    setListProject(data);
  }, []);

  return (
    <div id="projects" className="py-20 bg-gray-200 flex flex-col gap-4">
      <div className="flex">
        <div className="max-w-6xl w-full m-auto px-4">
          <p className=" text-xs text-gray-400 tracking-widest">
            MEUS PROJETOS
          </p>
          <strong className="font-semibold text-3xl text-center">
            Portfólio
          </strong>
        </div>
      </div>
      <div className="flex justify-center">
        <section className="max-w-6xl w-full gap-4 flex px-4 overflow-x-auto">
          {listProject.map((project, index) => {
            return (
              <Project
                id={index}
                title={project.title}
                link={project.link}
                linkIMG={project.linkIMG}
                children={
                  <>
                    {project.children.map((item, index) => {
                      return <Tag id={index} name={item} />;
                    })}
                  </>
                }
              />
            );
          })}
        </section>
        
      </div>
    </div>
  );
};

export default Projects;
