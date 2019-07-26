import React, { useState, useContext } from 'react'
import axios from 'axios'

import { SmurfContext } from '../../contexts/SmurfContext'

const SmurfForm = () => {
  // const { smurf } = useContext(SmurfContext)

  const [state, setState] = useState({
    name: '',
    age: '',
    height: ''
  })

  let pleaseWork = []

  const changeHandler = (event) => {
    setState({...state, [event.target.name]: event.target.value})
    pleaseWork = state
    console.log(state)
    console.log('oadslfkasd :', pleaseWork)
  }
  
  console.log(state)

  const addSmurf = (event) => {
    event.preventDefault()
    console.log('State in addSmurf : ', state)
    axios
      .post(`http://localhost:3333/smurfs`, state)
      .then(response => {
        // setSmurfs(response.data)
        console.log('this is the axios response : ', response)
      })
      .catch(error => console.log(error.response))
  }

  return (
    <div>
      <form onSubmit={addSmurf}>
        <input 
          type='text'
          name='name'
          value={state.name}
          onChange={changeHandler}
          placeholder='name'
          />
        <input 
          type='number'
          name='age'
          value={state.age}
          onChange={changeHandler}
          placeholder='age'/>
        <input
          type='string'
          name='height'
          value={state.height}
          onChange={changeHandler}
          placeholder='height'/>
        <button onClick={addSmurf}>add smurf</button>
      </form>
    </div>
  )
}

export default SmurfForm