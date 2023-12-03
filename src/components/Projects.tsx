import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import Project from "./Project";
import data from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <div className="w-[10%]"></div>
        <div className="">
          <p className=" text-xs text-gray-400 tracking-widest">
            MEUS PROJETOS
          </p>
          <strong className="font-semibold text-3xl text-center">
            Portfólio
          </strong>
        </div>
      </div>
      {/* <section className="flex justify-center gap-4 flex-wrap">
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
      </section> */}
      <Swiper 
        slidesPerView={1}
        slidesPerGroupSkip={1}
        navigation={true}
        modules={[Navigation]} 
        centeredSlides={false}
        keyboard={{
          enabled: true,
        }}
        className="mt-10"
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1240: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
      >
        {listProject.map((project, index) => {
          return (
            <SwiperSlide>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Projects;
