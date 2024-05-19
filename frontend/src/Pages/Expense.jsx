import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context/globalContext';
import { InnerLayout } from '../Layouts/Layouts';
import IncomeItem from '../Components/IncomeItem';
import ExpenseForm from '../Components/ExpenseForm';

function Expenses() {
    const { expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() => {
        getExpenses()
    }, [])

    return (
        <div className="flex overflow-auto">
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="flex justify-center items-center bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4 my-4 text-2xl gap-2">
                    Total Expense: <span className="text-3xl font-bold text-green-600">${totalExpenses()}</span>
                </h2>
                <div className="flex gap-8">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="flex-1">
                        {expenses.map((income) => {
                            const {id, title, amount, date, category, description, type} = income;
                            console.log(income)
                            return <IncomeItem
                                key={id}
                                id={id}
                                title={title}
                                description={description}
                                amount={amount}
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}

export default Expenses
