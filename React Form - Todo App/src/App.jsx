import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  function submitHandler(e) {
    e.preventDefault()
    console.log("Form submitted successfully!", text)
    setList([...list, { id: Date.now(), list: text }])
    setText("")
  }
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type='text'
          placeholder='Enter your name'
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add!</button>
        {
          list.map((e) => {
            return <p key={e.id}>{e.list}</p>
          })
        }
      </form>
    </>
  )
}

export default App