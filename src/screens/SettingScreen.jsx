import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { right_arrow } from '../assets'
import { useNavigation } from '@react-navigation/native'

const settingsData = [{id:0, name:"Currency", type: "USD"}, {id:1, name: "Language", type: "English"}, {id:2, name: "Theme", type: "Dark"}, {id:3, name: "Security", type:" Fingerprint"}, {id:4, name: "Notification"},{id:5, name: "About"}, {id:6, name: "Help"}]

const RenderSettings = ({data}) => {

    const { id,name,type } = data;

    const settingValue = {"currency" : "Currency", "Language": "language", "Theme": "theme", "Security": "security","Notification": "notification", "about": "About", "Help": "help"}

    const navigation = useNavigation();

    return(
        <View style={{
            borderTopWidth: id===0 ? 1 : 0,
            // borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: WIDTH*0.05,
            marginTop: name===settingValue.currency || name===settingValue.about ?  HEIGHT*0.04 : 0,
            // paddingTop: name===settingValue.About ? HEIGHT*0.03 : 0,
            paddingVertical: HEIGHT*0.02,
            borderColor: colorMix.light_20
        }}>
            <Text style={{
                fontSize: HEIGHT*0.024,
                fontWeight: 400
            }}>{name}</Text>

            <Pressable 
            onPress={()=>navigation.navigate('theme')}
            style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
            <Text style={{
                fontSize: HEIGHT*0.023,
                color: colorMix.dark_25
            }}>{type}</Text>
            <Image 
            style={{
                marginLeft: WIDTH*0.02,
                height: HEIGHT*0.02,
                width: HEIGHT*0.01
            }}
            source={right_arrow}
            />
            </Pressable>
             </View>
    )
}

const SettingScreen = () => {
  return (
    <View style={{
        height: HEIGHT,
        backgroundColor: colorMix.light_100
    }}>
        <Navbar title="Settings"/>

        <View style={{
            // borderWidth: 1
        }}>
             <FlatList
             contentContainerStyle={{
                // borderWidth: 1
             }}
        data={settingsData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderSettings data={item} /> }
        keyExtractor={item=>item.id}
        />
        </View>
       
    </View>
  )
}

export default SettingScreen