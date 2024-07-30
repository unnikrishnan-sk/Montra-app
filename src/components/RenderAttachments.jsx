import React from 'react'
import { Image, Pressable, Text } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const RenderAttachments = ({data}) => {
    const {id,title,logo} = data
  return (
    <Pressable
    style={{ height: HEIGHT*0.125, width: WIDTH*0.27, borderRadius: HEIGHT*0.022, backgroundColor: colorMix.violet_20, alignItems:'center', justifyContent: 'center', marginLeft: id===0 ? 0 : WIDTH*0.035 }}
    onPress={() => setModalVisible(!modalVisible)}>
    <Image style={{ height:id===2 ? HEIGHT*0.04: HEIGHT*0.032, width: id===2 ? WIDTH*0.06 : WIDTH*0.068 }} source={logo} />
    <Text style={{ color: colorMix.violet_100, marginTop: HEIGHT*0.01, fontWeight: HEIGHT*0.022, fontWeight: 600 }}>{title}</Text>
</Pressable>
  )
}

export default RenderAttachments