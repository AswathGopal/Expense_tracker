import React,{useContext,useState} from "react";
import axios from 'axios'


const BASE_URL="http://localhost:8000/auth"

const GlobalContext = React.createContext()

export const GlobalProvider =({children})=>{
    const[incomes,setIncomes] = useState([]);
    const[expenses,setExpenses] = useState([]);
    const[error,setError] = useState(null);

// incomes
const addIncome =async(income)=>{
  const response = await axios.post('${BASE_URL}/add-income',income)
  .catch((err)=>{
    setError(err.response.data.message)
  })
  getIncomes()
}

const getIncomes = async()=>{
    const response = await axios.get('${BASE_URL}/get-income')
    setIncomes(response.data)
}

const deleteIncome = async(id) =>{
    const response = await axios.delete('${BASE_URL}/delete-income/${id')
    getIncomes()
}

const totalIncome = ()=>{
    let totalIncome =0;
    incomes.forEach((income)=>{
        totalIncome=totalIncome+ income.amont
    })

    return totalIncome;
}
const addExpense = async (income) => {
    const response = await axios.post(`${BASE_URL}add-expense`, income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
    getExpenses()
}

const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`)
    setExpenses(response.data)
    console.log(response.data)
}

const deleteExpense = async (id) => {
    const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses()
}

const totalExpenses = () => {
    let totalExpense = 0;
    expenses.forEach((income) =>{
        totalExpense = totalExpense + income.amount
    })

    return totalExpense;
}

const totalBalance = () => {
    return totalIncome() - totalExpenses()
}

 

return(
    <GlobalContext.Provider value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        error,
        setError
    }}>{children}</GlobalContext.Provider>
)
}
export const useGlobalContext =()=>{
    return useContext(GlobalContext)
}