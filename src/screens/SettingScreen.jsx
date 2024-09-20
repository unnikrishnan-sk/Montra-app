import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { right_arrow } from '../assets'
import { useNavigation } from '@react-navigation/native'
import { settingsData } from '../constants/dummyData'
import { useSelector } from 'react-redux'

const RenderSettings = ({data,darkMode,navigation}) => {

    const { id,name,type,route} = data;

    const settingValue = {"currency" : "Currency", "Language": "language", "Theme": "theme", "Security": "security","Notification": "notification", "about": "About", "Help": "help"}

    return(
        <View style={{ borderTopWidth: id===0 ? 1 : 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: WIDTH*0.05, marginTop: name===settingValue.currency || name===settingValue.about ?  HEIGHT*0.04 : 0, paddingVertical: HEIGHT*0.02, borderColor: colorMix.light_20 }}>

            <Text style={{ fontSize: HEIGHT*0.024, fontWeight: 500, color: darkMode ? colorMix.light_100 : colorMix.dark_100
            }}>{name}</Text>

            <Pressable onPress={()=>navigation.navigate(route)}
            style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Text style={{ fontSize: HEIGHT*0.023, color: colorMix.dark_25
            }}>{name==="Theme" && darkMode===true ? "Dark" : type}</Text>

            <Image 
            style={{ marginLeft: WIDTH*0.02, height: HEIGHT*0.02, width: HEIGHT*0.01 }}
            source={right_arrow}/>

            </Pressable>
             </View>
    )}

const SettingScreen = () => {

  const darkMode = useSelector((state)=>state.mode.darkMode)
  const navigation = useNavigation();

  return (
    <View style={{ height: HEIGHT, backgroundColor:darkMode? colorMix.dark_100: colorMix.light_100 }}>

        <Navbar title="Settings" darkMode={darkMode}/>

        <FlatList
            data={settingsData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><RenderSettings data={item} darkMode={darkMode} navigation={navigation} /> }
            keyExtractor={item=>item.id}/>
       
    </View>
  )}

export default SettingScreen