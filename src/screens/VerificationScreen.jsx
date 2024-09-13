import React, { useEffect, useRef, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import isEmpty from 'lodash/isEmpty'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import auth from '@react-native-firebase/auth'

const VerificationScreen = () => {

    const [minute,setMinute] = useState(4);
    const [second,setSecond] = useState(59);
    const [otp,setOtp] = useState([])
    const [email,setEmail] = useState(null);
    const [error,setError] = useState(null);
    const navigation = useNavigation();
    const inputs = useRef([]);
    const darkMode = useSelector((state)=>state.mode.darkMode)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setSecond(prevSecond => {
                if(prevSecond === 0){
                    if(minute === 0){
                        clearInterval(timer);
                        return 0;
                    }else{
                        setMinute(prevMinute => prevMinute-1)
                        return 59;
                    }
                }else{
                    return prevSecond-1
                }
            })
        },1000)
        return () => clearInterval(timer)
    },[minute])

    useEffect(()=>{
        getEmail();
    },[])

    const getEmail = () => {
        const user = auth().currentUser.email;
        setEmail(user)
    }

    const handleText = (value,index) => {
       
        if(otp.length<6){
            setOtp(otp+value)
        }
        if(value && index<inputs.current.length-1){
            inputs.current[index+1].focus();
        }
        if(otp.length>=0){
            setError(null)
        }
    }

    const verifyFn = () => {
        if(otp.length===6){
            navigation.navigate('pin')
        }else{
            setError("Enter Verification Code")
        }
      }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex:1 }} > 

    <View style={{ backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100, height: HEIGHT, flex:1 }}>
        <Navbar title="Verification" darkMode={darkMode}/>

        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{ paddingHorizontal: WIDTH*0.05, justifyContent: 'center' }}>

        <Text style={{ fontSize: HEIGHT*0.045, fontWeight: '500', width: WIDTH*0.7, paddingTop: HEIGHT*0.3, color: darkMode ? colorMix.light_100 : colorMix.dark_100 }}>Enter your Verification Code</Text>
        <View style={{ marginTop: HEIGHT*0.08, flexDirection: 'row' }}>

            {[...Array(6)].map((_,i)=>(
                <View key={i} style={{ height: HEIGHT*0.02, width: HEIGHT*0.025, marginLeft:i===0? 0: WIDTH*0.045, borderRadius: HEIGHT*0.01, backgroundColor: otp[i] ? colorMix.light_100 : colorMix.light_20, fontSize: HEIGHT*0.1, color: darkMode ? colorMix.light_100 : colorMix.dark_100, justifyContent: 'center' }}>

                    <TextInput ref={el => inputs.current[i]=el} onChangeText={text=>handleText(text,i)} keyboardType='numeric' maxLength={1} style={{ height: HEIGHT*0.075, width: WIDTH*0.055, fontWeight:'900', fontSize: HEIGHT*0.042, color: darkMode ? colorMix.light_100 : colorMix.dark_100 }}/>
                </View>
            ))}
        </View>

        {!isEmpty(error) && <Text style={{ marginTop: HEIGHT*0.01, color: colorMix.red_100, fontSize: HEIGHT*0.022, fontWeight: '500' }}>{error}</Text>}
        <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.04 }}>
        <Text style={{ fontSize: HEIGHT*0.023, fontWeight: '600', color: colorMix.violet_100 }}>0{minute}:</Text>
        <Text style={{ fontSize: HEIGHT*0.023, fontWeight: '600', color: colorMix.violet_100 }}>{second<10 ? `0${second}`: second}</Text>
        </View>

        <Text style={{ fontSize: HEIGHT*0.02, marginTop: HEIGHT*0.018, width: WIDTH*0.65, color: darkMode ? colorMix.light_100 : colorMix.dark_100, fontWeight: '500' }}>We send verification code to your email <Text style={{ color: colorMix.violet_100 }}>{email}.</Text>You can check your inbox.</Text>
        <Text style={{ marginTop: HEIGHT*0.018, textDecorationLine: 'underline', color: colorMix.violet_100, fontWeight:'500', fontSize: HEIGHT*0.02 }}>I didn't received the code? Send again</Text>
        </View>

        <View style={{ marginTop: Platform.OS==="ios" ?  HEIGHT*0.05 : HEIGHT*0.02, paddingHorizontal: WIDTH*0.05 }}>
        <ButtonComponent title="Verify" onButtonHandler={()=>verifyFn()}/>
        </View>

        <View style={{ marginTop: HEIGHT*0.07 }}>
        <BottomSlider />
        </View>

        </ScrollView>
    </View>
    </KeyboardAvoidingView>
  )
}

export default VerificationScreen