// import './App.css';
// import React from "react";
import React, {useState} from "react";

// import App1 from "./data/3Nov22-App";
// import { First,Second } from "./data/8nov22-first";
// import Abc from "./data/8nov22-first";
// import Props_Child from "./data/8Nov22-props";
// const App=()=>
// {
  /*<div>
      <h1>Hello all...</h1>
      <p>learning React... </p>               // By using Div Tag
    </div>
    */
  
    /*
    <React.Fragment>
      <h2>Hello alll</h2>
      <p>By using raect fragment</p>                             
    </React.Fragment>
}
    */


    //  9 Nov 22
  // const App=()=>
  // {
  // var n=11;
  // return (
  //    <>
  //       <h1>App running</h1>
  //       <p>By Using React fragment syntentic sugar form</p>       
  //       <br/>       
  //       <img src="https://www.whatsappimages.in/wp-content/uploads/2021/07/Top-HD-sad-quotes-for-whatsapp-status-in-hindi-Pics-Images-Download-Free.gif" height={250} width={200} align='center' alt="alon men"/>
  //       <App1/>
  //       <Abc/>
  //       {n%2===0?<First/>:<Second/>}
  //       <Props_Child name={"Programmers Point"} address={"Ujjain | Indore"}/>
  //    </>
  //     )
  //   }
        {/* 12 Nov 22 */}
const App=()=>{
  // var n=5;
  var [n,updatevalue]=useState(5);
  const Change=(e)=>{
    updatevalue(e.target.value);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.type);
    // updatevalue(n+1);
  }
  return(
    <>
      <h1>App component is running</h1>
      <h2>Value is {n}</h2>
      <button onClick={Change}>Increase</button>
    </>
  )
}

    
 
export default App;
