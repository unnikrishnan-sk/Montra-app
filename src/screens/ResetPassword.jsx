import React, { useState } from 'react'
import { View } from 'react-native'
import Navbar from '../components/Navbar'
import InputComponent from '../components/InputComponent'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import isEmpty from 'lodash/isEmpty'
import { useNavigation } from '@react-navigation/native'
import { resetPass } from '../constants/dummyData'

const ResetPassword = () => {

    const [reset,setReset] = useState({})
    const [error,setError] = useState({})
    const navigation = useNavigation()

    const handleChangeForm = (key,value) => {
        reset[key] = value;
        setReset({...reset})
        setError({})
      }

      const resetFn = () => {
        const valid = validateResetForm();
        if(valid){
          const {NewPass,RetypePass} = reset;
          navigation.navigate('login')
        }else{
          console.log("error_resetFn",error);
        }
      }

      const validateResetForm = () => {
        const {NewPass,RetypePass} = reset;
        let error = {};
        console.log("error_validateResetForm",error);
        if(isEmpty(NewPass)){
          error.NewPass = 'Enter Password'
        }
        if(isEmpty(RetypePass)){
          error.RetypePass = 'Enter Retype Password'
        }else if(NewPass !== RetypePass){
            error.RetypePass = "Passwords dosen't match"
        }
        setError({...error})
        return isEmpty(error)
      }

  return (
    <View style={{ backgroundColor: colorMix.light_100, height: HEIGHT }}>
        <Navbar title="Reset Password"/>
        <View style={{ marginTop: HEIGHT*0.085 }}>
            {resetPass?.map((data)=>(
                <InputComponent key={data.id} placeholder={data.placeholder} value={reset?.[data.value]} onChangeText={text=>handleChangeForm(data.value,text)} error={error?.[data.value]} passIcon={data.passIcon}/>
            ))}
        </View>
        <View style={{ marginTop: HEIGHT*0.045, paddingHorizontal: WIDTH*0.05 }}>
            <ButtonComponent title="Continue" onButtonHandler={()=>resetFn()}/>
        </View>
        <BottomSlider />
    </View>
  )
}

export default ResetPassword