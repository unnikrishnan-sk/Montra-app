import firestore from "@react-native-firebase/firestore"
import { useState } from "react";

export const calculateExpense = async (selectedMonth) => {
    try {
        const expenses = await firestore().collection('Expenses').where('month', '==', selectedMonth).get();
        console.log(selectedMonth);
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
        const income = await firestore().collection('Income').where('month', '==', selectedMonth).get();
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

export const expenseArr = async () => {
    try {
        const expenseArray = await firestore().collection('Expenses').get();
        return expenseArray.docs.map(doc => doc.data());
    } catch (error) {
        console.log(error);
    }
}

export const latTransaction = async () => {
    const transactions = []
    try {
        const latestExpenseTrans = await firestore().collection('Expenses').orderBy('createdAt', 'desc').limit(3).get();
        const latestIncomeTrans = await firestore().collection('Income').orderBy('createdAt', 'desc').limit(3).get();
        latestExpenseTrans.forEach(doc => { transactions.push({ ...doc.data(), id: doc.id, type: 'expense' }) })
        latestIncomeTrans.forEach(doc => { transactions.push({ ...doc.data(), id: doc.id, type: 'expense' }) })
        transactions.sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate());
        return transactions;
    } catch (error) {
        console.log(error);
    }
}

export const renderTansData = (btnVal) => {
    console.log("btn value", btnVal);
    const startDay = new Date();
    // if(btnVal===0){

    // }
}


