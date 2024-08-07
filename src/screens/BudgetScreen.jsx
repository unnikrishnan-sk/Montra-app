import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { arrow_left, arrow_right, arrow_right_white, back_arrow_white, right_arrow } from '../assets'
import { colorMix } from '../constants/color'
import moment from 'moment'

// const months = [{name: }]

const BudgetScreen = () => {

    const [ month,setMonth ] = useState(moment(new Date()));
     console.log(moment(month).format('MMMM'));

     const previousMonth = () => {
        setMonth(month.clone().subtract(1,'month'))
     }

     const nextMonth = () => {
        setMonth(month.clone().add(1,'month'))
     }

     

  return (
    <View>
        <View style={{
            // borderWidth: 1,
            // marginTop: HEIGHT*0.03
            paddingTop: HEIGHT*0.06,
            backgroundColor: colorMix.violet_100,
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05,
            justifyContent: 'space-between',
            paddingBottom: HEIGHT*0.02
        }}>
            <Pressable
            onPress={previousMonth}
            >
            <Image 
            style={{
                height: HEIGHT*0.03
            }}
            source={arrow_left}
            />
            </Pressable>
            <Text style={{
                color: colorMix.light_100,
                fontSize: HEIGHT*0.028,
                fontWeight: '500'
            }}>{moment(month).format('MMMM')}</Text>
            <Pressable
            onPress={nextMonth}
            >
            <Image
            style={{
                height: HEIGHT*0.03
            }} 
            source={arrow_right_white}
            />
            </Pressable>
        </View>
        <View style={{
            
        }}>

        </View>
    </View>
  )
}

export default BudgetScreen