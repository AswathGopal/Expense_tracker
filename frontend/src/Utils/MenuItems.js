import {dashboard, expenses, trend} from '../Utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "Incomes",
        icon: trend,
        link: "/income",
    },
    {
        id: 3,
        title: "Expenses",
        icon: expenses,
        link: "/expense",
    },
]