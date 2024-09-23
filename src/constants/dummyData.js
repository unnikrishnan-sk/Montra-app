import { account_wallet, arrow_right, bank_of_america, bca_bank, budget_tab, camera_icon, chase_bank, citi_bank, doc_icon, expense_icon, food_icon, gallery_icon, home_icon, income_general_icon, income_icon, jago_bank, logout_icon, mandiri_bank, onboarding_1, onboarding_2, onboarding_3, pass_icon, paypal_bank, plus_icon_tab, profile_tab, scanned_image, settings_icon, shopping_icon, subscription_icon, transaction_tab, transportation_general_icon, upload_icon, wallet_icon } from "../assets";

export const onboardData = [{ id: 0, image: onboarding_1, heading: "Gain total control of your money", desc: "Become your own money manager and make every cent count" }, { id: 1, image: onboarding_2, heading: "Know where your money goes", desc: "Track your transaction easily, with categories and financial report" }, { id: 2, image: onboarding_3, heading: "Planning ahead", desc: "Setup your budget for each category so you in control" }]

export const signupDetails = [{ id: 0, placeholder: 'Name', value: 'name', nextRef: 'email', passwordSecure: false }, { id: 1, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 2, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]

export const loginDetails = [{ id: 0, placeholder: 'Email', value: 'email', nextRef: 'password', passwordSecure: false }, { id: 1, placeholder: 'Password', value: 'password', passwordSecure: true, passIcon: pass_icon }]

export const monthData = [{ id: 0, name: "January", value: "January" }, { id: 1, name: "February", value: "February" }, { id: 2, name: "March", value: "March" }, { id: 3, name: "April", value: "April" }, { id: 4, name: "May", value: "May" }, { id: 5, name: "June", value: "June" }, { id: 6, name: "July", value: "July" }, { id: 7, name: "August", value: "August" }, { id: 8, name: "September", value: "September" }, { id: 9, name: "October", value: "October" }, { id: 10, name: "November", value: "November" }, { id: 11, name: "December", value: "December" }]

export const incomeExpenseData = [{ id: 0, image: income_icon, title: 'Income', amount: '5000' }, { id: 1, image: expense_icon, title: 'Expenses', amount: '1200' }]

export const chartData = [{ "value": 30 }, { "value": 35 }, { "value": 25 }, { "value": 50 }, { "value": 40 }, { "value": 79 }, { "value": 82 }, { "value": 35 }, { 'value': 30 }]

export const pieChartData = [{ value: 30 }, { value: 40 }, { value: 80 }]

export const noExpMnthChartData = [{ "value": 0 }, { "value": 0 }, { "value": 0 }]

export const dataTimeframe = [{ id: 0, title: 'Today' }, { id: 1, title: 'Week' }, { id: 2, title: 'Month' }, { id: 3, title: 'Year' }]

export const recentTransactionData = [{ id: 0, image: shopping_icon, title: "Shopping", dec: 'Buy some grocery', amount: '120', time: '10:00 AM' }, { id: 1, image: subscription_icon, title: "Subscription", dec: 'Disney + Annual...', amount: '80', time: '03:30 PM' }, { id: 2, image: food_icon, title: "Food", dec: 'Buy a ramen', amount: '32', time: '07:30 PM' }]

export const allTransactionData = [{ id: 0, image: shopping_icon, category: "Shopping", description: 'Buy some grocery', amount: '120', time: '10:00 AM' }, { id: 1, image: subscription_icon, category: "Subscription", description: 'Disney + Annual...', amount: '80', time: '03:30 PM' }, { id: 2, image: food_icon, category: "Food", description: 'Buy a ramen', amount: '32', time: '07:30 PM' }, { id: 3, image: income_general_icon, category: 'Salary', description: 'Salary for July', amount: '5000', time: '04:30 PM' }, { id: 4, image: transportation_general_icon, category: 'Transportation', description: 'Charging Tesla', amount: '18', time: '08:30 PM' }]

export const notificationData = [{ id: 0, title: "Shopping budget has exceeds the limit", desc: "Your shopping budget has exceeds the limit of monthly expense", time: "19:30" }, { id: 1, title: "Utilities budget has exceeds the limit", desc: "Your Utilities budget has exceeds the limit of monthly expense", time: "19:30" }]

export const expenseCategoryType = [{ id: 0, name: "Shopping", value: "Shopping" }, { id: 1, name: "Subscription", value: "Subscription" }, { id: 2, name: "Food", value: "Food" }, { id: 3, name: "Transportation", value: "Transportation" }]

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

export const monthsDetails = [{ id: 0, name: 'Jan', value: 'January' }, { id: 0, name: 'Feb', value: 'February' }, { id: 0, name: 'Mar', value: 'March' }, { id: 0, name: 'Apr', value: 'April' }, { id: 0, name: 'May', value: 'May' }, { id: 0, name: 'Jun', value: 'June' }, { id: 0, name: 'July', value: 'July' }, { id: 0, name: 'Aug', value: 'August' }, { id: 0, name: 'Sep', value: 'September' }, { id: 0, name: 'Oct', value: 'October' }, { id: 0, name: 'Nov', value: 'November' }, { id: 0, name: 'Dec', value: 'December' }]

export const accountData = [{ id: 0, icon: wallet_icon, name: "Wallet", amount: '$400', }, { id: 1, icon: chase_bank, name: 'Chase', amount: '$1000' }, { id: 2, icon: citi_bank, name: 'Citi', amount: '$6000' }, { id: 3, icon: paypal_bank, name: 'Paypal', amount: '$2000' }]

export const forgotPasswordDetails = { id: 0, placeholder: 'Email', value: 'email', passwordSecure: false };

export const profileDatas = [{ id: 0, icon: account_wallet, name: 'Account', route: 'account' }, { id: 1, icon: settings_icon, name: 'Settings', route: 'settings' }, { id: 2, icon: upload_icon, name: 'Export Data' }, { id: 3, icon: logout_icon, name: 'Logout' }]

export const budgetData = [{ id: 0, category: 'Shopping', amountSpent: '1200', totalBudget: '1000', isLimitExceeded: true }, { id: 1, category: 'Transportation', amountSpent: '350', totalBudget: '700', isLimitExceeded: false }]

export const settingsData = [{ id: 0, name: "Currency", type: "USD", route: 'currency' }, { id: 1, name: "Language", type: "English", route: 'language' }, { id: 2, name: "Theme", type: "Light", route: 'theme' }, { id: 3, name: "Security", type: " Fingerprint", route: 'security' }, { id: 4, name: "Notification", route: 'notification' }, { id: 5, name: "About" }, { id: 6, name: "Help" }]

export const filterData = [{ id: 0, name: 'Income' }, { id: 1, name: 'Expense' }, { id: 2, name: 'Transfer' }]

export const sortData = [{ id: 0, name: 'Highest' }, { id: 1, name: 'Lowest' }, { id: 2, name: 'Newest' }, { id: 3, name: 'Oldest' }]

export const budgetFinData = [{ title: 'Shopping', icon: shopping_icon }, { title: 'Food', icon: food_icon }]

export const financialData = [{ financialType: 'quote', quote: 'Financial freedom is freedom from fear', author: 'Robert Kiyosaki' }]

export const values = { "expense": "expense", "income": "income", "budget": "budget", "quote": "quote" }

export const repeatDetails = [{ id: 0, name: "Frequency" }, { id: 1, name: "End After" }]

export const tabBarData = [{ id: 0, logo: home_icon, title: "Home", route: "home" }, { id: 1, logo: transaction_tab, title: "Transaction", route: "transaction" }, { id: 2, logo: plus_icon_tab }, { id: 3, logo: budget_tab, title: "Budget", route: "budget" }, { id: 4, logo: profile_tab, title: "Profile", route: "profile" }]

export const detailedTrans = [{
    id: 0, transactionType: 'Transfer', amount: '$2000', description: '', date: 'Saturday 4 June 2021  16:20', transactionDet: [{ name: 'Type', value: 'Transfer' }, { name: 'From', value: 'Paypal' }, { name: 'To', value: 'Chase' }], detailDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.', attachment: scanned_image
}]

export const allTransactionDet = [{ id: 0, name: 'Type', value: 'Expense' }, { id: 1, name: 'Category', value: 'Shopping' }, { id: 2, name: 'Wallet', value: 'Wallet' }]


