import { Link } from "react-router-dom";

function Countrys(props) {
  return (
    <div>
     <Link to="/city/:id"> <img src={props.images} alt={props.alt} /></Link>
      <p> {props.name} </p>


      <p>====================</p>
    </div>
  );
}

export default Countrys;
