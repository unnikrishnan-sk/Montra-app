import React from 'react'
import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { account_background, chase_bank, citi_bank, paypal_bank, wallet_icon } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import RenderAccountItems from '../components/RenderAccountItems'
import { accountData } from '../constants/dummyData'
import { useNavigation } from '@react-navigation/native'

const AccountScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={{
        height: HEIGHT,
        backgroundColor: colorMix.light_100
    }}>
        <Navbar title="Account"/>
        <ImageBackground 
        style={{
            height: HEIGHT*0.28,
            marginTop: HEIGHT*0.03
        }}
        source={account_background}>
            <Text style={{
                alignSelf: 'center',
                marginTop: HEIGHT*0.06,
                color: colorMix.dark_25
            }}>Account Balance</Text>
            <Text style={{
                fontSize: HEIGHT*0.05,
                fontWeight: 600,
                alignSelf: 'center',
                marginTop: HEIGHT*0.01
            }}>$9400</Text>
        </ImageBackground>

            <View style={{
                // borderWidth: 1,
                // height: HEIGHT*0.5,
                paddingHorizontal: WIDTH*0.05
            }}>
                <FlatList
                contentContainerStyle={{
                    // borderWidth: 1,
                    borderRadius: HEIGHT*0.02
                }}
                data={accountData}
                showsVerticalScrollIndicator={false}
                renderItem={({item})=><RenderAccountItems data={item} navigation={navigation}/> }
                keyExtractor={item=>item.id}
                /> 
            </View>
            <View style={{
                paddingHorizontal: WIDTH*0.05,
                position: 'absolute',
                width: WIDTH,
                bottom: HEIGHT*0.07
            }}>
            <ButtonComponent title="+ Add new wallet"/>
            </View>
            <BottomSlider />
    </View>
  )
}

export default AccountScreen
