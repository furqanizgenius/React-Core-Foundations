import { useEffect, useState } from "react"
import Card from "./Components/Card"

const App = () => {
  const [data, setData] = useState([])

  async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      setData(data)
    }
    catch (error) {
      console.log("Error while fetching data:", error)
    }
  }
  // useEffect(()=>{
  //   getData()
  // },[])


  return (
    <>
    <button onClick={getData}>Get Data from API</button>
      {
        data.map((elem, index) => {
          return <div key={elem.id}>
            <Card name={elem.name} username={elem.username} email={elem.email} phone={elem.phone} website={elem.website} company={elem.company.name} />
          </div>
        })
      }
    </>
  )
}

export default App