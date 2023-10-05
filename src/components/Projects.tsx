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

  return (
    <div className="py-24 bg-gray-200 flex flex-col items-center gap-12">
      <div className="mb-4">
        <p className=" text-xs text-gray-400 tracking-widest">MEUS PROJETOS</p>
        <strong className="font-semibold text-3xl text-center">
          Portfólio
        </strong>
      </div>
      <section className="flex gap-4">
        <Project
          title={listProject[0].title}
          link={listProject[0].link}
          linkIMG={listProject[0].linkIMG}
          children={
            <>
              <Tag name={listProject[0].children[0]} />
              <Tag name={listProject[0].children[1]} />
            </>
          }
        />
        <Project
          title={listProject[1].title}
          link={listProject[1].link}
          linkIMG={listProject[1].linkIMG}
          children={
            <>
              <Tag name={listProject[1].children[0]} />
              <Tag name={listProject[1].children[1]} />
              <Tag name={listProject[1].children[2]} />
            </>
          }
        />
      </section>
    </div>
  );
};

export default Projects;
