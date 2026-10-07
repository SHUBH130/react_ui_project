import React from 'react'
import { RiArrowRightLine } from '@remixicon/react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-gray-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-2xl'>{props.id+1}</h2>
            <div>
                <p className='text-xl font-bold mb-10 leading-normal text-white'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className='bg-gray-600 text-white rounded-full px-6 py-2 font-semibold text-l'>{props.tag}</button>
                    <button className='bg-gray-600 text-white rounded-full h-12 w-12 font-semibold text-l flex flex-col items-center justify-center'><RiArrowRightLine /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent