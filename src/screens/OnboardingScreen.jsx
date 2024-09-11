import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { onboardData } from '../constants/dummyData'
import { useNavigation } from '@react-navigation/native'
import BottomSlider from '../components/BottomSlider'
import { useSelector } from 'react-redux'
import RenderBoarding from '../components/RenderBoarding'
import Pagination from '../components/Pagination'

const OnboardingScreen = () => {

    const [index, setIndex] = useState(0);
    const flatListRef = useRef(null);
    const navigation = useNavigation();
    const darkMode = useSelector((state)=>state.mode.darkMode)

    const onScroll = useCallback((event)=>{
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize*1.1;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex-index);
        const isNoMansLand = 0.3 < distance;
        if( roundIndex !== flatListRef.current && !isNoMansLand){
            setIndex(roundIndex);
            flatListRef?.current?.scrollToIndex({
                index: roundIndex,
            })
        }
    },[]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', height: HEIGHT, backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100 }}>

        <FlatList 
            data={onboardData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=><RenderBoarding data={item} index={index} darkMode={darkMode}/> }
            keyExtractor={item=>item.id}
            onScroll={onScroll} />
       
        <Pagination index={index} />
       
        <Pressable onPress={()=>navigation.navigate('signup')}
        style={{ paddingHorizontal: WIDTH*0.05, paddingLeft: WIDTH*0.35, paddingRight: WIDTH*0.35, paddingTop: HEIGHT*0.022, paddingBottom: HEIGHT*0.022, borderRadius: HEIGHT*0.025, marginTop: HEIGHT*0.01, backgroundColor: colorMix.violet_100
        }}>
            <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.025, fontWeight: '600'
        }}>Sign Up</Text>
        </Pressable>

        <Pressable onPress={()=>navigation.navigate('login')}
        style={{ paddingLeft: WIDTH*0.38, paddingRight: WIDTH*0.38, paddingTop: HEIGHT*0.022, paddingBottom: HEIGHT*0.022, borderRadius: HEIGHT*0.025, marginTop: HEIGHT*0.02, backgroundColor: colorMix.violet_20, marginBottom: HEIGHT*0.08}}>
            <Text style={{ color: colorMix.violet_100, fontSize: HEIGHT*0.025, fontWeight: '600'
        }}>Login</Text>
        </Pressable>

        <BottomSlider darkMode={darkMode}/>
    </View>
  )
}

export default OnboardingScreen