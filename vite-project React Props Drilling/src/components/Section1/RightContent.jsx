import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 p-1 flex flex-nowrap gap-3 overflow-x-auto'>

      {
        props.users.map((elem, index) => {
          return <RightCard key={index} img={elem.img} id={index} tag={elem.tag} />
        })
      }

      {/* <RightCard/>
      <RightCard />
      <RightCard />
      <RightCard /> */}
    </div>
  )
}

export default RightContent