import React, { useState, useEffect } from "react";
import axios from 'axios'

import { SmurfContext } from "../contexts/SmurfContext";

import "./App.css";
import Smurfs from './Smurf/Smurf'

const App = (props) => {
  const [smurfs, setSmurfs] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        setSmurfs(response.data)
        console.log('this is the axios response : ', response)
      })
      .catch(error => console.log(error.response))
  },[])

  if (smurfs.length < 1 ) {
    return <h1>Loading . . .</h1>
  }

  return (
    <SmurfContext.Provider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {smurfs.map(smurf => (
          <Smurfs smurf={smurf} />
        ))}
      </div>
    </SmurfContext.Provider>
  );
}


export default App;
