//import any components needed
import React from "react";
import { useState } from 'react';
import SpecialButton from './SpecialButton';


//Import your array data to from the provided data file
import { specials } from '../../../data';


const Specials = (props) => {

    // STEP 2 - add the imported data to state

    const [specialBtn] = useState(specials);

    return ( 
        <div className='specialsArea'> 

        {/* STEP 3 - Use .map() to iterate over your array data and return a button
                component matching the name on the provided file. Pass
                it any props needed by the child component*/} 

        {specialBtn.map((specialChars, elmnt) => (
            <SpecialButton key={elmnt} specialChars={specialChars}/>
        ))}    
        
        </div>

    );
};

export default Specials;