import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { back_arrow, back_arrow_white } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useNavigation } from '@react-navigation/native'
import { colorMix } from '../constants/color'

const Navbar = ({title,titleColor,image_source}) => {

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
        source={titleColor ? back_arrow_white : back_arrow}
        />
        </Pressable>
        <Text style={{
            fontSize: HEIGHT*0.023,
            fontWeight: 500,
            color: titleColor ? titleColor : colorMix.dark_100
        }}>{title}</Text>
        <View>
        <Image 
        style={{
            height: HEIGHT*0.02,
            width: HEIGHT*0.03
        }}
        source={image_source}
        />
        </View>
        </View>
        
    </View>
  )
}

export default Navbar