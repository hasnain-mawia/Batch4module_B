import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [list,setList] = useState([
    {
      id:1,
      title:'ABC',
    },
    {
      id:2,
      title:'BNM',
    },
    {
      id:3,
      title:'POI',
    },
    {
      id:4,
      title:'TYI',
    },
    {
      id:5,
      title:'ERT',
    },
  ])
  let navigate = useNavigate()

  let moveData = (data)=>{
    navigate('contact',{
      state:data
    })
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={moveData}>Move to Contact with data</button>

    {
      list.map((e,i)=><p key={i} onClick={()=>moveData(e)}>
        {e.title}
      </p>)
    }


    </>
  );
}
export default Home;
