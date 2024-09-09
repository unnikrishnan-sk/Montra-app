import firestore, { getFirestore, query } from "@react-native-firebase/firestore"
import { useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const calculateExpense = async (selectedMonth) => {
    try {
        const expenses = await firestore().collection('Expenses').where('createdMonth', '==', selectedMonth).get();
        // console.log(selectedMonth);
        const expensesDet = expenses.docs.reduce((sum, doc) => {
            const data = doc.data()
            const amount = parseFloat(data.amount)
            return sum + amount;
        }, 0)
        // console.log(expensesDet);
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
        // console.log("category here", category);
        const expenseSnapshot = await firestore().collection('Expenses').where('category', '==', category).get();
        console.log("expense Snapshot", expenseSnapshot);
        const expenses = expenseSnapshot.docs.map(doc => doc.data());
        // console.log("expenses here", expenses);
        const totalExpense = expenses.reduce((total, expense) => total + (Number(expense.amount) || 0), 0);
        return totalExpense;
    } catch (error) {
        console.log("Error fetching expenses", error);
    }
}

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
    console.log("btn value", btnVal);

    if (btnVal === 0) {
        // console.log("here");
        const nowDate = new Date();
        const startDay = new Date(nowDate.setHours(0, 0, 0));
        const endOfDay = new Date(nowDate.setHours(23, 59, 59, 999))
        const db = getFirestore();
        console.log("db", db);
        const eventsCollection = collection(db, "Expenses")
        console.log("eventsCollection", eventsCollection);

        const q = query(eventsCollection, where("timestamp", ">=", startDay), where("timestamp", "<=", endOfDay)
        );

        try {
            const querySnapshot = await getDocs(q);
            console.log("querysnapshot", querySnapshot);
            const daysTransaction = querySnapshot.docs.map(doc => doc.data());
            console.log("today", daysTransaction);
        } catch (error) {

        }

    }
}


