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

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='addaccount' screenOptions={{ headerShown: false }}>
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
                <Stack.Screen name='home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router