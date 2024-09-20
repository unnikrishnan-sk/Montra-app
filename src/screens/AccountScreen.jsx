import React, { useEffect, useState } from 'react'
import { FlatList, ImageBackground, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { account_background } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import RenderAccountItems from '../components/RenderAccountItems'
import { useNavigation } from '@react-navigation/native'
import { accountBal, allAccounts } from '../http/api'
import { useSelector } from 'react-redux'

const AccountScreen = () => {

  const darkMode = useSelector((state)=>state.mode.darkMode)
  const [allData,setAllData] = useState([]);
  const [balTotal,setBalTotal] = useState();
  const navigation = useNavigation();

  useEffect(()=>{
    getData();
  },[])

  const getData = async () => {
      const accountData = await allAccounts();
      setAllData(accountData)
      const accountBalance_av = await accountBal();
      setBalTotal(accountBalance_av)
  }  

  return (
    <View style={{ height: HEIGHT, backgroundColor: darkMode?colorMix.dark_100:colorMix.light_100 }}>

        <Navbar title="Account" darkMode={darkMode}/>

        <ImageBackground style={{ height: HEIGHT*0.28, marginTop: HEIGHT*0.03 }}
        source={account_background}>

            <Text style={{ alignSelf: 'center', marginTop: HEIGHT*0.06, color: darkMode?colorMix.light_20: colorMix.dark_25
            }}>Account Balance</Text>

            <Text style={{ fontSize: HEIGHT*0.05, fontWeight: 700, alignSelf: 'center', marginTop: HEIGHT*0.01, color: darkMode?colorMix.light_100:colorMix.dark_100
            }}>${balTotal}</Text>
        </ImageBackground>

            <View style={{ paddingHorizontal: WIDTH*0.05 }}>

                <FlatList contentContainerStyle={{ borderRadius: HEIGHT*0.02 }}
                    data={allData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=><RenderAccountItems data={item} navigation={navigation} darkMode={darkMode}/> }
                    keyExtractor={item=>item.id}/> 
            </View>

            <View style={{ paddingHorizontal: WIDTH*0.05, position: 'absolute', width: WIDTH, bottom: HEIGHT*0.07 }}>
            <ButtonComponent onButtonHandler={()=>navigation.navigate('addaccount')} title="+ Add new wallet"/>
            </View>
            <BottomSlider />
    </View>
  )
}

export default AccountScreen
