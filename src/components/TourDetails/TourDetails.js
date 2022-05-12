import { Link } from "react-router-dom";


 export default function TourDetails() {
 return (

     <>
     <h1> in city details </h1>
    
    <Link to="/">Home</Link>
   </>
 );
 }
// import {useParams} from "react-router-dom"
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Route  path="/city/:id">
//           <city> </city>
//        </Route>
//     </BrowserRouter>
//   );
// }
// function city(props) {
//   let {id} = useParams()
//   return <h2>ID is {id}</h2>;
// }