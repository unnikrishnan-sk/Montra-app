import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import BottomSlider from '../components/BottomSlider'
import { success_icon } from '../assets'
import { colorMix } from '../constants/color'
import { HEIGHT } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const SignupSuccess = () => {

  const darkMode = useSelector((state)=>state.mode.darkMode)
  const navigation = useNavigation();

  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigation.navigate('myTabs')
    },2000)
  },[])

  return (
    <View style={{ backgroundColor: darkMode? colorMix.dark_100:colorMix.light_100, height: HEIGHT, justifyContent: 'center', alignItems: 'center'
    }}>
        <Image style={{ height: HEIGHT*0.13, width: HEIGHT*0.13 }} source={success_icon} />
        <Text style={{ fontSize: HEIGHT*0.03, marginTop: HEIGHT*0.025, color: darkMode? colorMix.light_100:colorMix.dark_100, fontWeight: '400' }}>You are set!</Text>
        <BottomSlider />
    </View>
  )
}

export default SignupSuccess