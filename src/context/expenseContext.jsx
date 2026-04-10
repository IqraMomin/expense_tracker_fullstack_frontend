import { createContext, useState } from "react";
import axios from "axios";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({children})=>{
    const [expenses,setExpenses] = useState([]);
    const [isEdit,setIsEdit] = useState(null);

    const isEditHandler = (expense)=>{
        setIsEdit(expense);
    }
    const addExpense = async(expense)=>{
        try{
            const res = await axios.post(`http://localhost:3000/expenses/addExpense`,expense);
            console.log(res.data);
            setExpenses(prev=>[...prev,expense]);
        }
        catch(err){
            console.log(err);
        }
        
    }

    const deleteExpense =async (id)=>{
        try{
            const res = await axios.delete(`http://localhost:3000/expenses/deleteExpense/${id}`);
            console.log(res.data);
            setExpenses(prev=>prev.filter(ele=>ele.id!==id));
        }
        catch(err){
            console.log(err);
        }
    }

    const getAllExpenses = async()=>{
        try{
            const res = await axios.get(`http://localhost:3000/expenses/`);
            console.log(res.data);
            setExpenses(res.data);
        }
        catch(err){
            console.log(err);
        }
    }

    const updateExpense = async(id,expense)=>{
        try{
            const res = await axios.put(`http://localhost:3000/expenses/updateExpense/${id}`,expense);
            console.log(res.data);
            setExpenses(prev=>prev.map(ele=>ele.id===id ? {...expense,id}:ele));
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <ExpenseContext.Provider value={{expenses,isEdit,isEditHandler,addExpense,deleteExpense,getAllExpenses,updateExpense}}>
            {children}
            </ExpenseContext.Provider>
    )

}