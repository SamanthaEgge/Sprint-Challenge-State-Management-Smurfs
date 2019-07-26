import React, { useState, useEffect } from "react";
import axios from 'axios'

import { SmurfContext } from "../contexts/SmurfContext";

import "./App.css";

const App = (props) => {
  const [smurfs, setSmurfs] = useState()

  useEffect(() => {
    axios
      .get(`https://localhost:3333/api/smurfs`)
      .then(response => {
        setSmurfs(response)
        console.log('this is the axios response : ', response)
      })
      .catch(error => console.log(error.response))
  },[])

  return (
    <SmurfContext.Provider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* {smurfs.name} */}
      </div>
    </SmurfContext.Provider>
  );
}


export default App;
