import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import isEmpty from 'lodash/isEmpty'

const verificationDetails = [{id:0, value: 'otp1'}, {id:1, value: 'otp2'},{id:2, value: 'otp3'}, {id:3, value: 'otp4'}, {id:4, value: 'otp5'},{id:5, value: 'otp6'}]

const VerificationScreen = () => {

    const [minute,setMinute] = useState(4);
    const [second,setSecond] = useState(59);
    const [otp,setOtp] = useState([])
    const [error,setError] = useState({});
    // console.log(otp,"otp");

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

    const handleText = (key,value) => {
        verificationDetails[key] = value
        setOtp({...otp})
        console.log("otp",otp);
    }

    const verifyFn = () => {
        const valid = validateVerifyForm();
        console.log("valid",valid);
        if(valid){
          const {otp1,otp2,otp3,otp4,otp5,otp6} = otp;
          navigation.navigate('')
        }else{
          console.log("error",error);
        }
      }

      const validateVerifyForm = () => {
        const {otp1,otp2,otp3,otp4,otp5,otp6} = otp;
        // console.log(email,password);
        let error = {};
        console.log("error",error);
        if(isEmpty(otp1)){
          error.otp1 = 'Enter Otp'
        // }else if(!validateEmail(email)){
        //   error.email = 'Enter Valid Email'
        // }
        // if(isEmpty(password)){
        //   error.password = 'Enter Password'
        }
        setError({...error})
        return isEmpty(error)
      }

  return (
    <View style={{
        backgroundColor: colorMix.light_100,
        height: HEIGHT,
    }}>
        <Navbar title="Verification"/>
        <View style={{
            paddingHorizontal: WIDTH*0.05
        }}>
        <Text style={{
            fontSize: HEIGHT*0.045,
            fontWeight: 500,
            width: WIDTH*0.7,
            paddingTop: HEIGHT*0.3,
            color: colorMix.dark_100
        }}>Enter your Verification Code</Text>
        <View style={{
            marginTop: HEIGHT*0.08,
            flexDirection: 'row'
        }}>
            {verificationDetails.map((item,i)=>(
                <View 
                key={item.id}
                style={{
                    // borderWidth: 1,
                    height: HEIGHT*0.019,
                    width: HEIGHT*0.019,
                    marginLeft:item.id===0? 0: WIDTH*0.035,
                    borderRadius: HEIGHT*0.01,
                    backgroundColor: colorMix.light_20,
                    fontSize: HEIGHT*0.1,
                    color: colorMix.dark_100,
                    justifyContent: 'center'
                }}><TextInput 
                onChangeText={text=>handleText(item.value,text)}
                keyboardType='numeric'
                maxLength={1}
                style={{
                    // borderWidth: 1,
                    height: HEIGHT*0.05,
                    width: WIDTH*0.045,
                    fontWeight: 'bold',
                    fontSize: HEIGHT*0.042      
                }}/></View>
            ))}
        
        </View>
        {!isEmpty(error) ? (<Text style={{
            marginTop: HEIGHT*0.01
        }}>{error.otp1}</Text>) : null}
        <View style={{
            flexDirection: 'row',
            marginTop: HEIGHT*0.05
        }}>
        <Text style={{
            fontSize: HEIGHT*0.023,
            fontWeight: 600,
            color: colorMix.violet_100
        }}>0{minute}:</Text>
        <Text style={{
            fontSize: HEIGHT*0.023,
            fontWeight: 600,
            color: colorMix.violet_100
        }}>{second<10 ? `0${second}`: second}</Text>
        </View>
        
        <Text style={{
            fontSize: HEIGHT*0.02,
            marginTop: HEIGHT*0.02,
            width: WIDTH*0.65,
            color: colorMix.dark_100,
            fontWeight: 500
        }}>We send verification code to your email <Text style={{
            color: colorMix.violet_100
        }}>branjaoma*****@gmail.com.</Text>You can check your inbox.</Text>
        <Text style={{
            marginTop: HEIGHT*0.02,
            textDecorationLine: 'underline',
            color: colorMix.violet_100,
            fontWeight:500,
            fontSize: HEIGHT*0.02
        }}>I didn't received the code? Send again</Text>
        </View>
        <View style={{
            marginTop: HEIGHT*0.045
        }}>
        <ButtonComponent title="Verify" onButtonHandler={()=>verifyFn()}/>
        </View>
        
        <BottomSlider />
    </View>
  )
}

export default VerificationScreen