import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { edit_icon, edit_icon_white, profilepic } from '../assets'
import { colorMix } from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import RenderProfileItems from '../components/RenderProfileItems'
import { profileDatas } from '../constants/dummyData'
import { useSelector } from 'react-redux'

const ProfileScreen = () => {

    const darkMode = useSelector((state)=>state.mode.darkMode)
    const navigation = useNavigation();

  return (
    <>
        <View style={{ paddingTop: HEIGHT*0.05, alignItems: 'center', flexDirection: 'row', paddingHorizontal: WIDTH*0.05, backgroundColor: darkMode?colorMix.dark_100:colorMix.light_100, }}>
            
            <Image style={{ height: HEIGHT*0.09, width: HEIGHT*0.09 }}
                source={profilepic} />

            <View style={{ marginLeft: WIDTH*0.05 }}>
                <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.02
                }}>Username</Text>

                <Text style={{ color: darkMode?colorMix.light_100:colorMix. dark_100, fontWeight: 500, fontSize: HEIGHT*0.025, marginTop: HEIGHT*0.01
                }}>Iriana Saliha</Text>
            </View>

            <Image 
            style={{ marginLeft: WIDTH*0.35, height: HEIGHT*0.04,width: WIDTH*0.065 }}
            source={darkMode? edit_icon_white: edit_icon}/>
        </View>

        <View style={{ paddingTop: HEIGHT*0.05, paddingHorizontal: WIDTH*0.05, height:HEIGHT, backgroundColor: darkMode?colorMix.dark_100:colorMix.light_100}}>
            <View style={{ borderRadius: HEIGHT*0.02 }}>
                <FlatList contentContainerStyle={{ borderRadius: HEIGHT*0.02 }}
                    data={profileDatas}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=><RenderProfileItems data={item} navigation={navigation} darkMode={darkMode}/> }
                    keyExtractor={item=>item.id}/>
            </View>      
        </View>
    </>
  )
}

export default ProfileScreen