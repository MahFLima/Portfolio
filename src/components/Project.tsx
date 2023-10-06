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
    <div className="mb-10 inline-block ml-4">
      <a
        href={props.link}
        key={props.id}
        target="_blank"
        className="inline-block w-full h-72 opacity-70 hover:opacity-100"
      >
        <img
          className="w-96 h-72 object-cover rounded-t-2xl"
          src={props.linkIMG}
          alt=""
        />
        <div className="w-96 py-4 px-2 bg-white rounded-b-2xl">
          <p className="text-base font-medium">{props.title}</p>
          <div className="flex gap-3 mt-3">{props.children}</div>
        </div>
      </a>
    </div>
  );
}

export default Project;
