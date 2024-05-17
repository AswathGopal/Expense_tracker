import React, { useEffect } from 'react';
import { useGlobalContext } from '../Context/globalContext';
import { InnerLayout } from '../Layouts/Layouts';
import Form from '../Components/Form';
import IncomeItem from '../Components/IncomeItem';

function Income() {
    const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();
    useEffect(() => {
        getIncomes();
    }, []);

    return (
        <div className="overflow-auto">
            <InnerLayout>
                <h1 className="text-3xl">Incomes</h1>
                <h2 className="total-income bg-FCF6F9 border-2 border-white shadow-md rounded-lg p-4 my-4 text-2xl flex items-center justify-center">
                    Total Income: <span className="text-green-600 text-3xl font-bold">${totalIncome()}</span>
                </h2>
                <div className="flex gap-8">
                    <div className="w-1/2">
                        <Form />
                    </div>
                    <div className="flex-1">
                        {incomes.map((income) => {
                            const { id, title, amount, date, category, description, type } = income;
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
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </div>
    )
}

export default Income;
