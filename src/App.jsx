import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
function App() {
  const [todos , setTodos] = useState([])
  return (
    <>
      <Header todos={todos}/>
    </>
  )
}

export default App
