import React, { useState } from 'react'

const App = () => {
  // const [num, setNum] = useState(1)
  const [user, setUser] = useState({ name: 'Furqan', age: 34 })

  // function addNum(){
  //   setNum(num+1)
  // }
  function btnClicked() {
    let newUser = { ...user }
    newUser.name = "Mehmood"
    newUser.age = "60"
    setUser(newUser)
  }
  return (
    <>
      {/* <h1>The value of num is {num}</h1> */}
      <h1>The name of user is {user.name} and age is {user.age}</h1>
      {/* <button onClick={addNum}>Cick me!</button> */}
      <button onClick={btnClicked}>Cick me!</button>
    </>
  )
}

export default App