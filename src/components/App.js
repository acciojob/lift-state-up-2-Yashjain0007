
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  let[text,setText] = useState("");


  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {
          text &&
          <p>{text}</p>
        }
        <div className="child">

          <h2>Child Component</h2>
          <input type="text" onChange={(e)=> setText(e.target.value)}/>
        </div>
    </div>
  )
}

export default App
