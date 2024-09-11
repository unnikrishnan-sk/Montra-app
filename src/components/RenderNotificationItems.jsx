import React from 'react'
import { Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';

    const RenderNotificationItems = ({data, darkMode}) => {

        const {id,title,desc,time} = data;
    
        return(
            <>
             <View style={{ height: HEIGHT*0.1, marginTop: HEIGHT*0.025, flexDirection: 'row', paddingHorizontal: WIDTH*0.05, alignItems: 'center', justifyContent: 'space-between' }}>
    
                <View>
                <Text 
                numberOfLines={1}
                style={{ fontSize: HEIGHT*0.025, fontWeight: '500', width: WIDTH*0.75, color: darkMode ? colorMix.light_100 : colorMix.dark_100
                }}>{title}</Text>
    
                <Text 
                numberOfLines={1}
                style={{ fontSize: HEIGHT*0.02, marginTop: HEIGHT*0.01, color: colorMix.dark_25, width: WIDTH*0.75
                }}>{desc}</Text>
                </View>
                
                <Text style={{ fontSize: HEIGHT*0.021, color: colorMix.dark_25, fontWeight: '500'
                }}>{time}</Text>
            </View>
            </>
    )
}

export default RenderNotificationItems