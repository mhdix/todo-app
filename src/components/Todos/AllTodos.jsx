import React from 'react'
import './todos.css'
const AllTodos = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className='all-todos'>
      <div>
        <p>1</p>
        <h3>موضوع</h3>
        <p>شماره 1</p>
        <div className='example'>
          <h3>توضیحات</h3>
          <p>شماره 1</p>
        </div>
      </div>
    </div>
  )
}

export default AllTodos