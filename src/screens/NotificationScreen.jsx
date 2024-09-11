import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT } from '../constants/dimension'
import BottomSlider from '../components/BottomSlider'
import { more_icon } from '../assets'
import { notificationData } from '../constants/dummyData'
import { useSelector } from 'react-redux'
import RenderNotificationItems from '../components/RenderNotificationItems'

const NotificationScreen = () => {

    const darkMode = useSelector((state)=>state.mode.darkMode)

  return (
    <View style={{ backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100, height: HEIGHT }}>

    <Navbar title="Notification" image_source={more_icon} darkMode={darkMode}/>

    {notificationData.length >0 ? (
        <FlatList
            data={notificationData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><RenderNotificationItems data={item} darkMode={darkMode}/> }
            keyExtractor={item=>item.id}/>
        ) : (
        <View style={{ alignItems: 'center', marginTop: HEIGHT*0.4 }}>

    <Text style={{ color: darkMode ? colorMix.light_80 : colorMix.dark_25
    }}>There is no notification for you now</Text>

    </View>
    )}
    <BottomSlider darkMode={darkMode}/>
    </View>
  )
}

export default NotificationScreen