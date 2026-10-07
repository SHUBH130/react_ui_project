import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div  id='right' className='w-2/3 h-full flex flex-nowrap overflow-x-auto gap-10'>
        {props.users.map(function(elem, idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })}
    </div>
  )
}

export default RightContent