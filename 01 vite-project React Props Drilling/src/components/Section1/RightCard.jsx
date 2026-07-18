import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full w-60 bg-red-600 rounded-4xl relative shrink-0'>
            <img className='rounded-4xl h-full object-cover' src={props.img} alt="" />

            <RightCardContent id = {props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard  