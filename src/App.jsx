import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'

function App() {

  return (
    <>
      <ExpenseForm/>
      <ExpenseList/>
    </>
  )
}

export default App
