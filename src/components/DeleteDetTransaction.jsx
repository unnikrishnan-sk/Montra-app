import React, { useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';
import ButtonComponent from './ButtonComponent';
import BottomSlider from './BottomSlider';
import { shadowStyles } from '../constants/shadow';

const DeleteDetTransaction = ({deleteModal, setDeleteModal, title, desc, onButtonHandler}) => {

  const [transModal,setTransModal] = useState();

  return (
        <Modal animationType='slide' transparent={true} visible={deleteModal} style={{ borderWidth:1, height: HEIGHT*0.35 }}>

          <View style={{ ...shadowStyles, backgroundColor: colorMix.light_100, height: HEIGHT*0.35, marginTop: HEIGHT*0.65, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03, }}>

            <Pressable onPress={()=>setDeleteModal(false)}style={{ height: HEIGHT*0.005, marginTop: HEIGHT*0.02, width: WIDTH*0.08, alignSelf: 'center', borderRadius: HEIGHT*0.03, backgroundColor: colorMix.violet_40 }}></Pressable>

          <Text style={{ fontSize: HEIGHT*0.022, fontWeight: '600', textAlign: 'center', marginTop: HEIGHT*0.03 }}>{title}</Text>

          <Text style={{ width: WIDTH*0.85, alignSelf: 'center', marginTop: HEIGHT*0.02, textAlign: 'center', fontSize: HEIGHT*0.024, color: colorMix.dark_25 }}>{desc}</Text>

          <View style={{ paddingHorizontal: WIDTH*0.05, justifyContent: 'space-between', marginTop: HEIGHT*0.02, flexDirection: 'row' }}>

           <ButtonComponent title="No" bgColor={colorMix.violet_20} txtColor={colorMix.violet_100} btnWidth={WIDTH*0.4} onButtonHandler={()=>setDeleteModal(false)}/>
           <ButtonComponent title="Yes" btnWidth={WIDTH*0.4} onButtonHandler={onButtonHandler}/>
          </View> 
          </View>

       <BottomSlider />
    </Modal>
  )
}

export default DeleteDetTransaction