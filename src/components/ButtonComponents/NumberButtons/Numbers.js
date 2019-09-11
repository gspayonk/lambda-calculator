//import any components needed
import React from "react";
import { useState } from 'react';
import NumberButton from './NumberButton';

//Import your array data to from the provided data file
import { numbers } from '../../../data';

// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/

const Numbers = ({propNum}) => {

    // STEP 2 - add the imported data to state

    return ( 

            <div className= 'numbersArea'> 

                {numbers.map ((number, index) => (

                < NumberButton key={index} propNum={propNum}number={number} />
                ))}
            
            {/* STEP 3 - Use .map() to iterate over your array data and return a button component matching the name on the provided file. Pass it any props needed by the child component*/}
            
            </div>
    );
};

export default Numbers;