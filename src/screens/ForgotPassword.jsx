import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'
import isEmpty from 'lodash/isEmpty'
import { validateEmail } from '../constants/common'
import { useSelector } from 'react-redux'

const forgotPasswordDetails = { id: 0, placeholder: 'Email', value: 'email', passwordSecure: false };

const ForgotPassword = () => {

    const [forgotpassdata,setForgotpassdata] = useState({});
    const [error,setError] = useState({});
    const navigation = useNavigation();

    const darkMode = useSelector((state)=>state.mode.darkMode)

    const handleChangeForm = (key,value) => {
        forgotpassdata[key] = value;
        setForgotpassdata({...forgotpassdata})
        setError({})
      }

      const passFn = () => {
        const valid = validatePassForm();
        console.log("valid",valid);
        if(valid){
          const {email} = forgotpassdata;
          navigation.navigate('emailpass')
        }else{
          console.log("error",error);
        }
      }

      const validatePassForm = () => {
        const {email} = forgotpassdata;
        console.log(email);
        let error = {};
        console.log("error",error);
        if(isEmpty(email)){
          error.email = 'Enter Email'
        }else if(!validateEmail(email)){
          error.email = 'Enter Valid Email'
        }
        setError({...error})
        return isEmpty(error)
      }

  return (
    <View style={{
        backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100,
        height: HEIGHT
    }}>
        <Navbar title="Forgot Password" darkMode={darkMode}/>
        <View style={{
            paddingHorizontal: WIDTH*0.05,
            marginTop: HEIGHT*0.12
        }}>
            <Text style={{
                fontSize: HEIGHT*0.03,
                fontWeight: '600',
                width: WIDTH*0.7,
                color: darkMode ? colorMix.light_100 : colorMix.dark_100
            }}>Don't worry.{"\n"}Enter your email and we'll send you a link to reset your password.</Text>
        </View>
        <View style={{
            marginTop: HEIGHT*0.03
        }}>
        <InputComponent onChangeText={text => handleChangeForm(forgotPasswordDetails.value, text)}
        error={error[forgotPasswordDetails.value]}
        placeholder={forgotPasswordDetails.placeholder}
        passwordSecure={forgotPasswordDetails.passwordSecure}
        value={forgotpassdata[forgotPasswordDetails.value]}/>
        </View>
        <View style={{
            marginTop: HEIGHT*0.04,
            paddingHorizontal: WIDTH*0.05
        }}>
        <ButtonComponent title="Continue" onButtonHandler={passFn}/>
        </View>
           
            <BottomSlider />
    </View>
  )
}

export default ForgotPassword