import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Easing, Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import { loginDetails } from '../constants/dummyData'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import isEmpty from 'lodash/isEmpty'
import { handleAuthError, validateEmail } from '../constants/common'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import { useSelector } from 'react-redux'

const LoginScreen = () => {

    const [logindata,setLogindata] = useState({});
    const [error,setError] = useState({});
    const [firebaseError,setFirebaseError] = useState();
    const navigation = useNavigation();
    // console.log("firebase",firebaseError);

    const darkMode = useSelector((state)=>state.mode.darkMode)

    const handleChangeForm = (key,value) => {
        logindata[key] = value;
        setLogindata({...logindata})
        setFirebaseError()
        setError({})
      }

      const loginFn = async () => {
        const valid = validateLoginForm();
        console.log("valid",valid);
        if(valid){
          const {email,password} = logindata;
          try {
            await auth().signInWithEmailAndPassword(email, password)
            navigation.navigate('myTabs')
          } catch (error) {
            handleAuthError(error,setFirebaseError)
          }
        }else{
          console.log("error=>>handleChangeForm",error);
        }
      }

      const validateLoginForm = () => {
        const {email,password} = logindata;
        console.log(email,password);
        let error = {};
        console.log("error==>validateLoginForm",error);
        if(isEmpty(email)){
          error.email = 'Enter Email'
        }else if(!validateEmail(email)){
          error.email = 'Enter Valid Email'
        }
        if(isEmpty(password)){
          error.password = 'Enter Password'
        }
        setError({...error})
        return isEmpty(error)
      }
    

  return (
    <View style={{
        backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100,
        height: HEIGHT
    }}>
        <Navbar title="Login" darkMode={darkMode}/>
        <View style={{
            marginTop: HEIGHT*0.065
        }}>
            {loginDetails.map((data)=>(
                <InputComponent key={data.id} placeholder={data.placeholder} value={logindata?.[data.value]}
                onChangeText={text=>handleChangeForm(data.value,text)} error={error?.[data.value]} passIcon={data.passIcon} darkMode={darkMode}
                />
            ))}
        </View>
       {firebaseError ? <Text style={{
        color: colorMix.red_100,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: HEIGHT*0.01
       }}>{firebaseError}</Text> : null }
        <View style={{
            marginTop: firebaseError ? HEIGHT*0.015 :HEIGHT*0.05,
            paddingHorizontal: WIDTH*0.05
        }}>
        <ButtonComponent title="Login" onButtonHandler={()=>loginFn()}/>
        </View>
        <Text 
        onPress={()=>navigation.navigate('forgotpass')}
        style={{
            color: colorMix.violet_100,
            fontSize: HEIGHT*0.023,
            fontWeight: '500',
            alignSelf: 'center',
            marginTop: HEIGHT*0.035
        }}>Forgot Password?</Text>
        <Text style={{
            fontSize: HEIGHT*0.021,
            color: colorMix.dark_25,
            alignSelf: 'center',
            marginTop: HEIGHT*0.04,
            fontWeight: '500'
        }}>Don't have an account yet? <Text
        onPress={()=>navigation.navigate('signup')} style={{
            color: colorMix.violet_100,
            textDecorationLine: 'underline',
        }}>Sign Up</Text></Text>
        <BottomSlider darkMode={darkMode}/>
    </View>
  )
}

export default LoginScreen