import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context/globalContext';
import History from '../Components/History';
import { InnerLayout } from '../Layouts/Layouts';
import { dollar } from '../Utils/Icons';
import Chart from '../Components/Chart';

function Dashboard() {
    const {totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <div className="p-8">
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-3 h-100">
                        <Chart />
                        <div className="grid grid-cols-4 gap-8 mt-8">
                            <div className="col-span-2 bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4">
                                <h2>Total Income</h2>
                                <p className="text-4xl font-bold">
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="col-span-2 bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4">
                                <h2>Total Expense</h2>
                                <p className="text-4xl font-bold">
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="col-span-2 col-start-2 bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4 flex flex-col justify-center items-center">
                                <h2>Total Balance</h2>
                                <p className="text-5xl font-bold text-green-600 opacity-60">
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <History />
                        <h2 className="my-4 flex justify-between items-center text-lg">
                            Min <span className="text-2xl">Salary</span>Max
                        </h2>
                        <div className="bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4 flex justify-between items-center">
                            <p className="text-xl font-semibold">
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p className="text-xl font-semibold">
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="my-4 flex justify-between items-center text-lg">
                            Min <span className="text-2xl">Expense</span>Max
                        </h2>
                        <div className="bg-pink-100 border-2 border-white shadow-md rounded-2xl p-4 flex justify-between items-center">
                            <p className="text-xl font-semibold">
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p className="text-xl font-semibold">
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}

export default Dashboard
