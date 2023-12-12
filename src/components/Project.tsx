import React from "react";

interface Props {
  id: number;
  title: string;
  link: string;
  linkIMG: string;
  children: React.ReactNode;
}

function Project(props: Props) {
  return (
    <div className="min-w-[320px] flex flex-col relative rounded-2xl">
      <a
        href={props.link}
        key={props.id}
        target="_blank"
        className="absolute min-w-[320px] w-full h-full bg-black opacity-20 hover:opacity-0"
      ></a>
        <img
          className="w-full h-72 object-cover"
          src={props.linkIMG}
          alt=""
        />
        <div className="bg-white p-4">
          <p className="">{props.title}</p>
          <div className="flex gap-2 mt-4">{props.children}</div>
        </div>
      
    </div>
  );
}

export default Project;
