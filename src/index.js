import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Proptypes from "prop-types"
import './index.css';
import App from './App';
// import StarRating from "./StarRating";

// function Test(){
//   const [movieRating,setMovieRating]=useState(0)
//   return <div>
//     <StarRating maxRating={10} color={"blue"} defaultRating={3} onSetRating={setMovieRating}/>
//     <p>This movie was rated {movieRating} stars</p>
//   </div>
// }

// StarRating.propTypes={
//   maxRating:Proptypes.number,
//   defaultRating:Proptypes.number

// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={["Terible","Bad","Okay","Good","Amazing"]} defaultRating={3} />
    <Test/> */}
  </React.StrictMode>
);

