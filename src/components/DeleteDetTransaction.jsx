import React, { useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';
import ButtonComponent from './ButtonComponent';
import BottomSlider from './BottomSlider';
import { shadowStyles } from '../constants/shadow';

const DeleteDetTransaction = ({deleteModal, setDeleteModal}) => {

  const [transModal,setTransModal] = useState();

  const handleDeleteTrans = () => {

  }
    console.log("deleteModal");

  return (
    // <View style={{
    //   height: HEIGHT*0.3,
    //   backgroundColor: colorMix.light_100,
    //   marginTop: HEIGHT*0.7,
    //   borderWidth:1
    // }}>
        <Modal
        animationType='slide'
        transparent={true}
        visible={deleteModal}
        style={{
          borderWidth:1,
          height: HEIGHT*0.3
        }}
        >
          <View style={{
            // borderWidth: 1,
            ...shadowStyles,
            backgroundColor: colorMix.light_100,
            height: HEIGHT*0.3,
            marginTop: HEIGHT*0.7,
            borderTopLeftRadius: HEIGHT*0.03,
            borderTopRightRadius: HEIGHT*0.03,
            // paddingHorizontal: WIDTH*0.05
          }}>
            <Pressable onPress={()=>setDeleteModal(false)}style={{ height: HEIGHT*0.005, marginTop: HEIGHT*0.02, width: WIDTH*0.08, alignSelf: 'center', borderRadius: HEIGHT*0.03, backgroundColor: colorMix.violet_40 }}></Pressable>
          <Text style={{
            fontSize: HEIGHT*0.022,
            fontWeight: '600',
            textAlign: 'center',
            marginTop: HEIGHT*0.03
          }}>Remove this transaction ?</Text>
          <Text style={{
            width: WIDTH*0.85,
            alignSelf: 'center',
            marginTop: HEIGHT*0.02,
            textAlign: 'center',
            color: colorMix.dark_25
          }}>Are you sure do you wanna remove this transaction?</Text>
          <View style={{
            // borderWidth: 1,
            marginTop: HEIGHT*0.02,
            flexDirection: 'row'
          }}>
           <ButtonComponent title="No" bgColor={colorMix.violet_20} txtColor={colorMix.violet_100} btnWidth={WIDTH*0.4} onButtonHandler={()=>setDeleteModal(false)}/>
           <ButtonComponent title="Yes" btnWidth={WIDTH*0.4} onButtonHandler={handleDeleteTrans}/>
          </View>
          
          </View>
       <BottomSlider />
        </Modal>
        
    //  </View>
  )
}

export default DeleteDetTransaction