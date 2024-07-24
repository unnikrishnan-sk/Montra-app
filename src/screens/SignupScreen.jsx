import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import { google_logo, tick_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import { signupDetails } from '../constants/dummyData'
import { useNavigation } from '@react-navigation/native'
import isEmpty from 'lodash/isEmpty';
import BottomSlider from '../components/BottomSlider'
import { validateEmail } from '../constants/common'

const SignupScreen = () => {

  const [signdata,setSigndata] = useState({});
  const [error,setError] = useState({});
  const navigation = useNavigation();
  const [agree,setAgree] = useState(false);

  const handleChangeForm = (key,value) => {
    signdata[key] = value;
    setSigndata({...signdata})
    setError({})
  }

  const signFn = () => {
    const valid = validateSignForm();
    console.log("valid",valid);
    if(valid && agree){
      const {name,email,password} = signdata;
      navigation.navigate('verification')
    }else{
      console.log("error",error);
    }
  }

  const validateSignForm = () => {
    const {name,email,password} = signdata;
    console.log(name,email,password);
    let error = {};
    console.log("error",error);
    if(isEmpty(name)){
      error.name = 'Enter Name'
    }
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
      backgroundColor: colorMix.light_100,
      height: HEIGHT
    }}>
      <Navbar title="Sign Up"/>

      <View style={{
        marginTop: HEIGHT*0.065
      }}>
        {signupDetails.map((data)=>(
            <InputComponent key={data.id} 
            value={signdata?.[data.value]} onChangeText={text=>handleChangeForm(data.value,text)} error={error?.[data.value]} placeholder={data.placeholder} passIcon={data.passIcon}/>
        ))}
        <View style={{
          paddingHorizontal: WIDTH*0.05,
          flexDirection: 'row',
          marginTop: HEIGHT*0.02,
        }}>
          {agree ? (
            <Pressable 
            onPress={()=>setAgree(false)}
            style={{
            borderWidth: 2,
            marginLeft: WIDTH*0.02,
            height: HEIGHT*0.03,
            width: HEIGHT*0.03,
            borderRadius: HEIGHT*0.005,
            backgroundColor: colorMix.violet_100,
            borderColor: colorMix.violet_100,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image 
            style={{
              height: HEIGHT*0.015,
              width: HEIGHT*0.017
            }}
            source={tick_icon}
            />
          </Pressable>) : (
            <Pressable 
            onPress={()=>setAgree(true)}
            style={{
            borderWidth: 2,
            marginLeft: WIDTH*0.02,
            height: HEIGHT*0.03,
            width: HEIGHT*0.03,
            borderRadius: HEIGHT*0.005,
            borderColor: colorMix.violet_100
          }}></Pressable>)}
          
          <Text style={{
            fontSize: HEIGHT*0.018,
            fontWeight: 500,
            marginLeft: WIDTH*0.035,
            width: WIDTH*0.75
          }}>By signing up, you agree to the <Text style={{
            color: colorMix.violet_100
          }}>Terms of Service and Privacy Policy</Text></Text>
        </View>
      </View>
      <View style={{
        marginTop: HEIGHT*0.025
      }}>
      <ButtonComponent title="Sign Up" onButtonHandler={()=>signFn()}/>
      </View>
      <Text style={{
        alignSelf: 'center',
        marginTop: HEIGHT*0.015,
        fontSize: HEIGHT*0.018,
        color: colorMix.dark_50
      }}>Or with</Text>
      <View style={{
        marginTop: HEIGHT*0.02
      }}>
      <ButtonComponent title="Sign Up with Google" bgColor={colorMix.light_100} txtColor={colorMix.dark_100} brdrColor={colorMix.light_20} logo={google_logo}/>
      </View>
      <Text style={{
        alignSelf: 'center',
        marginTop: HEIGHT*0.02,
        color: colorMix.dark_25
      }}>Already have an account? <Text 
      onPress={()=>navigation.navigate('login')}
      style={{
        color: colorMix.violet_100,
        textDecorationLine: 'underline'
      }}>Login</Text></Text>
      <BottomSlider />
    </View>
  )
}

export default SignupScreen