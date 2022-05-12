import { Link } from "react-router-dom";
import Tour from "../tours/tour/Tour.js";
const countryData = require("../../data/db.json");

function Tours(props) {
  return (
    <div>
      {props.Data.map((data) => {
        return (
          <Link to={`/city/${data.id}`}>
            <Tour dataWithKey={data} />
          </Link>
        );
      })}
    </div>
  );
}

export default Tours;
