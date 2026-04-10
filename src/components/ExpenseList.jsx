import React from 'react'
import { ExpenseContext } from '../context/expenseContext';
import { useContext } from 'react';

function ExpenseList() {
    const expenseCtx = useContext(ExpenseContext);
    
    return (
        <ul>
            {expenseCtx.expenses.map(ele=>{
                return <li key={ele.amount}>
                    {ele.description}
                </li>
            })}
        </ul>
    )
}

export default ExpenseList
