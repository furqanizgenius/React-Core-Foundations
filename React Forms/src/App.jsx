import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")

  function submitHandler(e) {
    e.preventDefault()
    console.log("Form submitted by", title)
    setTitle("")
  }
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          placeholder='Enter your name'
        />
        <button type="submit">Click me!</button>
      </form>
    </>
  )
}

export default App