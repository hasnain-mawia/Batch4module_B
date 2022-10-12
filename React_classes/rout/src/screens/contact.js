import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const location = useLocation();

  let clickEv = () => {
    navigate("/about");
  };
  console.log(location.state);

  useEffect(() => {
    if (location.state) {
      // setUser(location.state)
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <h1>
        Contact with{" "}
        {location.state && location.state.title ? location.state.title : "--"}
      </h1>
      <button onClick={clickEv}>Go to Home</button>
    </>
  );
}
export default Contact;
