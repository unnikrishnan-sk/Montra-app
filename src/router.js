import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LaunchScreen from './screens/LaunchScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import SignupScreen from './screens/SignupScreen';
import VerificationScreen from './screens/VerificationScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPassword from './screens/ForgotPassword';
import PasswordEmail from './screens/PasswordEmail';
import ResetPassword from './screens/ResetPassword';
import SetupPin from './screens/SetupPin';
import SetupAccount from './screens/SetupAccount';
import AddAccount from './screens/AddAccount';
import SignupSuccess from './screens/SignupSuccess';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import IncomeScreen from './screens/IncomeScreen';
import ExpenseScreen from './screens/ExpenseScreen';
import TransferScreen from './screens/TransferScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from './screens/TransactionScreen';
import DetailExpenseScreen from './screens/DetailExpenseScreen';
import BudgetScreen from './screens/BudgetScreen';
import FinancialReport from './screens/FinancialReport';
import DetailFinancialReport from './screens/DetailFinancialReport';
import CreateBudget from './screens/CreateBudget';
import DetailBudgetScreen from './screens/DetailBudgetScreen';
import ProfileScreen from './screens/ProfileScreen';
import AccountScreen from './screens/AccountScreen';
import DetailAccountScreen from './screens/DetailAccountScreen';
import SettingScreen from './screens/SettingScreen';
import ThemeScreen from './screens/ThemeScreen';
import CurrencyScreen from './screens/CurrencyScreen';
import LanguageScreen from './screens/LanguageScreen';
import SecurityScreen from './screens/SecurityScreen';
import MyTabBar from './components/MyTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="transaction" component={TransactionScreen} options={{ headerShown: false }} />
            <Tab.Screen name="budget" component={BudgetScreen} options={{ headerShown: false }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='launch' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='launch' component={LaunchScreen} />
                <Stack.Screen name='onboard' component={OnboardingScreen} />
                <Stack.Screen name='signup' component={SignupScreen} />
                <Stack.Screen name='verification' component={VerificationScreen} />
                <Stack.Screen name='login' component={LoginScreen} />
                <Stack.Screen name='forgotpass' component={ForgotPassword} />
                <Stack.Screen name='emailpass' component={PasswordEmail} />
                <Stack.Screen name='resetpass' component={ResetPassword} />
                <Stack.Screen name='pin' component={SetupPin} />
                <Stack.Screen name='setupaccount' component={SetupAccount} />
                <Stack.Screen name='addaccount' component={AddAccount} />
                <Stack.Screen name='signsuccess' component={SignupSuccess} />
                <Stack.Screen name='myTabs' component={MyTabs} />
                <Stack.Screen name='notification' component={NotificationScreen} />
                <Stack.Screen name='income' component={IncomeScreen} />
                <Stack.Screen name='expense' component={ExpenseScreen} />
                <Stack.Screen name='transfer' component={TransferScreen} />
                <Stack.Screen name='detailtransaction' component={DetailExpenseScreen} />
                <Stack.Screen name='financialreport' component={FinancialReport} />
                <Stack.Screen name='detailfinancialreport' component={DetailFinancialReport} />
                <Stack.Screen name='createbudget' component={CreateBudget} />
                <Stack.Screen name='detailbudget' component={DetailBudgetScreen} />
                <Stack.Screen name='account' component={AccountScreen} />
                <Stack.Screen name='detailaccount' component={DetailAccountScreen} />
                <Stack.Screen name='settings' component={SettingScreen} />
                <Stack.Screen name='theme' component={ThemeScreen} />
                <Stack.Screen name='currency' component={CurrencyScreen} />
                <Stack.Screen name='language' component={LanguageScreen} />
                <Stack.Screen name='security' component={SecurityScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router