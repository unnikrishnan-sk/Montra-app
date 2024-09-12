import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { account_background, chase_bank, citi_bank, paypal_bank, wallet_icon } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import RenderAccountItems from '../components/RenderAccountItems'
import { accountData } from '../constants/dummyData'
import { useNavigation } from '@react-navigation/native'
import { accountBal, allAccounts } from '../http/api'

const AccountScreen = () => {

  const [allData,setAllData] = useState([]);
  const [balTotal,setBalTotal] = useState();
  const navigation = useNavigation();

  useEffect(()=>{
    getData();
},[])

const getData = async () => {
    const accountData = await allAccounts();
    setAllData(accountData)
    const accountBalance_av = await accountBal();
    setBalTotal(accountBalance_av)
    console.log("all accounts", accountBalance_av);
    // const allExpenses = await allExpense();
    // const allIncomes = await allIncome();
    // if(filter===0){
    //     console.log("all incomes",allIncomes);
    //     setAllData(allIncomes)
    //     console.log("all data here", allData);
    // }
    // console.log("allExpense", allExpenses);
    // setAllData(allExpenses.concat(allIncomes))
    // 
}  

  return (
    <View style={{ height: HEIGHT, backgroundColor: colorMix.light_100 }}>

        <Navbar title="Account"/>

        <ImageBackground style={{ height: HEIGHT*0.28, marginTop: HEIGHT*0.03 }}
        source={account_background}>

            <Text style={{ alignSelf: 'center', marginTop: HEIGHT*0.06, color: colorMix.dark_25
            }}>Account Balance</Text>

            <Text style={{ fontSize: HEIGHT*0.05, fontWeight: 700, alignSelf: 'center', marginTop: HEIGHT*0.01, color: colorMix.dark_100
            }}>${balTotal}</Text>

        </ImageBackground>

            <View style={{ paddingHorizontal: WIDTH*0.05 }}>

                <FlatList contentContainerStyle={{ borderRadius: HEIGHT*0.02 }}
                    data={allData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=><RenderAccountItems data={item} navigation={navigation}/> }
                    keyExtractor={item=>item.id}/> 
            </View>

            <View style={{ paddingHorizontal: WIDTH*0.05, position: 'absolute', width: WIDTH, bottom: HEIGHT*0.07 }}>
            <ButtonComponent onButtonHandler={()=>navigation.navigate('addaccount')} title="+ Add new wallet"/>
            </View>
            <BottomSlider />
    </View>
  )
}

export default AccountScreen
