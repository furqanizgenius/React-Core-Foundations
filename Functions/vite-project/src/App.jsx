import React from 'react'

const App = () => {
  function inputShow(e) {
    console.log(e)
  }
  return (
    <>
      <input
        onChange={function (e) {
          inputShow(e.target.value)
        }}
        type="text"
        placeholder='Enter'
        className="inp" />
      <button>Click me!</button>
    </>
  )
}

export default App