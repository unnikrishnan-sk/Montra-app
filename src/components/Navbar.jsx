import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { back_arrow } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'
import { colorMix } from '../constants/color'

const Navbar = () => {

    const navigation = useNavigation();

  return (
    <View>
        <View style={{
            paddingTop: HEIGHT*0.05,
            paddingHorizontal: WIDTH*0.05,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Pressable onPress={()=>navigation.goBack()}>
        <Image 
        style={{
            height: HEIGHT*0.02,
            width: HEIGHT*0.03
        }}
        source={back_arrow}
        />
        </Pressable>
        <Text style={{
            fontSize: HEIGHT*0.023,
            fontWeight: 500,
            color: colorMix.dark_100
        }}>Sign Up</Text>
        <View></View>
        </View>
        
    </View>
  )
}

export default Navbar