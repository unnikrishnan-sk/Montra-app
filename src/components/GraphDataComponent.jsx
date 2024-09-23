import React from 'react'
import { View } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const GraphDataComponent = ({centerTab,graphData,darkMode}) => {

  return (
    <View style={{ marginLeft: -WIDTH*0.1 ,backgroundColor: darkMode?colorMix.dark_100:colorMix.light_100}}>
    <LineChart areaChart data={graphData} style={{ marginLeft: WIDTH*0.1 }} spacing={graphData.length<5 ?WIDTH : WIDTH*0.2} initialSpacing={0} thickness={6} hideAxesAndRules hideDataPoints width={WIDTH} curved startFillColor={colorMix.violet_80} 
    endFillColor={centerTab ? colorMix.violet_20 : colorMix.violet_20}
      startOpacity={0.4} endOpacity={0.1} color={colorMix.violet_100}/>
   </View>
  )
}

export default GraphDataComponent