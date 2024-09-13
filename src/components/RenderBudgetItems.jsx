import React from 'react'
import { Image, Text, View } from 'react-native';
import { colorMix } from '../constants/color';
import { HEIGHT, WIDTH } from '../constants/dimension';

const RenderBudgetItems = ({data}) => {

    const {id, title, icon} = data;
    const value = {'Shopping' : 'shopping',
        'Food': 'food'
    }
    
    return (
        <View style={{ flexDirection: 'row', backgroundColor: colorMix.light_100, paddingHorizontal: HEIGHT*0.025, paddingVertical: HEIGHT*0.02, borderRadius: HEIGHT*0.025, marginLeft: WIDTH*0.1, justifyContent: 'space-between' }}>

            <View style={{ borderRadius: HEIGHT*0.01, paddingHorizontal: HEIGHT*0.008, paddingVertical: HEIGHT*0.008, backgroundColor: title===value?.Shopping ?colorMix.yellow_20 : colorMix.red_20 }}>

            <Image style={{ height: HEIGHT*0.02, width: HEIGHT*0.02 }}
            source={icon}/>
            </View>
            
            <Text style={{ color: colorMix.dark_100, fontWeight: '700', fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.022 }}>{title}</Text>
        </View>
    )
}

export default RenderBudgetItems