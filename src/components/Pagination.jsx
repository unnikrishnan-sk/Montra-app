import React from 'react'
import { View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { onboardData } from '../constants/dummyData'
import { colorMix } from '../constants/color'

    const Pagination = ({index}) => {
        return(
            <View style={{ flexDirection: 'row', height: HEIGHT*0.05, width: WIDTH*0.4, justifyContent: 'center', alignItems: 'center'}}>

            { onboardData.map((_,i)=>{
            return(
                <View key={i}>
                {index === i ? (
                    <View style={{ backgroundColor: colorMix.violet_100, height: HEIGHT*0.021, width: HEIGHT*0.021, borderRadius: HEIGHT*0.021, marginLeft: WIDTH*0.04 }}></View>
                ) : (
                    <View style={{ backgroundColor: colorMix.violet_20, height: HEIGHT*0.011, width: HEIGHT*0.011, borderRadius: HEIGHT*0.01, marginLeft: WIDTH*0.04 }}></View>
                )}
                </View>
                )})
            }
        </View>
    )
}

export default Pagination