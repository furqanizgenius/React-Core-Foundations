import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full rounded-4xl p-4 flex flex-col justify-between'>

            <h2 className='bg-white font-semibold rounded-full h-6 w-6 text-center'>{props.id + 1}</h2>
            <p className='text-xs text-white mt-20 leading-relaxed text-shadow-2xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit hic maiores magni sapiente vel quasi suscipit illum, dolorum nemo alias officia nulla veritatis tenetur laboriosam labore, laborum harum officiis, minus perspiciatis?</p>
            <div className='flex items-center gap-1'>
                <button className='bg-blue-600 text-white px-4 py-1 rounded-4xl cursor-pointer'>{props.tag}</button>
                <button className=' bg-blue-600 text-white px-4 py-1 rounded-4xl'><ArrowRight size={20} /></button>
            </div>
        </div>
    )
}

export default RightCardContent