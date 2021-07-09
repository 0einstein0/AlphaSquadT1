import React from "react";

function Cards({ heading,parag}) {
  
  return (
  <div class=" m-8 -mt-10 w-44 h-30 text-center pt-8 pb-8 p-6 shadow-lg rounded-lg bg-white place-items-center grid grid-flow-row " >
    <h1 style={{fontFamily: "Mulish, sans-serif"}} class="text-black font-bold self-center text-4xl" >{heading}</h1>
    <p style={{fontFamily: "Mulish, sans-serif"}} class="mt-4 text-gray-600 text-sm leading-normal  " >{parag} </p>
    </div>);
}

export default Cards;
