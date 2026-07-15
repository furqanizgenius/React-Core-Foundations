import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-16 py-8'>
            <h4 className='bg-black text-white px-5 py-2 uppercase rounded-full'>Target Audience</h4>
            <button className='bg-gray-200 px-4 py-2 font-semibold rounded-full tracking-wider'>Digital Banking Platform</button>
        </div>
    )
}

export default Navbar