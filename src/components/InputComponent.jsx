import React, { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const InputComponent = ({placeholder, passIcon, error, onChangeText, value}) => {
  const [secureTextEntry,setSecureTextEntry] = useState(true)
  return (
    <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.03 }}>
        <View style={{ height: HEIGHT*0.07, borderRadius: HEIGHT*0.02, paddingLeft: WIDTH*0.035, paddingRight: WIDTH*0.035, borderWidth: 1,  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor:error? colorMix.red_100: colorMix.light_20 }}>
            <TextInput style={{ width:WIDTH*0.75, height: HEIGHT*0.055 }} placeholder={placeholder} placeholderTextColor={colorMix.dark_25} onChangeText={onChangeText} value={value} secureTextEntry={passIcon ?secureTextEntry : false}/>
            { passIcon && <Pressable
            onPress={()=>setSecureTextEntry(!secureTextEntry)}
            ><Image style={{height: HEIGHT*0.03, width: HEIGHT*0.03}} source={passIcon}/></Pressable> }
        </View>
        {error && <Text style={{ color: colorMix.red_80, fontWeight: '600', marginTop: HEIGHT*0.005 }}>{error}</Text> }
    </View>
  )
}

export default InputComponent