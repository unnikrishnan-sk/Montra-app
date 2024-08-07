import React, { useState } from 'react'
import { Image, Switch, Text, TextInput, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import Navbar from '../components/Navbar'
import DropdownComponent from '../components/DropdownComponent'
import { expenseDetails, incomeCategoryType, walletType } from '../constants/dummyData'
import InputComponent from '../components/InputComponent'
import { attachment_icon } from '../assets'
import ButtonComponent from '../components/ButtonComponent'
import firestore from '@react-native-firebase/firestore';
import BottomSlider from '../components/BottomSlider'
import { handleAuthError } from '../constants/common'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

const IncomeScreen = () => {

    const [incomeData,setIncomeData] = useState({
        amount: '',
        category: '',
        // response: '',
        description: '',
        // wallet: '',
        // amount: 0,
        createdAt: new Date(),
        month: moment().format('MMMM'),
    });
    const [error,setError] = useState({})
    // const [category,setCategory] = useState()
    // const [description,setDescription] = useState()
    // const [amount,setAmount] = useState(0)
    const [isEnabled, setIsEnabled] = useState(false);
    const navigation = useNavigation();
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // const handleChangeForm = (key,value) => {
    //   setDescription(value)
    // }

    const handleTextInputChange = (key,value) => {
        setIncomeData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleIncomeData = (key,value) => {
        setIncomeData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleIncome = async () => {
        console.log(incomeData);
            try {
                await firestore().collection('Income').add(incomeData);
            } catch (error) {
                console.log("error_handleIncome", error);
            }
        navigation.navigate('myTabs')
    }

//     const handleIncome = async () => {
//           const incomeData = {"amount" : amount, "category": category, "description": description, createdAt: new Date()}
//           console.log(incomeData);
//           try {
//               await firestore().collection('Income').add(incomeData);
//           } catch (error) {
//               console.log("error_handleIncome", error);
//           }
//   }

  return (
   <View style={{ backgroundColor: colorMix.green_100, height: HEIGHT }}>
    <Navbar title="Income" titleColor={colorMix.light_100}/>
    <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.12 }}>
        <Text style={{ color: colorMix.light_20, fontWeight: '500', fontSize: HEIGHT*0.024 }}>How much?</Text>
        <View style={{
            flexDirection: 'row'
        }}>
            <Text style={{color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: '600'}}>$</Text>
        <TextInput 
        style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: '600' }}
        placeholder='0'
        placeholderTextColor={colorMix.light_100}
        onChangeText={(text) => handleTextInputChange('amount',text)}
        value={incomeData?.amount}
        />
        </View>
          
    </View>
    <View style={{ backgroundColor: colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01 }}>
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <DropdownComponent value={incomeData?.category} setValue={(value)=>handleIncomeData('category',value)} title="Category" data={incomeCategoryType}/>
        </View>
        <InputComponent placeholder="Description" onChangeText={(text)=>handleTextInputChange('description',text)}/>
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        {/* <DropdownComponent value={wallet} setValue={setWallet} title="Wallet" data={walletType}/> */}
        <View style={{ borderWidth: 1, borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        </View>
        </View>
        <View style={{ marginTop: HEIGHT*0.17, height: HEIGHT*0.2 }}>
        <ButtonComponent title="Continue" onButtonHandler={()=>handleIncome()}/>
        </View>  
    </View>
    <BottomSlider />
   </View>
  )
}

export default IncomeScreen