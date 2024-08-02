import firestore from "@react-native-firebase/firestore"
import { useState } from "react";


// const income = await firestore().collection('Income').get();

export const calculateExpense = async (selectedMonth) => {
    try {
        // const expenses = await firestore().collection('Expenses').get();
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


