import React from 'react'
import { Image, Pressable, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';
import { bca_bank, chase_bank, citi_bank, jago_bank, mandiri_bank, paypal_bank, wallet_icon } from '../assets';
import { useNavigation } from '@react-navigation/native';

    const RenderAccountItems = ({data,darkMode}) => {

        const navigation = useNavigation();

        const { id,icon,name,amount,balance,bank } = data;
        const icons = {
            Paypal : paypal_bank,
            wallet: wallet_icon,
            citi: citi_bank,
            Chase: chase_bank,
            Jago: jago_bank,
            Mandiri: mandiri_bank,
            BCA: bca_bank
        }
        const selectedIcon = icons[bank]
    
        return(
            <Pressable onPress={()=>navigation.navigate('addaccount',{data})}
            style={{ flexDirection: 'row', paddingTop: HEIGHT*0.015, paddingBottom: HEIGHT*0.015, borderBottomWidth: 0.6, borderColor: colorMix.light_20 }}>

                <View style={{ height: HEIGHT*0.07, width: HEIGHT*0.07, borderRadius: HEIGHT*0.02, backgroundColor: colorMix.light_40, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={selectedIcon}/>
                </View>

                <Text style={{ alignSelf: 'center', marginLeft: WIDTH*0.03, fontSize: HEIGHT*0.027, fontWeight: 500, color: darkMode?colorMix.light_100:colorMix.dark_100 }}>{bank}</Text>

                <Text style={{ alignSelf: 'center', fontSize: HEIGHT*0.027, fontWeight: 500, marginLeft: 'auto', color: darkMode?colorMix.light_100:colorMix.dark_100 }}>{balance}</Text>
            </Pressable>
        )
    }

export default RenderAccountItems