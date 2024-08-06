import React from 'react'
import { Text, View } from 'react-native';
import { HEIGHT } from '../constants/dimension';
import { colorMix } from '../constants/color';

const RenderDetailItems = ({data}) => {
// console.log(data.transactionDet);
    const {id, name, value } = data;
  
    return (
        <View 
        key={id}
        style={{
            // borderWidth:1,
            // width: WIDTH*0.8,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <Text style={{
            marginBottom: HEIGHT*0.01,
            color: colorMix.dark_25,
            fontSize: HEIGHT*0.02
        }}>{name}</Text>
        <Text style={{
            fontSize: HEIGHT*0.022,
            fontWeight: 500,
            color: colorMix.dark_100
        }}>{value}</Text>
        </View>
    )
  
}

export default RenderDetailItems