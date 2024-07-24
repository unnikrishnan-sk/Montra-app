import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import { loginDetails } from '../constants/dummyData'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import isEmpty from 'lodash/isEmpty'
import { validateEmail } from '../constants/common'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const [logindata,setLogindata] = useState({});
    const [error,setError] = useState({});
    const navigation = useNavigation();

    const handleChangeForm = (key,value) => {
        logindata[key] = value;
        setLogindata({...logindata})
        setError({})
      }

      const loginFn = () => {
        const valid = validateLoginForm();
        console.log("valid",valid);
        if(valid){
          const {email,password} = logindata;
          navigation.navigate('')
        }else{
          console.log("error",error);
        }
      }

      const validateLoginForm = () => {
        const {email,password} = logindata;
        console.log(email,password);
        let error = {};
        console.log("error",error);
        if(isEmpty(email)){
          error.email = 'Enter email'
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
        backgroundColor: colorMix.light_100,
        height: HEIGHT
    }}>
        <Navbar title="Login"/>

        <View style={{
            marginTop: HEIGHT*0.065
        }}>
            {loginDetails.map((data)=>(
                <InputComponent key={data.id} placeholder={data.placeholder} value={logindata?.[data.value]}
                onChangeText={text=>handleChangeForm(data.value,text)} error={error?.[data.value]} passIcon={data.passIcon}
                />
            ))}
        </View>
        <View style={{
            marginTop: HEIGHT*0.05
        }}>
        <ButtonComponent title="Login" onButtonHandler={()=>loginFn()}/>
        </View>
        <Text 
        onPress={()=>navigation.navigate('forgotpass')}
        style={{
            color: colorMix.violet_100,
            fontSize: HEIGHT*0.023,
            fontWeight: 500,
            alignSelf: 'center',
            marginTop: HEIGHT*0.035
        }}>Forgot Password?</Text>
        <Text style={{
            fontSize: HEIGHT*0.021,
            color: colorMix.dark_25,
            alignSelf: 'center',
            marginTop: HEIGHT*0.04,
            fontWeight: 500
        }}>Don't have an account yet? <Text
        onPress={()=>navigation.navigate('signup')} style={{
            color: colorMix.violet_100,
            textDecorationLine: 'underline',
        }}>Sign Up</Text></Text>
        <BottomSlider />
    </View>
  )
}

export default LoginScreen