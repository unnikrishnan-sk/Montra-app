import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { warning_symbol } from '../assets'
import * as Progress from 'react-native-progress'
import { handleCategoryColor } from '../constants/common'
import { useNavigation } from '@react-navigation/native'

const RenderBudgets = ({data,darkMode}) => {

    const {id,category, budgetCat,remainingBalance,budgetAmnt, totalBudget,totalExpense,amountSpent} = data;
    const [isLimitExceeded,setIsLimitExceeded] = useState(false)
    const RemainingAmnt = Number(budgetAmnt-totalExpense);
    const bgColor = handleCategoryColor(budgetCat)
    const progress = Number(totalExpense/budgetAmnt)
    const navigation = useNavigation();

    useEffect(()=>{
        if(RemainingAmnt<0){
            setIsLimitExceeded(true);
        }
    },[])

  return (
    <Pressable onPress={()=>navigation.navigate('detailbudget',{data})}
    style={{ borderRadius: HEIGHT*0.02, paddingHorizontal: WIDTH*0.05, paddingVertical: HEIGHT*0.03, marginTop: HEIGHT*0.02, backgroundColor: darkMode?colorMix.dark_50:colorMix.light_100 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ borderWidth: 1, flexDirection: 'row', borderRadius: HEIGHT*0.02, paddingHorizontal: HEIGHT*0.02, paddingVertical: HEIGHT*0.008, justifyContent: 'center', alignItems: 'center', backgroundColor: colorMix.light_80, borderColor: colorMix.light_20 }}>

                <View style={{ height: HEIGHT*0.02, width: HEIGHT*0.02, backgroundColor: bgColor, borderRadius: HEIGHT*0.01 }}></View>

                <Text style={{ marginLeft: WIDTH*0.02, fontSize: 13 }}>{budgetCat}</Text>
            </View>

            {isLimitExceeded && <Image source={warning_symbol} /> }    
        </View>

        <Text style={{ fontSize: 21, fontWeight: 500, marginTop: HEIGHT*0.01, color: darkMode?colorMix.light_100:colorMix.dark_100 }}>Remaining ${RemainingAmnt<0 ? '0' : RemainingAmnt }
        </Text>

    <Progress.Bar progress={progress<=0 ?  0: progress} width={WIDTH*0.8} height={HEIGHT*0.015} borderRadius={HEIGHT*0.02} color={bgColor} size={HEIGHT*0.02} thickness={HEIGHT*0.01} unfilledColor={colorMix.light_40} borderColor={colorMix.light_20} marginTop={HEIGHT*0.01} />

    <Text style={{ marginTop: HEIGHT*0.01, color: colorMix.dark_25, fontSize: 14, color:darkMode?colorMix.light_100:colorMix.dark_100 }}>${totalExpense} of ${budgetAmnt}
    </Text>

    {isLimitExceeded && <Text style={{ color:colorMix.red_100, fontSize: 13, marginTop: HEIGHT*0.003 }}>You've exceed the limit!</Text> } 

    </Pressable>
  )
}

export default RenderBudgets