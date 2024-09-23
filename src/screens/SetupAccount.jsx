import React from 'react'
import { Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const SetupAccount = () => {

    const darkMode = useSelector((state)=>state.mode.darkMode)
    const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: darkMode? colorMix.dark_100: colorMix.light_100, height: HEIGHT, paddingTop: HEIGHT*0.15, paddingHorizontal: WIDTH*0.05 }}>
    <Text style={{ fontSize: HEIGHT*0.046, width: WIDTH*0.7, fontWeight: '500', color: darkMode? colorMix.light_100:colorMix.dark_100 }}>Let's setup your account!</Text>

    <Text style={{ width: WIDTH*0.7, marginTop: HEIGHT*0.05, fontSize: HEIGHT*0.02, color: darkMode?colorMix.light_100:colorMix.dark_100, fontWeight: '500' }}>Account can be your bank, credit card or your wallet.</Text>

    <View style={{ position: 'absolute', bottom: HEIGHT*0.08, right: 0, left: 0, paddingHorizontal: WIDTH*0.05}}>
        
    <ButtonComponent title="Let's go" onButtonHandler={()=>navigation.navigate('addaccount')}/>
    </View>
    <BottomSlider />
    </View>
  )
}

export default SetupAccount