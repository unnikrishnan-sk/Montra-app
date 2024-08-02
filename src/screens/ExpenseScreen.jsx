import React, { useCallback, useState } from 'react'
import { View,Text, Image, Switch, Modal, Pressable, FlatList, Platform, TextInput } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import DropdownComponent from '../components/DropdownComponent'
import { expenseCategoryType, expenseDetails, imageDetails, walletType } from '../constants/dummyData'
import { attachment_icon, close_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import firestore from '@react-native-firebase/firestore';
import RenderAttachments from '../components/RenderAttachments'
import { shadowStyles } from '../constants/shadow'
import * as ImagePicker from 'react-native-image-picker'
import * as DocumentPicker from 'react-native-document-picker'
import RepeatModalComponent from '../components/RepeatModalComponent'
import CameraModal from '../components/CameraModal'
import CategoryComponent from '../components/CategoryComponent'
import moment from 'moment'

const repeatDetails = [{id:0, name: "Frequency"}, {id:1, name: "End After"}]

const ExpenseScreen = () => {

    const [expenseData,setExpenseData] = useState({
        amount: '',
        category: '',
        // response: '',
        description: '',
        wallet: '',
        // amount: 0,
        createdAt: new Date(),
        month: moment().format('MMMM'),
    });
    console.log(expenseData);
    const [error,setError] = useState({})
    // const [expenseData,setExpenseData] = [{response: '', category: '', description: '', wallet: '', amount: 0}]
    const [response, setResponse] = useState('');
    const [fileResponse, setFileResponse] = useState([]);
    // const [category,setCategory] = useState()
    // const [description,setDescription] = useState();
    // const [wallet,setWallet] = useState()
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [repeatModal,setRepeatModal] = useState(false);
    // const [amount,setAmount] = useState(0);
    console.log(response);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleTextInputChange = (key,value) => {
        setExpenseData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleExpenseData = (key,value) => {
        setExpenseData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleExpense = async () => {
        if(isEnabled){
            setRepeatModal(true)
        }else{
            console.log(expenseData);
            try {
                await firestore().collection('Expenses').add(expenseData);
            } catch (error) {
                console.log("error_handleExpense", error);
            }
        }
    }

    // const handleChangeForm = (key,value) => {
    //     setDescription(value)
    //   }

      const onButtonPress = useCallback((type,options,index) => {
        const callback = (res) => {
            if(res.didCancel || res.error){
                console.log('user cancelled', res);
            }else{
                console.log(res);
                setResponse(res?.assets[0]?.uri)
                }
            }
            if(index===1){
                ImagePicker.launchImageLibrary(options,callback);
                setModalVisible(false)
            }else if(index===0){
                ImagePicker.launchCamera(options,callback);
            }else{
                const response =  DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                });
                console.log(response);
                setFileResponse(response);
            }
            
    },[])

    const handleImagedelete = () => {
        setResponse('')
    }

  return (
   <View style={{ backgroundColor: colorMix.red_100, height: HEIGHT }}>
    <Navbar title="Expense" titleColor={colorMix.light_100}/>
    {/* <CategoryComponent amount={amount} category={category} setCategory={setCategory} wallet={wallet} setWallet={setWallet} response={response} isEnabled={isEnabled}/> */}
    <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.12 }}>
        <Text style={{ color: colorMix.light_20, fontWeight: 500, fontSize: HEIGHT*0.024 }}>How much?</Text>
        <View style={{
            flexDirection: 'row'
        }}>
            <Text style={{color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: 600}}>$</Text>
        <TextInput 
        style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: 600 }}
        placeholder='0'
        placeholderTextColor={colorMix.light_100}
        onChangeText={(text)=>handleTextInputChange('amount',text)}
        value={expenseData?.amount}
        />
        </View>
    </View>
    <View style={{  backgroundColor: colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01 }}>
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <DropdownComponent value={expenseData?.category} setValue={(value)=>handleExpenseData('category',value)} title="Category" data={expenseCategoryType}/>
        </View>
        <InputComponent placeholder="Description" onChangeText={text=>handleTextInputChange('description',text)}/>
        <View style={{ paddingHorizontal: WIDTH*0.05 }} >
        <DropdownComponent value={expenseData?.wallet} setValue={(value)=>handleExpenseData('wallet',value)} title="Wallet" data={walletType}/>
        {response==='' ? (<Pressable onPress={()=>setModalVisible(true)} style={{ borderWidth: 1,borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </Pressable>) : (<><Image style={{height: HEIGHT*0.12,width: HEIGHT*0.12,marginTop: HEIGHT*0.02,borderRadius: HEIGHT*0.01}} source={{uri:response}}/>
        <Pressable style={{
            // borderWidth: 1,
            height: HEIGHT*0.025,
            width: HEIGHT*0.025,
            borderRadius: HEIGHT*0.015,
            backgroundColor: colorMix.dark_25,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: WIDTH*.23,
            top: HEIGHT*0.1
        }}
        onPress={()=>handleImagedelete()}
        >
        <Image style={{
            height: HEIGHT*0.013, 
            width: HEIGHT*0.013
            // backgroundColor: colorMix.dark_100
            }} 
            source={close_icon}/>
            </Pressable>
            </>)
            }
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
        <Text style={{ marginTop: HEIGHT*0.03, fontSize: HEIGHT*0.024,color: colorMix.dark_100 }}>Repeat</Text>
        <Text style={{ fontSize: HEIGHT*0.02, color: colorMix.dark_25, marginTop: HEIGHT*0.01 }}>{isEnabled ? 'Repeat transaction, set your own time' : 'Repeat transaction'}</Text>
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
    <RepeatModalComponent setModalVisible={setModalVisible} onButtonPress={onButtonPress} onNavigate="Attachment"/>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={repeatModal}
        >
             <RepeatModalComponent setModalVisible={setModalVisible} onButtonPress={onButtonPress} setRepeatModal={setRepeatModal} expenseData={expenseData} />
        {/* <View style={{ height: HEIGHT*0.32, position: 'absolute', bottom: HEIGHT*0.03, width: WIDTH, backgroundColor: colorMix.light_100,
        // paddingHorizontal: WIDTH* 0.05,
            borderTopLeftRadius: HEIGHT*0.04, borderTopRightRadius: HEIGHT*0.04, ...shadowStyles }}>
        <Pressable onPress={()=>setRepeatModal(false)}style={{ height: HEIGHT*0.005, marginTop: HEIGHT*0.02, width: WIDTH*0.08, alignSelf: 'center', borderRadius: HEIGHT*0.03, backgroundColor: colorMix.violet_40 }}></Pressable>
        <View style={{
            paddingHorizontal: WIDTH*0.05
        }}>
         <DropdownComponent value={frequency} setValue={setFrequency} title="Frequency" data={frequencyDetails}/>
        
        <DropdownComponent value={category} setValue={setCategory} title="End After" data={endAfter}/>
        </View>
        <View style={{
            marginTop: HEIGHT*0.02,
        }}>
        <ButtonComponent title="Next"/>
        </View>
          
        </View> */}
      </Modal>
   </View>
  )
}

export default ExpenseScreen