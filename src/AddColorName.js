import React from 'react'

const AddColorName = ({addColor , setColor ,isDarkText ,setDarkText}) => {

  const handleClick =() =>{

  }

  return (
    <div className='AddColorForm'>
          <form  onSubmit={(e) => e.preventDefault}>
      <input 
        id='addColoeName'
        type='text'
        role='addColorName'
        placeholder='Add Color Name'
        required
        value={addColor}
        onChange={(e) => setColor(e.target.value)}
      />
    </form>
    <button 
      type='submt'
      onClick={() => setDarkText(!isDarkText)}
    >Toggle Text Color</button>
    </div> 
  )
}

export default AddColorName