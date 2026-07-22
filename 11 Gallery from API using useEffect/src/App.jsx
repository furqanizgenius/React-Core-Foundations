import { useEffect, useState } from "react"

const App = () => {
  const [gallery, setGallery] = useState([])
  const [index, setIndex] = useState(1)

  async function getData() {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      const data = await response.json()
      setGallery(data)
      console.log(data)
    } catch (error) {
      console.log("Error while fetching data:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  return (
    <>
      <div className="h-screen p-5">
        {/* <button
          onClick={getData}
          className="bg-green-600 text-white px-5 py-3 rounded-2xl font-semibold active:scale-105 mb-5">get Data</button> */}

        <div className="flex flex-wrap gap-6 p-5">
          {
            gallery?.map((elem, idx) => {
              return <div key={elem.id} >
                <a href={elem.url} target="_blank">
                  <div className="h-50 w-50 rounded-2xl bg-gray overflow-hidden  hover:scale-105 transition-transform duration-150">
                    <img src={elem.download_url} className="h-full w-full object-cover" />
                  </div>
                  <h2 className="font-semibold text-md mt-3">{elem.author}</h2>
                </a>
              </div>
            })
          }
          <div className="flex justify-center items-center gap-6 w-full">
            <button 
            className="bg-amber-400 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-105"
            onClick={()=>{
              if(index>1){
                setIndex(index-1)
              }
            }}
            >Prev</button>
            <button 
            className="bg-amber-400 text-black rounded px-4 py-2 font-bold cursor-pointer active:scale-105"
            onClick={()=>{
              setIndex(index+1)
            }}
            >Next</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
