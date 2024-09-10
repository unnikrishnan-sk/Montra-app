import React from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'

const PieChartData = ({data}) => {

  const {id,image,title,description,amount,createdAt,category} = data;

  const value ={
    "shopping": "Shopping",
    "subscription":"Subscription",
    "food": "Food",
    "salary" : "salary",
    "transportation": "Transportation"
}

let backgroundColor;
    switch (category) {
        case value.shopping:
            backgroundColor = colorMix.yellow_100;
            break;
        case value.subscription:
            backgroundColor = colorMix.violet_100;
            break;
        case value.food:
            backgroundColor = colorMix.red_100;
            break;
        case value.salary:
            backgroundColor = colorMix.green_100;
            break;
        case value.transportation:
            backgroundColor = colorMix.blue_100;
            break;
        default:
            backgroundColor = colorMix.light_100;
    }
    
  return (
    <View style={{
        // borderWidth:1,
        marginTop: HEIGHT*0.02,
        height: HEIGHT*0.09,
        paddingHorizontal: WIDTH*0.05,
        marginBottom: HEIGHT*0.01
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
              backgroundColor: backgroundColor,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: HEIGHT*0.004
            }}>
            </View>
          <Text style={{
            marginLeft: WIDTH*0.02,
            fontSize: HEIGHT*0.022
          }}>{category}</Text>
          </View>
          <Text style={{
            fontWeight: '500',
            fontSize: HEIGHT*0.035,
            color: category===value.salary ? colorMix.green_100 : colorMix.red_100
          }}>{category===value.salary ? `$ ${amount}` : `-$ ${amount}`}</Text>
        </View>
        <View style={{
          marginTop: HEIGHT*0.01,
          // borderWidth: 1
        }}>
        <Progress.Bar progress={(amount)/1000} width={WIDTH*0.9} height={HEIGHT*0.015} borderRadius={HEIGHT*0.02} color={backgroundColor} size={HEIGHT*0.02} thickness={HEIGHT*0.01} unfilledColor={colorMix.light_40} borderColor={colorMix.light_20} />
        </View>
       
       </View>
  )
}

export default PieChartData