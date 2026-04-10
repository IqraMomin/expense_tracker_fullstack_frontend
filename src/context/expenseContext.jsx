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

    return (
        <ExpenseContext.Provider value={{expenses,isEdit,isEditHandler,addExpense}}>
            {children}
            </ExpenseContext.Provider>
    )

}