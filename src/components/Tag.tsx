interface Props{
  name: string;
}

function Tag(props: Props){
  return (
    <p className=' text-gray-400 text-sm border px-2 rounded-lg'>{props.name}</p>
  );
}

export default Tag;