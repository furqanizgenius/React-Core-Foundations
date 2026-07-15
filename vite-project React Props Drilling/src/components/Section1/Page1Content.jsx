import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-18 py-10 h-130 flex gap-10'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content