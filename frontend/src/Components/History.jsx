import React from 'react'
import { useGlobalContext } from '../Context/globalContext';

function History() {
    const { transactionHistory } = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <div className="flex flex-col gap-4">
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item
                return (
                    <div key={_id} className="bg-pink-100 border-2 border-white shadow-md p-4 rounded-2xl flex justify-between items-center">
                        <p className={type === 'expense' ? 'text-red-500' : 'text-green-600'}>
                            {title}
                        </p>

                        <p className={type === 'expense' ? 'text-red-500' : 'text-green-600'}>
                            {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default History
