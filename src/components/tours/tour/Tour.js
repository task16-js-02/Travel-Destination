const countryData = require("../../../data/db.json");


function Tour(props) {
  return (
    <div>
      <h1></h1>

      <img src={props.dataWithKey.image} alt="Hi" />
      <p> {props.dataWithKey.name} </p>
    </div>
  );
}
export default Tour;
