import React from 'react'
import { Pressable, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { shadowStyles } from '../constants/shadow'
import CameraModal from './CameraModal'
import FrequencyModal from './FrequencyModal'

const RepeatModalComponent = ({setModalVisible,onButtonPress, onNavigate, expenseData}) => {
  return (
  
        <View style={{  height: onNavigate==="Attachment" ? HEIGHT*0.23 : HEIGHT*0.32, position: 'absolute', bottom: HEIGHT*0.03, width: WIDTH, backgroundColor: colorMix.light_100, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03, ...shadowStyles }}>
        <Pressable onPress={()=>setModalVisible(false)}style={{ height: HEIGHT*0.005, marginTop: HEIGHT*0.02, width: WIDTH*0.08, alignSelf: 'center', borderRadius: HEIGHT*0.03, backgroundColor: colorMix.violet_40 }}></Pressable>
        {onNavigate==="Attachment" ? <CameraModal onButtonPress={onButtonPress}/> : <FrequencyModal expenseData={expenseData}/>}
            
        </View>
  
  )
}

export default RepeatModalComponent