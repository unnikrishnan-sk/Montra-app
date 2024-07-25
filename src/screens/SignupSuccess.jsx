import React from 'react'
import { Image, Text, View } from 'react-native'
import BottomSlider from '../components/BottomSlider'
import { success_icon } from '../assets'
import { colorMix } from '../constants/color'
import { HEIGHT } from '../constants/dimension'

const SignupSuccess = () => {
  return (
    <View style={{
        backgroundColor: colorMix.light_100,
        height: HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {/* <View> */}
        <Image 
        style={{
            height: HEIGHT*0.13,
            width: HEIGHT*0.13
        }}
        source={success_icon}
        />
        <Text style={{
            fontSize: HEIGHT*0.03,
            marginTop: HEIGHT*0.025,
            color: colorMix.dark_100,
            fontWeight: 400
        }}>You are set!</Text>
        
        {/* </View> */}
        <BottomSlider />
    </View>
  )
}

export default SignupSuccess