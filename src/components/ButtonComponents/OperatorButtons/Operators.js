//import any components needed
import React from "react";
import { useState } from 'react';
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = (props) => {

    // STEP 2 - add the imported data to state
    const [operatorBtn] = useState(operators);

    return ( 

        <div className='operatorsArea'> 
        {/* STEP 3 - Use .map() to iterate over your array data and return a button
                component matching the name on the provided file. Pass
                it any props needed by the child component*/} 
            
            {operatorBtn.map((calcOperators, elmnt) => (
                <OperatorButton key={elmnt} calcOperators={calcOperators}/>
            ))}

        </div>
    );
};

export default Operators;