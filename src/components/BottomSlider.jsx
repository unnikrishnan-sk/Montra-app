import React from 'react'
import { View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const BottomSlider = ({color}) => {
  return (
    <View style={{ position: 'absolute', bottom: Platform.OS=="ios"? HEIGHT*0.02: HEIGHT*0.05, backgroundColor:color? color : colorMix.dark_100, height: HEIGHT*0.006, width: WIDTH*0.32, borderRadius: HEIGHT*0.3, alignSelf: 'center' }}></View>
  )
}

export default BottomSlider