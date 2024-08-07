import React from 'react'
import { Image, Pressable, Text } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import * as ImagePicker from 'react-native-image-picker'

const RenderAttachments = ({data,index,type,onButtonPress}) => {
    const {id,title,logo} = data
  return (
    <Pressable
    onPress={()=>onButtonPress(type,ImagePicker.ImageLibraryOptions,index)}
    style={{ height: HEIGHT*0.125, width: WIDTH*0.27, borderRadius: HEIGHT*0.022, backgroundColor: colorMix.violet_20, alignItems:'center', justifyContent: 'center', marginLeft: id===0 ? 0 : WIDTH*0.035 }}
    >
    <Image style={{ height:id===2 ? HEIGHT*0.04: HEIGHT*0.032, width: id===2 ? WIDTH*0.06 : WIDTH*0.068 }} source={logo} />
    <Text style={{ color: colorMix.violet_100, marginTop: HEIGHT*0.01, fontSize: HEIGHT*0.022, fontWeight: '600' }}>{title}</Text>
</Pressable>
  )
}

export default RenderAttachments