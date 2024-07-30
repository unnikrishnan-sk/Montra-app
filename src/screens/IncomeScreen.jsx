import React, { useState } from 'react'
import { Image, Switch, Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import Navbar from '../components/Navbar'
import DropdownComponent from '../components/DropdownComponent'
import { incomeCategoryType, walletType } from '../constants/dummyData'
import InputComponent from '../components/InputComponent'
import { attachment_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'

const IncomeScreen = () => {

  const [incomeData,setIncomeData] = useState({});
    const [error,setError] = useState({})
    const [category,setCategory] = useState()
    const [wallet,setWallet] = useState()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
   <View style={{ backgroundColor: colorMix.green_100, height: HEIGHT }}>
    <Navbar title="Income" titleColor={colorMix.light_100}/>
    <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.12 }}>
        <Text style={{ color: colorMix.light_20, fontWeight: 500, fontSize: HEIGHT*0.024 }}>How much?</Text>
        <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: 600 }}>$0</Text>
    </View>
    <View style={{ backgroundColor: colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01 }}>
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <DropdownComponent value={category} setValue={setCategory} title="Category" data={incomeCategoryType}/>
        </View>
        <InputComponent placeholder="Description"/>
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <DropdownComponent value={wallet} setValue={setWallet} title="Wallet" data={walletType}/>
        <View style={{ borderWidth: 1, borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
        <Text style={{ marginTop: HEIGHT*0.03, fontSize: HEIGHT*0.024 }}>Repeat</Text>
        <Text style={{ fontSize: HEIGHT*0.02, color: colorMix.dark_25, marginTop: HEIGHT*0.01 }}>Repeat transaction</Text>
        </View>
        <Switch style={{transform: [{scaleX: .8}, {scaleY: .8}]}} trackColor={{false: colorMix.violet_20, true: colorMix.violet_100}} thumbColor={isEnabled ? colorMix.green_100 : colorMix.light_100} onValueChange={toggleSwitch} value={isEnabled} />
        </View>
        </View>
        <View style={{ marginTop: HEIGHT*0.03, height: HEIGHT*0.2 }}>
        <ButtonComponent title="Continue"/>
        </View>  
    </View>
    <BottomSlider />
   </View>
  )
}

export default IncomeScreen