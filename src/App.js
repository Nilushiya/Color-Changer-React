import React, { useState } from 'react'
import Display from './Display'
import AddColorName from './AddColorName'

const App = () => {

  const [addColor , setColor] = useState("")
  const [isDarkText , setDarkText] = useState(true)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if(!addColor) return;
  //   addColorName(addColor)
  //   setColor("")
  // }
  // const  addColorName =(addColors) =>{
  //   const listColor = [...addColors , addColors]
  //   setColor(listColor)
  //   localStorage.setItem("colors" , JSON.stringify(listColor))
  // }

  return (
    <div className='App'>
      <h1>Color Changer</h1>
      <Display 
      addColor = {addColor}
      isDarkText = {isDarkText}
      />
      <AddColorName 
      addColor = {addColor}
      setColor = {setColor}
      isDarkText ={isDarkText}
      setDarkText ={setDarkText}
      // handleSubmit={handleSubmit}
      />
    </div>
      )
}

export default App