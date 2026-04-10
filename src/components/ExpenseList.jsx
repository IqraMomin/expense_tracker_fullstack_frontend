import React from 'react'
import { ExpenseContext } from '../context/expenseContext';
import { useContext } from 'react';

function ExpenseList() {
    const expenseCtx = useContext(ExpenseContext);

    const editExpenseHandler = (expense)=>{
        expenseCtx.isEditHandler(expense);
    }
    const deleteExpenseHandler = (id)=>{
        expenseCtx.deleteExpense(id);
    }
    
    return (
        <ul>
            {expenseCtx.expenses.map(ele=>{
                return <li key={ele.amount}>
                    {ele.description}
                    <button onClick={()=>{editExpenseHandler(ele)}}>Edit</button>
                    <button onClick={()=>{deleteExpenseHandler(ele.id)}}>Delete</button>
                </li>
            })}
        </ul>
    )
}

export default ExpenseList
