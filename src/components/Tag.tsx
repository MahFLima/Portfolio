interface Props{
  id: number;
  name: string;
}

function Tag(props: Props){
  return (
    <p key={props.id} className=' text-gray-400 text-sm border px-2 rounded-lg'>{props.name}</p>
  );
}

export default Tag;