import React, { useState } from 'react'
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
import { budget_tab, expense_icon, expense_icon_white, home_icon, income_icon, income_icon_white, plus_icon_tab, profile_tab, transaction_tab, transfer_icon, transfer_icon_white } from './assets';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from './constants/dimension';
import { colorMix } from './constants/color';
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

const tabBarData = [{ id: 0, logo: home_icon, title: "Home", route: "home" }, { id: 1, logo: transaction_tab, title: "Transaction", route: "transaction" }, { id: 2, logo: plus_icon_tab }, { id: 3, logo: budget_tab, title: "Budget", route: "budget" }, { id: 4, logo: profile_tab, title: "Profile", route: "profile" }]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RenderTabBar = ({ data, isFocused, index }) => {

    const [centerTab, setCenterTab] = useState(false);
    const { id, logo, title, route } = data;
    const navigation = useNavigation();
    console.log("isFocused", centerTab);

    return (
        <>
            {id === 2 ?
                <>
                    <View style={{
                        borderWidth: 1,
                        position: 'absolute',
                        bottom: HEIGHT * 0.3,
                        height: HEIGHT * 0.1,
                        width: HEIGHT * 0.1,
                        zIndex: 1
                    }}></View>
                    <Pressable
                        onPress={() => {
                            setCenterTab(!centerTab)
                            navigation.navigate('home', { centerTab: !centerTab })
                        }}

                        style={{
                            // borderWidth: 1,
                            height: HEIGHT * 0.07,
                            width: HEIGHT * 0.07,
                            borderRadius: HEIGHT * 0.035,
                            backgroundColor: colorMix.violet_100,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Image
                            style={{
                                height: HEIGHT * 0.033,
                                width: HEIGHT * 0.033,
                                transform: centerTab ? [{ rotate: '45deg' }] : [{ rotate: '0deg' }],
                            }}
                            source={plus_icon_tab}
                        />
                    </Pressable>
                </>

                : <Pressable
                    onPress={() => navigation.navigate(route)}
                    style={{
                        // borderWidth: 1,
                        // borderColor: colorMix.light_80,
                        alignItems: 'center',
                        // justifyContent: 'space-between',
                        marginLeft: id !== 0 ? WIDTH * 0.03 : 0
                    }}>
                    <Image
                        style={{
                            // borderWidth: 1,
                            tintColor: isFocused ? colorMix.violet_100 : colorMix.light_20,
                            height: id === 3 ? HEIGHT * 0.035 : HEIGHT * 0.037,
                            // : HEIGHT * 0.033,
                            padding: HEIGHT * 0.01,
                            width: id === 3 ? HEIGHT * 0.03 : HEIGHT * 0.035
                        }}
                        source={logo}
                    />
                    <Text style={{
                        fontSize: HEIGHT * 0.018,
                        marginTop: HEIGHT * 0.006,
                        color: isFocused ? colorMix.violet_100 : colorMix.dark_25
                    }}>{title}</Text>
                </Pressable>}

        </>
    )
}

const MyTabBar = ({ state, descriptors, navigation }) => {

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
            {/* {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                console.log("index", index);
                const isFocused = state.index === index;
            })} */}
            <FlatList
                contentContainerStyle={{
                    justifyContent: 'space-between',
                    // borderWidth: 1,
                    width: WIDTH * 0.9
                }}
                horizontal
                data={tabBarData.map((item, index) => ({
                    ...item,
                    isFocused: state.index === index
                }))}
                renderItem={({ item, index }) => {
                    const isFocused = state.index === index;
                    return (
                        <RenderTabBar data={item} isFocused={isFocused} />
                    );
                }}
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
            <Tab.Screen name="transaction" component={TransactionScreen} options={{ headerShown: false }} />
            <Tab.Screen name="budget" component={BudgetScreen} options={{ headerShown: false }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{ headerShown: false }} />
            {/* <Tab.Screen name="transaction" component={TransactionScreen} options={{ headerShown: false }} /> */}
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
                <Stack.Screen name='transaction' component={TransactionScreen} />
                <Stack.Screen name='detailtransaction' component={DetailExpenseScreen} />
                <Stack.Screen name='financialreport' component={FinancialReport} />
                <Stack.Screen name='detailfinancialreport' component={DetailFinancialReport} />
                {/* <Stack.Screen name='budget' component={BudgetScreen} /> */}
                <Stack.Screen name='createbudget' component={CreateBudget} />
                <Stack.Screen name='detailbudget' component={DetailBudgetScreen} />
                {/* <Stack.Screen name='profile' component={ProfileScreen} /> */}
                <Stack.Screen name='account' component={AccountScreen} />
                <Stack.Screen name='detailaccount' component={DetailAccountScreen} />
                <Stack.Screen name='settings' component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router