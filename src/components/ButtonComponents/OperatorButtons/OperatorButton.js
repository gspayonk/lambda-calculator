import React from "react";

const OperatorButton = ({propNum, operator}) => {

  return (

    <button className='btn'
    
    onClick={() => {
      propNum(operator);

    }}>

      {/* Display a button element rendering the data being passed down from the parent container on props */}

      {operator}
      
    </button>
  );
};

export default OperatorButton;