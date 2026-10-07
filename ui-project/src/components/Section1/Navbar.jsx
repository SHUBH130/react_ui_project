import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16 py-8'>
        <h3 className='bg-black text-white rounded-full px-6 py-2 uppercase font-semibold'>Target Audience</h3>
        <button className='bg-gray-600 text-white rounded-full px-6 py-2 uppercase tracking-wider font-semibold'>Digital Banking Platform</button>
    </div>
    )
}

export default Navbar