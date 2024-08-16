import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { edit_icon, paypal_bank } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import RenderTransactionItems from '../components/RenderTransactionItems'
import { allTransactionData, recentTransactionData } from '../constants/dummyData'
import RecentTransaction from '../components/RecentTransaction'

const DetailAccountScreen = () => {
  return (
    <View style={{
        height: HEIGHT,
        backgroundColor: colorMix.light_100
    }}>
        <Navbar title="Detail Account" image_source={edit_icon} trash_height={HEIGHT*0.03} trash_width={HEIGHT*0.03}/>

        <View style={{
            // borderWidth: 1,
            // height: HEIGHT*0.3,
            marginTop: HEIGHT*0.07,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                // borderWidth: 1,
                height: HEIGHT*0.07,
                width: HEIGHT*0.07,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: HEIGHT*0.022,
                backgroundColor: colorMix.light_40
            }}>
            <Image 
            source={paypal_bank}/>
            </View>
            <Text style={{
                fontSize: HEIGHT*0.032,
                marginTop: HEIGHT*0.01,
                fontWeight: 600
            }}>Paypal</Text>
            <Text style={{
                fontSize: HEIGHT*0.04,
                fontWeight: 700,
                marginTop: HEIGHT*0.015
            }}>$2400</Text> 
        </View>

        <Text style={{
            marginTop: HEIGHT*0.02,
            marginLeft: WIDTH*0.05,
            fontSize: HEIGHT*0.022,
            fontWeight: '500'
        }}>Today</Text>


        <FlatList 
        data={allTransactionData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderTransactionItems data={item}/> }
        keyExtractor={item=>item.id}
        />
    </View>
  )
}

export default DetailAccountScreen