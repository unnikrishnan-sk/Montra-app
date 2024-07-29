import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import BottomSlider from '../components/BottomSlider'
import { more_icon } from '../assets'
import { notificationData } from '../constants/dummyData'

const RenderNotificationItems = ({data}) => {

    const {id,title,desc,time} = data;

    return(
        <>
         <View style={{
            // borderWidth:1,
            height: HEIGHT*0.1,
            marginTop: HEIGHT*0.025,
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05,
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <View style={{
                // flexDirection: 'row'
                // justifyContent: 'space-between'
            }}>
            <Text 
            numberOfLines={1}
            style={{
                fontSize: HEIGHT*0.025,
                fontWeight: 500,
                width: WIDTH*0.75,
                color: colorMix.dark_100
            }}>{title}</Text>
            <Text 
            numberOfLines={1}
            style={{
                fontSize: HEIGHT*0.02,
                marginTop: HEIGHT*0.01,
                color: colorMix.dark_25,
                width: WIDTH*0.75
            }}>{desc}</Text>
            </View>
            
            <Text style={{
                fontSize: HEIGHT*0.021,
                color: colorMix.dark_25,
                fontWeight: 500
            }}>{time}</Text>
        </View>
        </>
    )
}

const NotificationScreen = () => {
  return (
    <View style={{
        backgroundColor: colorMix.light_100,
        height: HEIGHT       
    }}>
        <Navbar title="Notification" image_source={more_icon}/>

{notificationData.length >0 ? (
 <FlatList
 data={notificationData}
 showsVerticalScrollIndicator={false}
 renderItem={({item})=><RenderNotificationItems data={item}/> }
 keyExtractor={item=>item.id}
 />
) : (
    <View style={{
        alignItems: 'center',
        marginTop: HEIGHT*0.4
    }}>
    <Text style={{
        color: colorMix.dark_25
    }}>There is no notification for you now</Text>
    </View>
)}
       
       <BottomSlider />
    </View>
  )
}

export default NotificationScreen