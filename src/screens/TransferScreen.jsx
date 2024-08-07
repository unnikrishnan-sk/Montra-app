import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import { attachment_icon, transfer_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'

const TransferScreen = () => {
  return (
    <View style={{backgroundColor: colorMix.blue_100, height: HEIGHT}}>
        <Navbar title="Transfer" titleColor={colorMix.light_100}/>
        <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.3 }}>
        <Text style={{ color: colorMix.light_20, fontWeight: '500', fontSize: HEIGHT*0.024 }}>How much?</Text>
        <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: '600' }}>$0</Text>
    </View>
    <View style={{ backgroundColor: colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01 }}>
      <View style={{
        height: HEIGHT*0.07,
        marginTop: HEIGHT*0.04,
        paddingHorizontal: WIDTH*0.05,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <TextInput style={{
        borderWidth: 1,
        borderColor: colorMix.light_20,
        height: HEIGHT*0.07,
        width: WIDTH*0.44,
        borderRadius: HEIGHT*0.02,
        paddingLeft: WIDTH*0.035
      }}
      placeholder='From'
      placeholderTextColor={colorMix.dark_25}
      />
      <View style={{
        position: 'absolute',
        marginLeft: WIDTH*0.48,
        borderWidth: 1,
        height: HEIGHT*0.05,
        width: HEIGHT*0.05,
        borderRadius: HEIGHT*0.03,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: colorMix.light_80,
        borderColor: colorMix.light_20
      }}>
        <Image
        style={{
          height: HEIGHT*0.02,
          width: HEIGHT*0.025
        }} 
        source={transfer_icon}
        />
      </View>
      <TextInput style={{
        borderWidth: 1,
        borderColor: colorMix.light_20,
        marginLeft: WIDTH*0.022,
        height: HEIGHT*0.07,
        width: WIDTH*0.44,
        borderRadius: HEIGHT*0.02,
        paddingLeft: WIDTH*0.04
      }}
      placeholder='To'
      placeholderTextColor={colorMix.dark_25}
      />
      </View>
      <InputComponent placeholder="Description"/>
      <View style={{
        paddingHorizontal: WIDTH*0.05
      }}>
      <View style={{ borderWidth: 1, borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </View>
        </View>
        <View style={{
          marginTop:HEIGHT*0.04,
          height: HEIGHT*0.2
        }}> 
        <ButtonComponent title="Continue"/>
        </View>
        
    </View>
   <BottomSlider />
    </View>
  )
}

export default TransferScreen