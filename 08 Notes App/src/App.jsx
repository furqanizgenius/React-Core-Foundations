import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)
    // setTask([...task, { id: Date.now(), title: title, details: details }])
    setTitle('')
    setDetails('')
  }

  const deleteNote = (indexToRemove) => {
    const updatedTask = task.filter((elem, index) => index !== indexToRemove);
    setTask(updatedTask)
    console.log(updatedTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'
      >
        <h1 className='text-4xl mb-2 font-bold'>Add Notes✍️</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          // required
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          // required
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          type="submit"
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'
        >Add Note
        </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold bg-amber-10'>Recent Notes📒</h1>
          <div className='bg-white text-black p-2 mr-3 flex items-center font-semibold w-fit rounded-full'>
            {task.length === 0 ? "Count" : ` ${task.length}`}
          </div>
        </div>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {
            task.length === 0 ? (
              <span className='text-lg font-semibold'>No Notes Found!</span>
            ) : (
              <>
                {
                  task.map((elem, index) => {
                    return <div key={elem.id} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-6 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                      <div>
                        <h3 className='leading-tight text-md font-bold'>{elem.title}</h3>
                        <p className='mt-2 leading-tight text-[11px] font-semibold text-gray-600'>{elem.details}</p>
                      </div>
                      <button onClick={() => {
                        deleteNote(index)
                      }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
                    </div>
                  })
                }
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App