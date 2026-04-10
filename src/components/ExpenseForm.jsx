import React, { useState } from 'react'

function ExpenseForm() {
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        const data = {amount,date,type,description}
        console.log(data);
    }

    const resetForm = ()=>{
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
                    <button type='submit'>Add Expense</button>
                </div>


            </form>

        </div>
    )
}

export default ExpenseForm
