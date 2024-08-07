import React, { useCallback, useRef, useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { onboardData } from '../constants/dummyData'
import { useNavigation } from '@react-navigation/native'
import BottomSlider from '../components/BottomSlider'

const RenderBoading = ({data, index}) => {

    const { id, image, heading, desc } = data;
    const isSelected = id === index+1

    return(
        <View style={{
            backgroundColor: colorMix.light_100,
            alignItems: 'center',
            justifyContent: 'center',
            width: WIDTH,
            paddingTop: HEIGHT*0.03
        }}>
        <Image 
        style={{
            height: HEIGHT*0.33,
            width: HEIGHT*0.42
        }}
        source={image}
        />
        <View style={{
            // borderWidth:1,
            paddingHorizontal: WIDTH*0.1,
            marginTop: HEIGHT*0.02,
            width: WIDTH*0.9
        }}>
        <Text style={{
            fontSize: HEIGHT*0.04,
            fontWeight: '700',
            textAlign: 'center',
            color: colorMix.dark_100
        }}>{heading}</Text>
        <Text style={{
            fontSize: HEIGHT*0.022,
            textAlign: 'center',
            marginTop: HEIGHT*0.03,
            color: colorMix.dark_25,
            fontWeight: 500
        }}>{desc}</Text>
         </View>
        </View>
    )
}

const Pagination = ({index}) => {
    return(
        <View style={{
            flexDirection: 'row',
            // borderWidth:1,
            // marginBottom: HEIGHT*0.01,
            height: HEIGHT*0.05,
            width: WIDTH*0.4,
            // marginTop: HEIGHT*0.01,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
            onboardData.map((_,i)=>{
            return(
                <View
                key={i}>
                    {index === i ? (
                <View style={{
                        backgroundColor: colorMix.violet_100,
                        height: HEIGHT*0.021,
                        width: HEIGHT*0.021,
                        borderRadius: HEIGHT*0.021,
                        marginLeft: WIDTH*0.04
                    }}></View>
                            ) : (
                    <View style={{
                        backgroundColor: colorMix.violet_20,
                         height: HEIGHT*0.011,
                        width: HEIGHT*0.011,
                        borderRadius: HEIGHT*0.01,
                    marginLeft: WIDTH*0.04
                    }}></View>
                            )}
                        </View>
                    )})
            }
        </View>
    )
}

const OnboardingScreen = () => {

    const [index, setIndex] = useState(0);
    const flatListRef = useRef(null);

    const navigation = useNavigation();

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
    <View style={{
        // borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: HEIGHT,
        backgroundColor: colorMix.light_100
    }}>
        <FlatList 
        data={onboardData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><RenderBoading data={item} index={index}/> }
        // ref={flatListRef}
        keyExtractor={item=>item.id}
        onScroll={onScroll}
        />
       
        <Pagination index={index} />
       
        <Pressable 
        onPress={()=>navigation.navigate('signup')}
        style={{
            // borderWidth:1,
            paddingHorizontal: WIDTH*0.05,
            paddingLeft: WIDTH*0.35,
            paddingRight: WIDTH*0.35,
            paddingTop: HEIGHT*0.022,
            paddingBottom: HEIGHT*0.022,
            borderRadius: HEIGHT*0.025,
            marginTop: HEIGHT*0.01,
            backgroundColor: colorMix.violet_100
        }}><Text style={{
            color: colorMix.light_100,
            fontSize: HEIGHT*0.025,
            fontWeight: '600'
        }}>Sign Up</Text></Pressable>
        <Pressable 
        onPress={()=>navigation.navigate('login')}
        style={{
            // borderWidth:1,
            paddingLeft: WIDTH*0.38,
            paddingRight: WIDTH*0.38,
            paddingTop: HEIGHT*0.022,
            paddingBottom: HEIGHT*0.022,
            borderRadius: HEIGHT*0.025,
            marginTop: HEIGHT*0.02,
            backgroundColor: colorMix.violet_20,
            marginBottom: HEIGHT*0.08
        }}><Text 
        style={{
            color: colorMix.violet_100,
            fontSize: HEIGHT*0.025,
            fontWeight: '600'
        }}>Login</Text></Pressable>
        <BottomSlider />
    </View>
  )
}

export default OnboardingScreen