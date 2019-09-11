import React from "react";


const NumberButton = ({propNum, number}) => {



  return (

    <button className='btn' 
    
    onClick = {() => {propNum(number);
      
    }}> 

      {number}

      {/* Display a button element rendering the data being passed down from the parent container on props */}

    </button>
  );
};

export default NumberButton;