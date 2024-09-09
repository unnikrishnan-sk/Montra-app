import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { email_sent } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import { colorMix } from '../constants/color'
import { useNavigation } from '@react-navigation/native'

const PasswordEmail = () => {

    const [timeoutid,setTimeoutid] = useState(null)
    const navigation = useNavigation();
    useEffect(()=>{
        const id = setTimeout(()=>{
            navigation.navigate('resetpass')
        },2000)
        setTimeoutid(id)

        return () => {
            clearTimeout(timeoutid);
        }
    },[])
    const handleEmailBtn = () => {
        if(timeoutid){
            clearTimeout(timeoutid)
        }
        navigation.navigate('login')
    }
    
  return (
    <View style={{ backgroundColor: colorMix.light_100, height: HEIGHT }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT*0.12 }}>
        <Image style={{ height: HEIGHT*0.25, width: HEIGHT*0.4 }} source={email_sent}/>
        </View>
        <Text style={{ fontSize: HEIGHT*0.03, fontWeight: '600', alignSelf: 'center', marginTop: HEIGHT*0.1, color:colorMix.dark_100 }}>Your email is on the way</Text>
        <Text style={{ alignSelf: 'center', textAlign: 'center', width: WIDTH*0.65, marginTop: HEIGHT*0.03, color: colorMix.dark_100 }}>Check your email test@test.com and follow the instructions to reset your password</Text>
        <View style={{ position: 'absolute', bottom: HEIGHT*0.072, left: 0, right: 0, paddingHorizontal: WIDTH*0.05 }}>
            <ButtonComponent title="Back to Login" onButtonHandler={handleEmailBtn}/>
        </View>
        <BottomSlider />
    </View>
  )
}

export default PasswordEmail