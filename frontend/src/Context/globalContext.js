import React,{useContext,useState} from "react";
import axios from 'axios'
import Cookies from 'js-cookie';

const BASE_URL="http://localhost:8000/auth"
const GlobalContext = React.createContext()

export const GlobalProvider =({children})=>{
    const[incomes,setIncomes] = useState([]);
    const[expenses,setExpenses] = useState([]);
    const[error,setError] = useState(null);

// incomes
const addIncome =async(income)=>{
  const response = await axios.post(`${BASE_URL}/add-income`,{"income":income,"token":Cookies.get('token')})
  .catch((err)=>{
    setError(err.response.data.message)
  })
  getIncomes()
}

const getIncomes = async()=>{
    const response = await axios.get(`${BASE_URL}/get-income`)
    console.log(response.data);
    setIncomes(response.data)
}

const deleteIncome = async(id) =>{
    const response = await axios.delete(`${BASE_URL}/delete-income/${id}`,
    {
        headers: {
            'Authorization': Cookies.get('token')
        }
    }
    )
    getIncomes()
}

const totalIncome = ()=>{
    let totalIncome =0;
    incomes.forEach((income)=>{
        totalIncome=totalIncome+ parseInt(income.amount);
    })

    return totalIncome;
}
const addExpense = async (expense) => {
    const response = await axios.post(`${BASE_URL}/add-expense`, {"expense":expense,"token":Cookies.get('token')})
        .catch((err) =>{
            setError(err.response.data.message)
        })
    getExpenses()
}

const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}/get-expense`)
    setExpenses(response.data)
    console.log(response.data)
}

const deleteExpense = async (id) => {
    const res  = await axios.delete(`${BASE_URL}/delete-expense/${id}`,
    {
        headers: {
            'Authorization': Cookies.get('token')
        }
    }
    )
    getExpenses()
}

const totalExpenses = () => {
    let totalExpense = 0;
    expenses.forEach((income) =>{
        totalExpense = totalExpense + parseInt(income.amount);
    })

    return totalExpense;
}

const totalBalance = () => {
    return totalIncome() - totalExpenses()
}

const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0, 3)
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
        setError,
        transactionHistory
    }}>{children}</GlobalContext.Provider>
)
}
export const useGlobalContext =()=>{
    return useContext(GlobalContext)
}