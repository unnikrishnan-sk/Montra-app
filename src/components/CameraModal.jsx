import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { imageDetails } from '../constants/dummyData'
import RenderAttachments from './RenderAttachments'

const CameraModal = ({onButtonPress}) => {
  return (
    
    <View style={{ paddingHorizontal: WIDTH*0.06, height: HEIGHT*0.125, width: WIDTH, marginTop: HEIGHT*0.04, flexDirection: 'row' }}>
        <FlatList data={imageDetails} horizontal showsHorizontalScrollIndicator={false} renderItem={({item,index})=><RenderAttachments data={item} index={index} type="library" onButtonPress={onButtonPress} /> } keyExtractor={item=>item.id}/>
    </View>

  )
}

export default CameraModal