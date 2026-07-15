import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  // let counter = 15
  const addvalue = () => {
    // counter = counter + 1

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // isme 1 sw hi increment hoga kyuki React saare 
    // update ko ek saath send krte hai to wo sabko same manega
    // aur ek baar update krenga;

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

    // ye callback property hoti hai uski help se ho raha hai
    
    // lekin iss case me hum previous value utha kr ke 
    // usko update kr rhe hai isliye ek saath jitni baar
    // increment kiye honge wo hoga
  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1><b>Counter</b></h1>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addvalue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
