import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';
import { plus_icon_tab } from '../assets';

const RenderTabBar = ({ data, isFocused, index }) => {

    const [centerTab, setCenterTab] = useState(false);
    const { id, logo, title, route } = data;
    const navigation = useNavigation();

    return (
        <>
            {id === 2 ?
                <>
                    <View style={{ borderWidth: 1, position: 'absolute', bottom: HEIGHT * 0.3, height: HEIGHT * 0.1, width: HEIGHT * 0.1, zIndex: 1 }}></View>

                    <Pressable onPress={() => {
                        setCenterTab(!centerTab)
                        navigation.navigate('home', { centerTab: !centerTab })
                    }}
                    style={{ height: HEIGHT * 0.07, width: HEIGHT * 0.07, borderRadius: HEIGHT * 0.035, backgroundColor: colorMix.violet_100, justifyContent: 'center', alignItems: 'center' }}>

                        <Image style={{ height: HEIGHT * 0.033, width: HEIGHT * 0.033, transform: centerTab ? [{ rotate: '45deg' }] : [{ rotate: '0deg' }],}}
                        source={plus_icon_tab}/>
                    </Pressable>
                </>

                : <Pressable onPress={() => navigation.navigate(route)}
                style={{ alignItems: 'center', marginLeft: id !== 0 ? WIDTH * 0.03 : 0 }}>

                    <Image style={{ tintColor: isFocused ? colorMix.violet_100 : colorMix.light_20, height: id === 3 ? HEIGHT * 0.035 : HEIGHT * 0.037, padding: HEIGHT * 0.01, width: id === 4 ? HEIGHT * 0.03 : HEIGHT * 0.035 }}
                    source={logo} />
                    <Text style={{ fontSize: HEIGHT * 0.018, marginTop: HEIGHT * 0.006, color: isFocused ? colorMix.violet_100 : colorMix.dark_25 }}>{title}</Text>
                </Pressable>}
        </>
    )
}


export default RenderTabBar