import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { edit_icon, profilepic } from '../assets'
import { colorMix } from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import RenderProfileItems from '../components/RenderProfileItems'
import { profileDatas } from '../constants/dummyData'

const ProfileScreen = () => {

    const navigation = useNavigation();

  return (
    <>
        <View style={{ paddingTop: HEIGHT*0.05, alignItems: 'center', flexDirection: 'row', paddingHorizontal: WIDTH*0.05 }}>
            
            <Image style={{ height: HEIGHT*0.09, width: HEIGHT*0.09 }}
                source={profilepic} />

            <View style={{ marginLeft: WIDTH*0.05 }}>
                <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.02
                }}>Username</Text>

                <Text style={{ color: colorMix. dark_100, fontWeight: 500, fontSize: HEIGHT*0.025, marginTop: HEIGHT*0.01
                }}>Iriana Saliha</Text>
            </View>

            <Image 
            style={{ marginLeft: WIDTH*0.35 }}
            source={edit_icon}/>
        </View>

        <View style={{ paddingTop: HEIGHT*0.05, paddingHorizontal: WIDTH*0.05 }}>
            <View style={{ borderRadius: HEIGHT*0.02 }}>
                <FlatList contentContainerStyle={{ borderRadius: HEIGHT*0.02 }}
                    data={profileDatas}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=><RenderProfileItems data={item} navigation={navigation}/> }
                    keyExtractor={item=>item.id}/>
            </View>      
        </View>
    </>
  )
}

export default ProfileScreen