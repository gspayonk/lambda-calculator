import React from "react";
import "./App.css";
import { useState } from 'react';

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component
import Numbers from '../src/components/ButtonComponents/NumberButtons/Numbers';
import Operators from '../src/components/ButtonComponents/OperatorButtons/Operators';
import Specials from '../src/components/ButtonComponents/SpecialButtons/Specials';
import Display from '../src/components/DisplayComponents/Display';

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  //functionality

  const [inputs, setInputs] = useState (true);
  const [results, showResults] = useState ('0');

  const showNumbers = number => {
    if (results === '0' && inputs){
      showResults(number);
      setInputs(false);
    } else if (results.length === 7) {
      console.log("Too big to handle");
    } else if (functions) {
      showResults(number);
    } else if (inputs) {
      showResults(number);
      setInputs(false);
    } else {
      showResults(results + number);
    }
  };

  const [functions, setFunctions] = useState(null);
  const [initValue, setInitValue] = useState(null);
  const functionalOperator = operation => {
    if (initValue) {
      showResults(eval(`${initValue + functions + results}`));
      setFunctions(null);
      setInitValue(null);
      setInputs(true);
    } else if (operation === "x") {
      setFunctions("*");
      setInitValue(results);
    } else if (operation === "=" && !initValue) {
      setFunctions(null);
    } else if (operation === "=" && initValue) {
      showResults(eval(`${initValue + functions + results}`));
      setFunctions(null);
      setInitValue(null);
      setInputs(true);
    } else {
      setFunctions(operation);
      setInputs(true);
      setInitValue(results);
    }
  };


const functionalSpecials = special => {
  if (special === "C"){
    showResults('0');
    setFunctions('null');
    setInitValue('null');
    setInputs(true);
  }
};


  return (

    <div className="container">
      <Logo/>
      <Display display={results}/>

      <div className='btnSection'>      
        <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}

          <Specials propNum={functionalSpecials}/>
          <Numbers propNum={showNumbers} />

        </div>

        <div className='flexRight'>
        <Operators propNum={functionalOperator}/>
        </div>
      </div> 
      
    </div>
  );
  }
export default App;
