import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import { attachment_icon, transfer_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';

const TransferScreen = () => {

  const [transferData,setTransferData] = useState(
    {
      amount: '',
      fromAccount: '',
      toAccount: '',
      description: ''
    }
  )
  const darkMode = useSelector((state)=>state.mode.darkMode)
  const navigation = useNavigation();

  const handleTextInputChange = (key,value) => {
    setTransferData(prevState => ({
        ...prevState,
        [key]: value
    }))
}

const handleTransfer = async () => {
  try {
    await firestore().collection('Transfers').add(transferData);
    navigation.navigate('myTabs')
} catch (error) {
    console.log("error_handleTransfer", error);
}
}

  return (
    <View style={{backgroundColor: colorMix.blue_100, height: HEIGHT}}>
        <Navbar title="Transfer" titleColor={colorMix.light_100}/>

        <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.25, }}>
        <Text style={{ color: colorMix.light_20, fontWeight: '500', fontSize: HEIGHT*0.024 }}>How much?</Text>
        <View style={{ flexDirection: 'row',alignItems: 'center'}}>

          <Text style={{color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight:'600'}}>$</Text>

        <TextInput style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: '600' }}
        placeholder='0'
        placeholderTextColor={colorMix.light_100}
        onChangeText={(text)=>handleTextInputChange('amount',text)}
        value={transferData?.amount}
        />
        </View>
    </View>

    <View style={{ backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01}}>

      <View style={{ height: HEIGHT*0.05, marginTop: HEIGHT*0.04, paddingHorizontal: WIDTH*0.05, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

      <TextInput style={{ borderWidth: 1, borderColor: colorMix.light_20, height: HEIGHT*0.07, width: WIDTH*0.44, borderRadius: HEIGHT*0.02, paddingLeft: WIDTH*0.035 }}
      placeholder='From'
      onChangeText={(text)=>handleTextInputChange('fromAccount',text)}
      placeholderTextColor={colorMix.dark_25} 
      color={darkMode?colorMix.light_100:colorMix.dark_100}/>

      <View style={{ position: 'absolute', marginLeft: WIDTH*0.48, borderWidth: 1, height: HEIGHT*0.05, width: HEIGHT*0.05, borderRadius: HEIGHT*0.03, justifyContent: 'center', alignItems: 'center', zIndex: 1, backgroundColor: colorMix.light_80, borderColor: colorMix.light_20 }}>

        <Image style={{ height: HEIGHT*0.02, width: HEIGHT*0.025 }} 
        source={transfer_icon} />
      </View>

      <TextInput style={{ borderWidth: 1, borderColor: colorMix.light_20, marginLeft: WIDTH*0.022, height: HEIGHT*0.07, width: WIDTH*0.44, borderRadius: HEIGHT*0.02, paddingLeft: WIDTH*0.04 }}
      placeholder='To'
      onChangeText={(text)=>handleTextInputChange('toAccount',text)}
      placeholderTextColor={colorMix.dark_25} 
      color={darkMode?colorMix.light_100:colorMix.dark_100}/>
      </View>

      <InputComponent placeholder="Description" onChangeText={(text)=>handleTextInputChange('description',text)} darkMode={darkMode}/>

      <View style={{ paddingHorizontal: WIDTH*0.05 }}>
      <View style={{ borderWidth: 1, borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </View>
        </View>

        <View style={{ marginTop:HEIGHT*0.1, height: HEIGHT*0.2, paddingHorizontal: WIDTH*0.05 }}> 
        <ButtonComponent onButtonHandler={()=>handleTransfer()} title="Continue"/>
        </View>
    </View>
    
   <BottomSlider />
    </View>
  )
}

export default TransferScreen