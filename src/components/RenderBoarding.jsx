import React from 'react'
import { Image, Text, View } from 'react-native';
import { colorMix } from '../constants/color';
import { HEIGHT, WIDTH } from '../constants/dimension';

const RenderBoarding = ({data, index, darkMode}) => {
  
    const { id, image, heading, desc } = data;
    const isSelected = id === index+1

    return(
        <View style={{ backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100, alignItems: 'center', justifyContent: 'center', width: WIDTH, paddingTop: HEIGHT*0.03 }}>

        <Image style={{ height: HEIGHT*0.33, width: HEIGHT*0.42 }}
        source={image} />

        <View style={{ paddingHorizontal: WIDTH*0.1, marginTop: HEIGHT*0.02, width: WIDTH*0.9 }}>

        <Text style={{ fontSize: HEIGHT*0.04, fontWeight: '700', textAlign: 'center', color: darkMode ? colorMix.light_100 : colorMix.dark_100
        }}>{heading}</Text>

        <Text style={{ fontSize: HEIGHT*0.022, textAlign: 'center', marginTop: HEIGHT*0.03, color: colorMix.dark_25, fontWeight: 500
        }}>{desc}</Text>
        
         </View>
        </View>
  )
}

export default RenderBoarding