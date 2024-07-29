import { expense_icon, food_icon, income_icon, onboarding_1, onboarding_2, onboarding_3, pass_icon, shopping_icon, subscription_icon } from "../assets";

export const onboardData = [{ id: 0, image: onboarding_1, heading: "Gain total control of your money", desc: "Become your own money manager and make every cent count" }, { id: 1, image: onboarding_2, heading: "Know where your money goes", desc: "Track your transaction easily, with categories and financial report" }, { id: 2, image: onboarding_3, heading: "Planning ahead", desc: "Setup your budget for each category so you in control" }]

export const signupDetails = [{ id: 0, placeholder: 'Name', value: 'name', nextRef: 'email', passwordSecure: false }, { id: 1, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 2, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]

export const loginDetails = [{ id: 0, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 1, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]

export const monthData = [{ id: 0, name: "January", value: "jan" }, { id: 1, name: "February", value: "feb" }, { id: 2, name: "March", value: "mar" }, { id: 3, name: "April", value: "apr" }, { id: 4, name: "May", value: "may" }, { id: 5, name: "June", value: "jun" }, { id: 6, name: "July", value: "jul" }, { id: 7, name: "August", value: "aug" }, { id: 8, name: "September", value: "sep" }, { id: 9, name: "October", value: "oct" }, { id: 10, name: "November", value: "nov" }, { id: 11, name: "December", value: "dec" }]

export const incomeExpenseData = [{ id: 0, image: income_icon, title: 'Income', amount: '5000' }, { id: 1, image: expense_icon, title: 'Expenses', amount: '1200' }]

export const chartData = [{ value: 30 }, { value: 35 }, { value: 20 }, { value: 50 }, { value: 40 }, { value: 79 }, { value: 82 }, { value: 35 }, { value: 30 }]

export const dataTimeframe = [{ id: 0, title: 'Today' }, { id: 1, title: 'Week' }, { id: 2, title: 'Month' }, { id: 3, title: 'Year' }]

export const recentTransactionData = [{ id: 0, image: shopping_icon, title: "Shopping", dec: 'Buy some grocery', amount: '120', time: '10:00 AM' }, { id: 1, image: subscription_icon, title: "Subscription", dec: 'Disney + Annual...', amount: '80', time: '03:30 PM' }, { id: 2, image: food_icon, title: "Food", dec: 'Buy a ramen', amount: '32', time: '07:30 PM' }]

export const notificationData = [
    { id: 0, title: "Shopping budget has exceeds the limit", desc: "Your shopping budget has exceeds the limit of monthly expense", time: "19:30" }, { id: 1, title: "Utilities budget has exceeds the limit", desc: "Your Utilities budget has exceeds the limit of monthly expense", time: "19:30" }
]