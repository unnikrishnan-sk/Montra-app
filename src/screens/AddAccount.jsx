import React, { useEffect, useState } from 'react'
import { FlatList, Platform, Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import { Dropdown } from 'react-native-element-dropdown'
import BottomSlider from '../components/BottomSlider'
import { useNavigation } from '@react-navigation/native'
import { BankData, accountType } from '../constants/dummyData'
import RenderBank from '../components/RenderBankComponent'
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid'

const AddAccount = ({route}) => {

    const [value,setValue] = useState();
    const [id,setId] = useState(uuid.v4());
    const [isFocus, setIsFocus] = useState(false);
    const [selectedBank,setSelectedBank] = useState()
    const [balance,setBalance] = useState();
    const [error,setError] = useState(null);
    const navigation = useNavigation();

    useEffect(()=>{
      if(route?.params?.data !==undefined){
        const balanceAmnt = route?.params?.data?.balance;
        const bankSelected = route?.params?.data?.bank
        const id = route?.params?.data?.id
        setBalance(balanceAmnt)
        setSelectedBank(bankSelected)
        setId(id)
    }
    },[])

    const handlePress = (name) => {
      setSelectedBank(name)
      setError()
    }

    const onPressHandler = async() => {
      if(value===undefined && selectedBank===undefined ){
        setError("Select an account")
      }else{
        const accountData = {"id":id, "bank" : selectedBank || value , "balance": balance}
        try{
          const accountId = id
          const accountBank = selectedBank
          if(accountId && selectedBank){
            const querySnapShot = await firestore().collection('Accounts').where('id', '==', accountId).get();

            const querySnapShotBank = await firestore().collection('Accounts').where('bank', '==', accountBank).get();
            
          if(!querySnapShot.empty) {
            querySnapShot.forEach(async (doc)=> {
              await firestore().collection('Accounts').doc(doc.id).update(accountData)
            })
          }else if(!querySnapShotBank.empty){
            querySnapShotBank.forEach(async (doc)=>{
              const existingData = doc.data();
              const updatedBalance = Number(existingData.balance) + Number(balance);

              await firestore().collection('Accounts').doc(doc.id).update({
                ...existingData,
                balance: updatedBalance
              })
            });
          }
          else{
          await firestore().collection('Accounts').add(accountData);
          }
        }
      }catch(error){  
        console.log("Error creating account",error);
      }
      navigation.navigate('signsuccess')
      }
    }

  return (
    <View style={{ flex:1, backgroundColor: colorMix.violet_100, height: HEIGHT }}>

        <Navbar title={route?.params ? "Edit Account":"Add new account"} titleColor={colorMix.light_100}/>

        <View style={{ paddingHorizontal: WIDTH*0.05, paddingTop: value ? HEIGHT*0.2 :HEIGHT*0.3 }}>

            <Text style={{ color: colorMix.violet_20, fontSize: HEIGHT*0.025, fontWeight: '500' }}>Balance</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Text style={{color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight:'600'}}>$</Text>

        <TextInput style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: '600' }}
        placeholder='00.0'
        placeholderTextColor={colorMix.light_100}
        onChangeText={(text)=>setBalance(text)}
        value={balance} />
        </View>
        </View>

        <View style={{ backgroundColor: colorMix.light_100, paddingTop: HEIGHT*0.03, height: Platform.OS==="ios" ? (value ? HEIGHT*0.58 : HEIGHT*0.48) : value ? HEIGHT*0.54 : HEIGHT*0.435, borderTopLeftRadius: HEIGHT*0.035, borderTopRightRadius: HEIGHT*0.035 }}>

          <View style={{ paddingHorizontal: WIDTH*0.05 }}>

        <TextInput placeholder='Name' value={selectedBank} placeholderTextColor={colorMix.dark_25} style={{ height: HEIGHT*0.08, borderWidth:1, borderRadius: HEIGHT*0.02, paddingLeft: WIDTH*0.02, borderColor: colorMix.light_20 }}/>

        <Dropdown style={{ height: HEIGHT*0.08, borderColor:      'gray', borderRadius: HEIGHT*0.02, paddingHorizontal: WIDTH*0.02, borderWidth: 1, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, color: colorMix.dark_100 }}
        selectedTextStyle={{fontSize: HEIGHT*0.022}}
        inputSearchStyle={{ height: HEIGHT*0.3, fontSize: HEIGHT*0.02,}}
        data={accountType}
        maxHeight={HEIGHT*0.3}
        labelField="name"
        valueField="value"
        placeholder="Account Type"
        placeholderStyle={{ color: colorMix.dark_25, fontSize: HEIGHT*0.02 }}
        showsVerticalScrollIndicator={false}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => { setValue(item.value); setIsFocus(false);}} />
        </View>

          {error && <Text style={{ color: colorMix.red_100, fontWeight: '500', marginLeft: WIDTH*0.05 }}>{error}</Text>}

        {value === "bank" && (<View style={{ paddingHorizontal: WIDTH*0.05 }}>
          <FlatList 
          numColumns={4}
          showsVerticalScrollIndicator={false} 
          data={BankData} renderItem={({item}) => <RenderBank data={item} 
          onPress={handlePress} selectedBank={selectedBank} 
          />} keyExtractor={item => item.id}/>
        </View>)}

        <View style={{ paddingHorizontal: WIDTH*0.05, position: 'absolute', width: WIDTH, bottom: HEIGHT*0.06 }}>
        <ButtonComponent title="Continue" onButtonHandler={onPressHandler}/>
        </View>
        <BottomSlider />
        </View>
    </View>
  )
}

export default AddAccount