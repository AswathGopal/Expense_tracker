import React from 'react'
import { Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../Context/globalContext'
import { dateFormat } from '../Utils/dateFormat'
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map(income => income.amount),
                backgroundColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: expenses.map(expense => expense.amount),
                backgroundColor: 'red',
                tension: 0.2
            }
        ]
    }

    return (
        <div className="bg-pink-100 border-2 border-white shadow-md p-4 rounded-2xl ">
            <Line data={data} />
        </div>
    )
}

export default Chart
