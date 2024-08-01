import { arrow_right, bank_of_america, bca_bank, camera_icon, chase_bank, citi_bank, doc_icon, expense_icon, food_icon, gallery_icon, income_icon, jago_bank, mandiri_bank, onboarding_1, onboarding_2, onboarding_3, pass_icon, paypal_bank, shopping_icon, subscription_icon } from "../assets";

export const onboardData = [{ id: 0, image: onboarding_1, heading: "Gain total control of your money", desc: "Become your own money manager and make every cent count" }, { id: 1, image: onboarding_2, heading: "Know where your money goes", desc: "Track your transaction easily, with categories and financial report" }, { id: 2, image: onboarding_3, heading: "Planning ahead", desc: "Setup your budget for each category so you in control" }]

export const signupDetails = [{ id: 0, placeholder: 'Name', value: 'name', nextRef: 'email', passwordSecure: false }, { id: 1, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 2, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]

export const loginDetails = [{ id: 0, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 1, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]

export const monthData = [{ id: 0, name: "January", value: "jan" }, { id: 1, name: "February", value: "feb" }, { id: 2, name: "March", value: "mar" }, { id: 3, name: "April", value: "apr" }, { id: 4, name: "May", value: "may" }, { id: 5, name: "June", value: "jun" }, { id: 6, name: "July", value: "jul" }, { id: 7, name: "August", value: "aug" }, { id: 8, name: "September", value: "sep" }, { id: 9, name: "October", value: "oct" }, { id: 10, name: "November", value: "nov" }, { id: 11, name: "December", value: "dec" }]

export const incomeExpenseData = [{ id: 0, image: income_icon, title: 'Income', amount: '5000' }, { id: 1, image: expense_icon, title: 'Expenses', amount: '1200' }]

export const chartData = [{ value: 30 }, { value: 35 }, { value: 20 }, { value: 50 }, { value: 40 }, { value: 79 }, { value: 82 }, { value: 35 }, { value: 30 }]

export const dataTimeframe = [{ id: 0, title: 'Today' }, { id: 1, title: 'Week' }, { id: 2, title: 'Month' }, { id: 3, title: 'Year' }]

export const recentTransactionData = [{ id: 0, image: shopping_icon, title: "Shopping", dec: 'Buy some grocery', amount: '120', time: '10:00 AM' }, { id: 1, image: subscription_icon, title: "Subscription", dec: 'Disney + Annual...', amount: '80', time: '03:30 PM' }, { id: 2, image: food_icon, title: "Food", dec: 'Buy a ramen', amount: '32', time: '07:30 PM' }]

export const notificationData = [{ id: 0, title: "Shopping budget has exceeds the limit", desc: "Your shopping budget has exceeds the limit of monthly expense", time: "19:30" }, { id: 1, title: "Utilities budget has exceeds the limit", desc: "Your Utilities budget has exceeds the limit of monthly expense", time: "19:30" }]

export const expenseCategoryType = [{ id: 0, name: "Shopping", value: "shopping" }, { id: 1, name: "Subscription", value: "subscription" }, { id: 2, name: "Food", value: "food" }, { id: 3, name: "Transportation", value: "transportation" }]

export const incomeCategoryType = [{ id: 0, name: "Salary", value: "salary" }, { id: 1, name: "Passive Income", value: "passiveIncome" }]

export const walletType = [{ id: 0, name: "Wallet", value: "wallet" }, { id: 1, name: "Chase", value: "chase" }, { id: 2, name: "Citi", value: "citi" }, { id: 3, name: "Paypal", value: "paypal" }]

export const accountType = [{ id: 0, name: "Bank", value: "bank" }, { id: 1, name: "Credit Card", value: "creditCard" }, { id: 2, name: "Wallet", value: "wallet" }]

export const BankData = [{ id: 0, name: "Chase", logo: chase_bank }, { id: 1, name: "Paypal", logo: paypal_bank }, { id: 2, name: "citi", logo: citi_bank }, { id: 3, name: "Bank Of America", logo: bank_of_america }, { id: 4, name: "Jago", logo: jago_bank }, { id: 5, name: "Mandiri", logo: mandiri_bank }, { id: 6, name: "BCA", logo: bca_bank }, { id: 7, name: "See Other", text: "See Other" }]

export const resetPass = [{ id: 0, placeholder: 'New Password', value: 'NewPass' }, { id: 1, placeholder: 'Retype new password', value: 'RetypePass' }]

export const keyboard = [{ id: 0, type: "Number", value: 1 }, { id: 1, type: "Number", value: 2 }, { id: 2, type: "Number", value: 3 }, { id: 3, type: "Number", value: 4 }, { id: 4, type: "Number", value: 5 }, { id: 5, type: "Number", value: 6 }, { id: 6, type: "Number", value: 7 }, { id: 7, type: "Number", value: 8 }, { id: 8, type: "Number", value: 9 }, { id: 9, type: "Number", value: "" }, { id: 10, type: "Number", value: 0 }, { id: 11, type: "Image", image: arrow_right }]

export const imageDetails = [{ id: 0, title: "Camera", logo: camera_icon }, { id: 1, title: "Image", logo: gallery_icon }, { id: 2, title: "Document", logo: doc_icon }]

export const expenseDetails = [{ id: 0, placeholder: 'Description', value: 'description' }]

export const frequencyDetails = [{ id: 0, name: 'Yearly', value: 'yearly' }, { id: 1, name: 'Monthly', value: 'monthly' }]

export const endAfterDetails = [{}]

// export const monthsDetails = [{id:0, name: 'January', value: 'Jan'}, {id:0, name: 'February', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}, {id:0, name: 'December', value: 'Dec'}]