import React, { useContext, useEffect, useState } from 'react'
import { ExpenseContext } from '../context/expenseContext';

function ExpenseForm() {
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const expenseCtx = useContext(ExpenseContext);
    const isEdit = expenseCtx.isEdit;

    useEffect(() => {
        if (isEdit) {
            const formattedDate = new Date(isEdit.date)
                .toISOString()
                .split('T')[0];

            setDate(formattedDate);
            setAmount(isEdit.amount || "");
            setDate(isEdit.date || "");
            setDescription(isEdit.description || "");
            setType(formattedDate || "");
        } else {
            resetForm();
        }
    }, [isEdit])

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const expense = { amount, date, type, description }

        if (isEdit) {
            expenseCtx.updateExpense(isEdit.id, expense);
            expenseCtx.isEditHandler(null);
        } else {
            expenseCtx.addExpense(expense);
        }
        resetForm();
    }

    const resetForm = () => {
        setAmount("");
        setDate("");
        setDescription("");
        setType("");
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor='amount'>Expense Amount : </label>
                    <input id='amount' value={amount} onChange={(e) => { setAmount(e.target.value) }} type='number' />
                </div>
                <div>
                    <label htmlFor='description'>Description : </label>
                    <input id='' value={description} onChange={(e) => { setDescription(e.target.value) }} type='text' />
                </div>
                <div>
                    <label htmlFor='type'>Expense Type : </label>
                    <select name='expense' value={type} onChange={(e) => { setType(e.target.value) }}>
                        <option value="groceries">Groceries</option>
                        <option value="travel">Travel</option>
                        <option value="utilities">Utilities</option>
                        <option value="health">Health</option>
                    </select>

                </div>
                <div>
                    <label htmlFor='date'>Expense Date : </label>
                    <input id='date' value={date} onChange={(e) => { setDate(e.target.value) }} type='date' />
                </div>
                <div>
                    <button type='submit'>{isEdit ? "Edit Expense" : "Add Expense"}</button>
                </div>


            </form>

        </div>
    )
}

export default ExpenseForm
