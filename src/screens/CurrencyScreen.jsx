import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useSelector } from 'react-redux'
import { tick_icon } from '../assets'

const CurrencyScreen = () => {

    const darkMode = useSelector((state)=>state.mode.darkMode)

  return (
    <View style={{ backgroundColor: colorMix.light_100, height: HEIGHT }}>

        <Navbar title="Currency"/>

        <View style={{ borderTopWidth: 1, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, paddingHorizontal: WIDTH*0.05, }}>

            <Pressable 
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={{ marginTop: HEIGHT*0.02, color: darkMode ? colorMix.light_100 : colorMix.dark_100, fontWeight: 500, fontSize: HEIGHT*0.022
            }}>United States (USD)</Text>

            <View style={{ height: HEIGHT*0.04, width: HEIGHT*0.04, marginTop: HEIGHT*0.02, borderRadius: HEIGHT*0.02, backgroundColor: colorMix.violet_100, alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{ height: HEIGHT*0.015, width: HEIGHT*0.016 }}
                source={tick_icon}/>
            </View> 
            </Pressable>
        </View>
    </View>
  )
}

export default CurrencyScreen