import React from "react";

const SpecialButton = ({propNum, special}) => {

  return (

    <button className='btn'
    
    onClick={() => propNum(special)
    
    }>

      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      {special}
      
    </button>
  );
};

export default SpecialButton;