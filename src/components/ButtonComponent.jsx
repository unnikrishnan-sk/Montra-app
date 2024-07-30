import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const ButtonComponent = ({bgColor, txtColor, title, brdrColor, logo, onButtonHandler}) => {
  return (
    <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <Pressable  onPress={()=>onButtonHandler()} style={{ borderWidth: 1, height: HEIGHT*0.07, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', borderColor: brdrColor? brdrColor: colorMix.violet_100, backgroundColor:bgColor? bgColor: colorMix.violet_100, flexDirection: 'row' }}>
            {logo && (<Image style={{ height: HEIGHT*0.04, width: HEIGHT*0.04, marginRight: WIDTH*0.02 }} source={logo}/>) }
            <Text style={{ color:txtColor? txtColor: colorMix.light_100, fontSize: HEIGHT*0.023, fontWeight: 600 }}>{title}</Text>
        </Pressable> 
    </View>
  )
}

export default ButtonComponent