import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
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
import { expense_icon, expense_icon_white, home_icon, income_icon, income_icon_white, transfer_icon, transfer_icon_white } from './assets';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from './constants/dimension';
import { colorMix } from './constants/color';
import TransactionScreen from './screens/TransactionScreen';
import DetailExpenseScreen from './screens/DetailExpenseScreen';
import BudgetScreen from './screens/BudgetScreen';
import FinancialReport from './screens/FinancialReport';
import DetailFinancialReport from './screens/DetailFinancialReport';

const tabBarData = [{ id: 0, logo: home_icon, title: "Home", route: "home" }, { id: 1, logo: income_icon, title: "Income", route: "income" }, { id: 2, logo: expense_icon, title: "Expense", route: "expense" }, { id: 3, logo: transfer_icon, title: "Transfer", route: "transfer" }]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RenderTabBar = ({ data }) => {

    const { id, logo, title, route } = data;
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate(route)}
            style={{
                // borderWidth: 1,
                borderColor: colorMix.light_80,
                alignItems: 'center',
                // justifyContent: 'space-between',
                marginLeft: id !== 0 ? WIDTH * 0.03 : 0
            }}>
            <Image
                style={{
                    height: id === 3 ? HEIGHT * 0.03 : HEIGHT * 0.033,
                    padding: HEIGHT * 0.01,
                    width: HEIGHT * 0.033
                }}
                source={logo}
            />
            <Text style={{
                fontSize: HEIGHT * 0.02,
                color: colorMix.white
            }}>{title}</Text>
        </Pressable>
    )
}

const MyTabBar = () => {
    return (
        <View style={{
            // borderWidth: 1,
            height: HEIGHT * 0.1,
            backgroundColor: colorMix.light_80,
            paddingHorizontal: WIDTH * 0.05,
            paddingVertical: HEIGHT * 0.012,
            // alignItems: 'center',
            // justifyContent: 'space-between'
        }}>
            <FlatList
                contentContainerStyle={{
                    justifyContent: 'space-between',
                    // borderWidth: 1,
                    width: WIDTH * 0.9
                }}
                horizontal
                data={tabBarData}
                renderItem={({ item }) => <RenderTabBar data={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const MyTabs = () => {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
        >
            <Tab.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="income" component={IncomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="expense" component={ExpenseScreen} options={{ headerShown: false }} />
            <Tab.Screen name="transfer" component={TransferScreen} options={{ headerShown: false }} />
            {/* <Tab.Screen name="transaction" component={TransactionScreen} options={{ headerShown: false }} /> */}
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='expense' screenOptions={{ headerShown: false }}>
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
                <Stack.Screen name='transaction' component={TransactionScreen} />
                <Stack.Screen name='detailtransaction' component={DetailExpenseScreen} />
                <Stack.Screen name='financialreport' component={FinancialReport} />
                <Stack.Screen name='detailfinancialreport' component={DetailFinancialReport} />
                <Stack.Screen name='budget' component={BudgetScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router