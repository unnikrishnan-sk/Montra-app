import React from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { account_wallet, edit_icon, logout_icon, profilepic, settings_icon, upload_icon } from '../assets'
import { colorMix } from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import RenderProfileItems from '../components/RenderProfileItems'
import { profileDatas } from '../constants/dummyData'

const ProfileScreen = () => {

    const navigation = useNavigation();

  return (
    <View >
        <View style={{
            // borderWidth: 1,
            // borderColor: colorMix.violet_100,
            paddingTop: HEIGHT*0.05,
            // justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05
        }}>
            {/* <View style={{
                borderWidth: 2,
                borderColor: colorMix.violet_100,
                height: HEIGHT*0.1,
                width: HEIGHT*0.1,
                borderRadius: HEIGHT*0.05
            }}> */}
                <Image 
                style={{
                    height: HEIGHT*0.09,
                    width: HEIGHT*0.09
                }}
                source={profilepic}
                />
            {/* </View> */}
            <View style={{
                marginLeft: WIDTH*0.05
            }}>
                <Text style={{
                    color: colorMix.dark_25,
                    fontSize: HEIGHT*0.02
                }}>Username</Text>
                <Text style={{
                    color: colorMix. dark_100,
                    fontWeight: 500,
                    fontSize: HEIGHT*0.025,
                    marginTop: HEIGHT*0.01
                }}>Iriana Saliha</Text>
            </View>
            <Image 
            style={{
                // alignItems: 'flex-end',
                // alignSelf: 'flex-end',
                marginLeft: WIDTH*0.35
            }}
            source={edit_icon}/>
        </View>

        <View style={{
            // borderWidth: 1,
            // height: HEIGHT*0.4,
            paddingTop: HEIGHT*0.05,
            paddingHorizontal: WIDTH*0.05,
            // borderRadius: HEIGHT*0.03
        }}>
            <View style={{
                // borderWidth: 1,
                borderRadius: HEIGHT*0.02
            }}>
                <FlatList
                contentContainerStyle={{
                    // borderWidth: 1,
                    borderRadius: HEIGHT*0.02
                }}
        data={profileDatas}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderProfileItems data={item} navigation={navigation}/> }
        keyExtractor={item=>item.id}
        />
        </View>
                
            {/* </View> */}
        </View>
        {/* <Text>Profile</Text> */}
    </View>
  )
}

export default ProfileScreen