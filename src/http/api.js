import firestore, { getFirestore, query } from "@react-native-firebase/firestore"
import { useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const calculateExpense = async (selectedMonth) => {
    try {
        const expenses = await firestore().collection('Expenses').where('createdMonth', '==', selectedMonth).get();
        const expensesDet = expenses.docs.reduce((sum, doc) => {
            const data = doc.data()
            const amount = parseFloat(data.amount)
            return sum + amount;
        }, 0)
        return expensesDet
    } catch (error) {
        console.log(error);
    }
}

export const calculateIncome = async (selectedMonth) => {
    try {
        const income = await firestore().collection('Income').where('createdMonth', '==', selectedMonth).get();
        const incomeDet = income.docs.reduce((sum, doc) => {
            const data = doc.data()
            const amount = parseFloat(data.amount)
            return sum + amount;
        }, 0)
        return incomeDet
    } catch (error) {
        console.log(error)
    }
}

export const accountBal = async () => {
    try {
        const balAmount = await firestore().collection('Accounts').get();
        const balDetail = balAmount.docs.reduce((sum, doc) => {
            const data = doc.data()
            const amount = parseFloat(data.balance)
            return sum + amount;
        }, 0)
        return balDetail
    } catch (error) {
        console.log(error)
    }
}

export const getConstants = async () => {
    try {
        const constantList = await firestore().collection('Constants').get();
        return constantList;
    } catch (error) {
        console.log(error)
    }
}

export const expenseArr = async (selectedMonth) => {
    try {
        const expenseArray = await firestore().collection('Expenses').where('createdMonth', '==', selectedMonth).get();
        return expenseArray.docs.map(doc => doc.data());
    } catch (error) {
        console.log(error);
    }
}

export const allExpense = async () => {
    try {
        const expenseArray = await firestore().collection('Expenses').get();
        return expenseArray.docs.map(doc => doc.data());
    } catch (error) {
        console.log(error);
    }
}

export const allAccounts = async () => {
    try {
        const accountsArray = await firestore().collection('Accounts').get();
        return accountsArray.docs.map(doc => doc.data());
    } catch (error) {
        console.log(error);
    }
}

export const allIncome = async () => {
    try {
        const incomeArray = await firestore().collection('Income').get();
        return incomeArray.docs.map(doc => doc.data());
    } catch (error) {
        console.log(error);
    }
}

export const latTransaction = async () => {
    const transactions = []
    try {
        const latestExpenseTrans = await firestore().collection('Expenses').orderBy('createdAt', 'desc').get();
        const latestIncomeTrans = await firestore().collection('Income').orderBy('createdAt', 'desc').get();
        latestExpenseTrans.forEach(doc => { transactions.push({ ...doc.data(), id: doc.id, type: 'expense' }) })
        latestIncomeTrans.forEach(doc => { transactions.push({ ...doc.data(), id: doc.id, type: 'expense' }) })
        transactions.sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate());
        return transactions;
    } catch (error) {
        console.log(error);
    }
}

export const getBudgetData = async () => {

    try {
        const querySnapshot = await firestore().collection('Budget').get();
        const budgetData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return budgetData;

    } catch (error) {
        console.log("error fetching budget data", error);
        return [];
    }
}

export const getTotalExpenseForCategory = async (category) => {
    try {
        const expenseSnapshot = await firestore().collection('Expenses').where('category', '==', category).get();
        const expenses = expenseSnapshot.docs.map(doc => doc.data());
        const totalExpense = expenses.reduce((total, expense) => total + (Number(expense.amount) || 0), 0);
        return totalExpense;
    } catch (error) {
        console.log("Error fetching expenses", error);
    }
}

export const handleDeleteByFieldId = async (fieldIdValue) => {
    try {
        const querySnapshot = await firestore().collection('Budget').where('id', '==', fieldIdValue).get();

        // Loop through the matching documents and delete them
        querySnapshot.forEach(async (doc) => {
            await firestore().collection('Budget').doc(doc.id).delete();
        });

        if (querySnapshot.empty) {
            console.log("No matching documents found.");
        }

    } catch (error) {
        console.log("Error deleting document(s):", error);
    }
};

export const getAllBudgetData = async () => {
    try {
        const budgetData = await getBudgetData();
        // console.log("here", budgetData);
        const budgetDataWithExpenses = await Promise.all(
            budgetData.map(async (budget) => {
                const totalExpense = await getTotalExpenseForCategory(budget.budgetCat);
                return {
                    ...budget,
                    totalExpense,
                };
            })
        );
        return budgetDataWithExpenses;
    } catch (error) {
        console.log('Error combining budget data with expenses:', error);
        return [];
    }
};

export const renderTansData = async (btnVal) => {

    if (btnVal === 0) {
        const nowDate = new Date();
        const startDay = new Date(nowDate.setHours(0, 0, 0));
        const endOfDay = new Date(nowDate.setHours(23, 59, 59, 999))
        const db = getFirestore();
        const eventsCollection = collection(db, "Expenses")

        const q = query(eventsCollection, where("timestamp", ">=", startDay), where("timestamp", "<=", endOfDay)
        );

        try {
            const querySnapshot = await getDocs(q);
            const daysTransaction = querySnapshot.docs.map(doc => doc.data());
            console.log("today", daysTransaction);
        } catch (error) {
            console.log("Error in getting expenses :", error);
        }

    }
}



