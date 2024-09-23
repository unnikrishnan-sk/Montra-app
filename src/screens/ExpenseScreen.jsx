import React, { useCallback, useEffect, useState } from 'react'
import { View,Text, Image, Switch, Modal, Pressable, Platform, TextInput } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import InputComponent from '../components/InputComponent'
import DropdownComponent from '../components/DropdownComponent'
import { expenseCategoryType, walletType } from '../constants/dummyData'
import { attachment_icon, close_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import firestore from '@react-native-firebase/firestore';
import * as ImagePicker from 'react-native-image-picker'
import * as DocumentPicker from 'react-native-document-picker'
import RepeatModalComponent from '../components/RepeatModalComponent'
import moment from 'moment'
import { getConstants } from '../http/api'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const ExpenseScreen = () => {

    const darkMode = useSelector((state)=>state.mode.darkMode)
    const [expenseData,setExpenseData] = useState({
        amount: '',
        category: '',
        description: '',
        wallet: '',
        createdAt: new Date(),
        createdMonth: moment().format('MMMM'),
        createdDate: moment(new Date()).format('DD'),
        createdDay: moment(new Date()).format('dddd'),
        createdYear: moment(new Date()).format('YYYY')
    });
    const [error,setError] = useState("")
    const [categoryList,setCategoryList] = useState([]);
    const [walletList,setWalletList] = useState([]);
    const [response, setResponse] = useState('');
    const [fileResponse, setFileResponse] = useState([]);
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [repeatModal,setRepeatModal] = useState(false);
    // const darkMode = useSelector((state)=>state.mode.darkMode)
    const navigation = useNavigation();

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
            try {
                const bank = expenseData?.wallet;
                const querySnapShotBank = await firestore().collection('Accounts').where('bank', '==', bank).get();

                if(querySnapShotBank.empty){
                    await firestore().collection('Expenses').add(expenseData);
                    querySnapShotBank.forEach(async (doc)=>{
                      const existingData = doc.data();
                      const updatedBalance = Number(existingData.balance) - Number(expenseData?.amount);
                      await firestore().collection('Accounts').doc(doc.id).update({
                        ...existingData,
                        balance: updatedBalance
                      })
                    });
                    navigation.navigate('myTabs')
                  }else{
                    setError("No balance in the bank selected")
                  }

               
            } catch (error) {
                console.log("error_handleExpense", error);
            }
        }
    }

    useEffect(()=>{
        contDatas()
    },[])

    const contDatas = async () => {
        const constData = await getConstants();
        const cat = constData?.docs[0]?.data();
        const wal = constData?.docs[0]?.data();

        if(cat && cat.value){
            const catData = cat.value.map(item =>({value:item}))
            setCategoryList(catData);
        }
        if(wal && wal.value){
            const walData = wal.value.map(item => ({value:item}))
            setWalletList(walData)
        }
    }

      const onButtonPress = useCallback((type,options,index) => {
        const callback = (res) => {
            if(res.didCancel || res.error){
                console.log('user cancelled', res);
            }else{
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
                setFileResponse(response);
            }  
    },[])

    const handleImagedelete = () => {
        setResponse('')
    }

  return (
   <View style={{ backgroundColor: colorMix.red_100, height: HEIGHT }}>
    <Navbar title="Expense" titleColor={colorMix.light_100}/>

    <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.05 }}>
        <Text style={{ color: colorMix.light_20, fontWeight: '500', fontSize: HEIGHT*0.024 }}> How much?</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight:'600'}}>$</Text>

        <TextInput 
        style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: '600' }}
        placeholder='0'
        placeholderTextColor={colorMix.light_100}
        onChangeText={(text)=>handleTextInputChange('amount',text)}
        value={expenseData?.amount}/>
        </View>
    </View>

    <View style={{  backgroundColor: darkMode? colorMix.dark_100 : colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01, height: HEIGHT*0.73 }}>

        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <DropdownComponent value={expenseData?.category} setValue={(value)=>handleExpenseData('category',value)} title="Category" data={expenseCategoryType} darkMode={darkMode}/>
        </View>

        <InputComponent placeholder="Description" onChangeText={text=>handleTextInputChange('description',text)} darkMode={darkMode}/>
        <View style={{ paddingHorizontal: WIDTH*0.05 }} >

        <DropdownComponent value={expenseData?.wallet} setValue={(value)=>handleExpenseData('wallet',value)} title="Wallet" data={walletType} darkMode={darkMode}/>

        {response==='' ? (<Pressable onPress={()=>setModalVisible(true)} style={{ borderWidth: 1,borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </Pressable>
        ) : (
        <>
        <Image style={{height: HEIGHT*0.12,width: HEIGHT*0.12,marginTop: HEIGHT*0.02,borderRadius: HEIGHT*0.01}} source={{uri:response}}/>

        <Pressable style={{ height: HEIGHT*0.025, width: HEIGHT*0.025, borderRadius: HEIGHT*0.015, backgroundColor: colorMix.dark_25, alignItems: 'center', justifyContent: 'center', position: 'absolute', left: WIDTH*.23, top: HEIGHT*0.1 }}
        onPress={()=>handleImagedelete()} >
        <Image style={{ height: HEIGHT*0.013, width: HEIGHT*0.013 }} 
            source={close_icon}/>
        </Pressable>
        </>)
        }
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
        <Text style={{ marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.024,color: darkMode? colorMix.light_100 : colorMix.dark_100 }}>Repeat</Text>
        <Text style={{ fontSize: HEIGHT*0.02, color: colorMix.dark_25, marginTop: HEIGHT*0.01 }}>{isEnabled ? 'Repeat transaction, set your own time' : 'Repeat transaction'}</Text>
        </View>

        <Switch style={{transform: [{scaleX: .8}, {scaleY: .8}]}} trackColor={{false: colorMix.violet_20, true: colorMix.violet_100}} thumbColor={ colorMix.light_100} onValueChange={toggleSwitch} value={isEnabled} />
        </View>
        </View>

        {error && (<View style={{ alignItems: 'center', paddingTop: HEIGHT*0.02 }}><Text style={{color: colorMix.red_100, alignItems: 'center',}}>{error}</Text></View>)}

        <View style={{  marginTop: Platform.OS==='ios' ?  HEIGHT*0.11 : HEIGHT*0.02, paddingHorizontal: WIDTH*0.05 }}>
        <ButtonComponent title="Continue" onButtonHandler={()=>handleExpense()}/>
        </View> 

        <View style={{ marginTop: Platform.OS==='ios'?HEIGHT*0.05:HEIGHT*0.08 }}>
        <BottomSlider />
        </View>
    </View>
    
    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { setModalVisible(!modalVisible) }}>
    <RepeatModalComponent setModalVisible={setModalVisible} onButtonPress={onButtonPress} onNavigate="Attachment" darkMode={darkMode}/>
    </Modal>

      <Modal animationType="slide" transparent={true} visible={repeatModal}>
        <RepeatModalComponent setModalVisible={setModalVisible} onButtonPress={onButtonPress} setRepeatModal={setRepeatModal} expenseData={expenseData} darkMode={darkMode}/>
      </Modal>
   </View>
  )
}

export default ExpenseScreen