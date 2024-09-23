import React from 'react'
import { FlatList, View } from 'react-native';
import RenderTabBar from './RenderTabBar';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';
import { tabBarData } from '../constants/dummyData';
import { useSelector } from 'react-redux';

const MyTabBar = ({ state, descriptors, navigation }) => {

    const darkMode = useSelector((state)=>state.mode.darkMode)

    return (
        <View style={{ height: HEIGHT * 0.1, backgroundColor: darkMode? colorMix.dark_50:colorMix.light_80, paddingHorizontal: WIDTH * 0.05, paddingVertical: HEIGHT * 0.012, }}>

            <FlatList contentContainerStyle={{ justifyContent: 'space-between', width: WIDTH * 0.9 }}
                horizontal
                data={tabBarData.map((item, index) => ({
                    ...item,
                    isFocused: state.index === index
                }))}
                renderItem={({ item, index }) => {
                    let isFocused;
                    if (index < 2) {
                        isFocused = state.index === index;
                    } else {
                        isFocused = state.index === index - 1;
                    }

                    return (
                        <RenderTabBar data={item} isFocused={isFocused} />
                    );
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default MyTabBar