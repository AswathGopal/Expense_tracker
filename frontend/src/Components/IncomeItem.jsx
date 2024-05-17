import React from 'react';
import { dateFormat } from '../Utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../Utils/Icons';
import Button from '../Components/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () => {
        switch (category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <div className="bg-FCF6F9 border-2 border-white shadow-lg rounded-xl p-4 mb-4 flex items-center gap-4 w-full text-gray-900">
            <div className="w-20 h-20 rounded-lg bg-F5F5F5 border-2 border-white flex items-center justify-center">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="flex-1">
                <h5 className="text-lg font-semibold relative">
                    {title}
                    <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-${indicatorColor}`}></span>
                </h5>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <p className="flex items-center gap-1">
                            {dollar}
                            {amount}
                        </p>
                        <p className="flex items-center gap-1">
                            {calender}
                            {dateFormat(date)}
                        </p>
                        <p className="flex items-center gap-1">
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div>
                        <Button
                            icon={trash}
                            bPad={'py-2 px-6'}
                            bRad={'rounded-full'}
                            bg={'bg-primary-color'}
                            color={'text-white'}
                            iColor={'text-white'}
                            hColor={'hover:bg-color-green'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeItem;
