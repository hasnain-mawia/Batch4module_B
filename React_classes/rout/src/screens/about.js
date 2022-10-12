import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
    return (
      <>
        <h1>About</h1>
        <button onClick={()=>{
          navigate('/contact',{
            state:{
              id:1,
              name:'abc'
            }
          })
        }}>Move</button>
      </>
    );
  }
  export default About;
  