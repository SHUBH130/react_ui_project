import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1661983229178-0cbc8090aa71?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi reprehenderit ducimus sdgf myiky pariatur modi illum!',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661722205238-f93e45a22c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi reprehenderit ducimus sdgf myiky pariatur modi illum!',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1683140795001-4ac0a2d31f08?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi reprehenderit ducimus sdgf myiky pariatur modi illum!',
      tag: 'Underbanked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661663327020-32f583846094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi reprehenderit ducimus sdgf myiky pariatur modi illum!',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1723538428285-7a41d25d470a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sequi reprehenderit ducimus sdgf myiky pariatur modi illum!',
      tag: 'Underbanked'
    },
  ]
  
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
