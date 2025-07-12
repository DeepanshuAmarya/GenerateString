import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [strLength, setStrLength] = useState(0)
  const [str, setStr] = useState("")

  useEffect(()=>{
    genString()}, [strLength]
  )

  const genString = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let temp = ""
    for(let i=0; i<strLength; i++){
        temp += chars[Math.floor(Math.random()*chars.length)]
    }
    setStr(temp)
}

const genStr = (e) =>{
  if(e.target.value<26){
  e.preventDefault();
  setStrLength(e.target.value)
}
else{
  alert("the value should be less than 26")
}}

  return (
    <div >
      <p>Enter digit to generate a string:</p>
      <input type="number" onChange={genStr}/>
      <h4>{str}</h4>
    </div>
  )
}

export default App