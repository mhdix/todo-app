import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AllTodos from './components/Todos/AllTodos'
function App() {
  const [todos , setTodos] = useState([])
  return (
    <>
      <Header todos={todos}/>
      <div className='main-content'>
        <AllTodos todos={todos} setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
