import React, { useEffect } from 'react'
import { Image, Platform, Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { ellipse } from '../assets'
import { useNavigation } from '@react-navigation/native'
import BottomSlider from '../components/BottomSlider'

const LaunchScreen = () => {

  
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('onboard')
        },2000)
    },[]);

  return (
    <View style={{ height: HEIGHT, backgroundColor: colorMix.violet_100, alignItems: 'center', justifyContent:'center' }}>
        <Image style={{ position: 'absolute', paddingRight: WIDTH*0.4, left: 0, marginLeft: WIDTH*0.22, tintColor: '#F652FF' }}
        source={ellipse} />
        <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.09, fontWeight: '700' }}>montra</Text>
       
       <View style={{ position: 'absolute', bottom: Platform.OS=="ios"? HEIGHT*0.02: HEIGHT*0.05, backgroundColor: colorMix.light_100, height: HEIGHT*0.008, width: WIDTH*0.4, borderRadius: HEIGHT*0.3 }}></View>
       <BottomSlider color={colorMix.light_100}/>
    </View>
  )
}

export default LaunchScreen