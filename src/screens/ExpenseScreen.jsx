import React, { useState } from 'react'
import { View,Text, Image, Switch, Modal, Pressable, FlatList, Platform } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import DropdownComponent from '../components/DropdownComponent'
import { expenseCategoryType, walletType } from '../constants/dummyData'
import { attachment_icon, camera_icon, doc_icon, gallery_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import firestore from '@react-native-firebase/firestore';
import RenderAttachments from '../components/RenderAttachments'
import { shadowStyles } from '../constants/shadow'

const imageDetails = [{id:0, title: "Camera", logo: camera_icon}, {id:1, title: "Image", logo: gallery_icon}, {id:2, title: "Document", logo: doc_icon}]

const expenseDetails = [{id:0, placeholder: 'Description', value: 'description'}]

const ExpenseScreen = () => {

    const [error,setError] = useState({})
    const [category,setCategory] = useState()
    const [description,setDescription] = useState();
    const [wallet,setWallet] = useState()
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleExpense = async () => {

        const expenseData = {"category": category, "description": description, "wallet": wallet}
        // try {
        //     await firestore().collection('Expenses').add(expenseData);
        // } catch (error) {
        //     console.log("error_handleExpense", error);
        // }
    }

    const handleChangeForm = (key,value) => {
        setDescription(value)
      }

  return (
   <View style={{ backgroundColor: colorMix.red_100, height: HEIGHT }}>
    <Navbar title="Expense" titleColor={colorMix.light_100}/>
    <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.12 }}>
        <Text style={{ color: colorMix.light_20, fontWeight: 500, fontSize: HEIGHT*0.024 }}>How much?</Text>
        <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: 600 }}>$0</Text>
    </View>
    <View style={{ backgroundColor: colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01 }}>
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <DropdownComponent value={category} setValue={setCategory} title="Category" data={expenseCategoryType}/>
        </View>
        <InputComponent placeholder="Description" onChangeText={text=>handleChangeForm(expenseDetails?.value,text)}/>
        <View style={{ paddingHorizontal: WIDTH*0.05 }} >
        <DropdownComponent value={wallet} setValue={setWallet} title="Wallet" data={walletType}/>
        <Pressable onPress={()=>setModalVisible(true)} style={{ borderWidth: 1,borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
        <Text style={{ marginTop: HEIGHT*0.03, fontSize: HEIGHT*0.024,color: colorMix.dark_100 }}>Repeat</Text>
        <Text style={{ fontSize: HEIGHT*0.02, color: colorMix.dark_25, marginTop: HEIGHT*0.01 }}>Repeat transaction</Text>
        </View>
        <Switch style={{transform: [{scaleX: .8}, {scaleY: .8}]}} trackColor={{false: colorMix.violet_20, true: colorMix.violet_100}} thumbColor={ colorMix.light_100} onValueChange={toggleSwitch} value={isEnabled} />
        </View>
        </View>
        <View style={{ marginTop: Platform.OS==='ios' ?  HEIGHT*0.03 : HEIGHT*0.02, height: HEIGHT*0.2 }}>
        <ButtonComponent title="Continue" onButtonHandler={()=>handleExpense()}/>
        </View> 
    </View>
    <BottomSlider />
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }}>
        <View style={{ height: HEIGHT*0.23, position: 'absolute', bottom: HEIGHT*0.03, width: WIDTH, backgroundColor: colorMix.light_100, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03, ...shadowStyles }}>
          <Pressable onPress={()=>setModalVisible(false)}style={{ height: HEIGHT*0.005, marginTop: HEIGHT*0.02, width: WIDTH*0.08, alignSelf: 'center', borderRadius: HEIGHT*0.03, backgroundColor: colorMix.violet_40 }}></Pressable>
            <View style={{ paddingHorizontal: WIDTH*0.06, height: HEIGHT*0.125, width: WIDTH, marginTop: HEIGHT*0.04, flexDirection: 'row' }}>
                <FlatList data={imageDetails} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=><RenderAttachments data={item} /> } keyExtractor={item=>item.id}/>
            </View>
        </View>
      </Modal>
   </View>
  )
}

export default ExpenseScreen