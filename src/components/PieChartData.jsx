import React from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const PieChartData = () => {
    
  return (
    <View style={{
        // borderWidth:1,
        marginTop: HEIGHT*0.02,
        height: HEIGHT*0.09,
        paddingHorizontal: WIDTH*0.05
       }}>
        <View style={{
          // borderWidth:1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{
            borderWidth:1,
            paddingHorizontal: WIDTH*0.025,
            paddingVertical: WIDTH*0.02,
            borderRadius: HEIGHT*0.025,
            backgroundColor: colorMix.light_80,
            flexDirection: 'row',
            borderColor: colorMix.light_20
          }}>
            <View style={{
              height: HEIGHT*0.02,
              width: HEIGHT*0.02,
              borderRadius: HEIGHT*0.01,
              backgroundColor: colorMix.yellow_80,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: HEIGHT*0.004
            }}>
            </View>
          <Text style={{
            marginLeft: WIDTH*0.02,
            fontSize: HEIGHT*0.022
          }}>Shopping</Text>
          </View>
          <Text style={{
            fontWeight: '500',
            fontSize: HEIGHT*0.035,
            color: colorMix.red_100
          }}>-$120</Text>
        </View>
        <View style={{
          marginTop: HEIGHT*0.01
        }}>
        <Progress.Bar progress={0.8} width={WIDTH*0.9} height={HEIGHT*0.015} borderRadius={HEIGHT*0.02} color={colorMix.yellow_80} size={HEIGHT*0.02} thickness={HEIGHT*0.01} unfilledColor={colorMix.light_40} borderColor={colorMix.light_20} />
        </View>
       
       </View>
  )
}

export default PieChartData