import Countrys from "../../tours/Tours.js";
const countryData = require("../../../data/db.json");

function Tour(props) {
    return (
      <div>
        <h1></h1>
       
        {countryData.map((country) => {
          return <Countrys name={country.name} images={country.image} alt={country.id} />;
        })}
        
        
      </div>
    );
  }
  export default Tour;