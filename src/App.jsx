import { useContext, useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import { ExpenseContext } from './context/expenseContext'

function App() {
  const expenseCtx = useContext(ExpenseContext);

  useEffect(()=>{
    expenseCtx.getAllExpenses();
  },[])

  return (
    <>
      <ExpenseForm/>
      <ExpenseList/>
    </>
  )
}

export default App
