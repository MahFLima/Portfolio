import React from "react";

interface Props{
  title: string;
  description: string;
  children: React.ReactNode;
}

export function Card(props: Props){
  return (
    <div className="bg-gray-200 flex gap-4 p-10 flex-col items-center justify-center w-96 h-72 text-center">
      {props.children}
      <strong>{props.title}</strong>
      <p>
        {props.description}
      </p>
    </div>
  );
};
