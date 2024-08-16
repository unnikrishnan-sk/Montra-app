import React from 'react'
import { Image, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';

    const RenderAccountItems = ({data}) => {

        const { id,icon,name,amount } = data;
    
        return(
            <View style={{
                // borderWidth: 1,
                flexDirection: 'row',
                paddingTop: HEIGHT*0.015,
                paddingBottom: HEIGHT*0.015,
                borderBottomWidth: 0.6,
                borderColor: colorMix.light_20
                // paddingTop: HEIGHT*0.02
            }}>
                <View style={{
                    height: HEIGHT*0.07,
                    // borderWidth: 1,
                    width: HEIGHT*0.07,
                    borderRadius: HEIGHT*0.02,
                    backgroundColor: colorMix.light_40,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image 
                    source={icon}/>
                </View>
                <Text style={{
                    alignSelf: 'center',
                    marginLeft: WIDTH*0.03,
                    fontSize: HEIGHT*0.027,
                    fontWeight: 500
                }}>{name}</Text>
                <Text style={{
                    alignSelf: 'center',
                    // marginLeft: WIDTH*0.45,
                    fontSize: HEIGHT*0.027,
                    fontWeight: 500,
                    marginLeft: 'auto'
                }}>{amount}</Text>
            </View>
        )
    }

export default RenderAccountItems