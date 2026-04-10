import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {

  return (
    <>
      <ExpenseForm/>
      <ExpenseList/>
    </>
  )
}

export default App
