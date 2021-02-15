
import React, {useState} from 'react';
import './rutuja.css';
import Person from './Person.js';
function App()
{
 // ### This is changeText function ###
 const[myText,ChangeMyText]=useState("wisdom");
 
 const buttonClick =()=>
 {
   ChangeMyText("python");
 }
 return(
   <div>
     {/* <h1>Hello,</h1> */}
      <Person myName={myText} PersonButton={buttonClick}></Person>
     </div>
   ); 
 }

 export default App;

