import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { dropdown_arrow, notification_icon, profile_avatar } from '../assets'
import { Dropdown } from 'react-native-element-dropdown'
import { LineChart } from 'react-native-gifted-charts'
import { chartData, dataTimeframe, incomeExpenseData, monthData } from '../constants/dummyData'
import RecentTransaction from '../components/RecentTransaction'
import BottomSlider from '../components/BottomSlider'
import { useNavigation } from '@react-navigation/native'
import RenderIncomeExpense from '../components/RenderIncomeExpense'
import RenderTimeframe from '../components/RenderTimeFrame'
import firestore from '@react-native-firebase/firestore';
import { calculateExpense, calculateIncome, networkApi } from '../http/api'
import moment from 'moment'

const HomeScreen = () => {

    const [value,setValue] = useState(moment().format('MMMM'));
    const [incomeExpenseDetails,setIncomeExpenseDetails] = useState(incomeExpenseData)
    const [isFocus, setIsFocus] = useState(false);
    const [onPressed,setOnPressed] = useState(0);
    const [accountBal,setAccountBal] = useState();
    const navigation = useNavigation();
    
    useEffect(()=>{
      getData();
    },[incomeExpenseData,value])

    const getData = async () => {
      console.log(value);
      const expense = await calculateExpense(value);
      const income = await calculateIncome(value);
      console.log("income",income, "expense",expense);
      console.log(incomeExpenseData);
      const updatedData = incomeExpenseData.map((item)=>{
        if(item.title==="Income"){
          return {...item,amount:income.toString()};
        }if(item.title==="Expenses"){
          return {...item,amount:expense.toString()}
        }
        return item;
      })
      setIncomeExpenseDetails(updatedData)
      console.log(updatedData);
      setAccountBal(income-expense)
    }

  return (
    <View style={{ backgroundColor: colorMix.light_100 }}>
        <View style={{ borderBottomLeftRadius: HEIGHT*0.04, borderBottomRightRadius: HEIGHT*0.04, backgroundColor: colorMix.yellow_10, paddingBottom: HEIGHT*0.03 }}>
            <View style={{ marginTop: HEIGHT*0.07, paddingHorizontal: WIDTH*0.05, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={profile_avatar}/>
        <Dropdown
          style={{ height: HEIGHT*0.08, borderColor: 'gray', borderRadius: HEIGHT*0.03, paddingHorizontal: WIDTH*0.02, borderWidth: 1, width: WIDTH*0.35, height: HEIGHT*0.06, backgroundColor: colorMix.yellow_10, borderColor: colorMix.light_20, color: colorMix.dark_100 }}
          selectedTextStyle={{ fontSize: HEIGHT*0.022, color: colorMix.dark_100, fontWeight: 500 }}
          inputSearchStyle={{ height: HEIGHT*0.3, fontSize: HEIGHT*0.02, color: colorMix.dark_100 }}
          data={monthData}
          maxHeight={HEIGHT*0.3}
          labelField="name"
          valueField="value"
          placeholderStyle={{ color: colorMix.dark_100, fontSize: HEIGHT*0.02 }}
          showsVerticalScrollIndicator={false}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Image style={{ marginRight: WIDTH*0.02, height: HEIGHT*0.0143, width: HEIGHT*0.03, marginLeft: WIDTH*0.01 }} source={dropdown_arrow} />
          )}
          renderRightIcon={() => null} />    
    <Pressable onPress={()=>navigation.navigate('notification')} >
    <Image source={notification_icon} />
    </Pressable>
            </View>
            <Text style={{ alignSelf: 'center', fontSize: HEIGHT*0.02, marginTop: HEIGHT*0.015, color: colorMix.dark_25 }}>Account Balance</Text>
            <Text style={{ alignSelf: 'center', marginTop: HEIGHT*0.015, fontSize: HEIGHT*0.05, fontWeight: 600, color: colorMix.dark_100 }}>${accountBal}</Text>
            <View style={{ paddingHorizontal: WIDTH*0.05, justifyContent: 'space-between', marginTop: HEIGHT*0.02 }}>
        <FlatList data={incomeExpenseDetails} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=><RenderIncomeExpense data={item} /> } keyExtractor={item=>item.id} />
        </View>
        </View>

<ScrollView 
showsVerticalScrollIndicator={false}
style={{ marginBottom: HEIGHT*0.4 }}>
        <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.01 }}>
          <Text style={{ fontSize: HEIGHT*0.025, fontWeight: 600, marginTop: HEIGHT*0.01, color: colorMix.dark_100 }}>Spend Frequency</Text>
        </View>
        <View style={{ marginLeft: -WIDTH*0.1 }}>
        <LineChart areaChart data = {chartData}
      style={{ marginLeft: WIDTH*0.1 }} spacing={55} initialSpacing={0} thickness={6} hideAxesAndRules hideDataPoints width={WIDTH} curved startFillColor={colorMix.violet_80} endFillColor={colorMix.violet_20}  startOpacity={0.4} endOpacity={0.1} color={colorMix.violet_100}/>
       </View>
       <View style={{ height: HEIGHT*0.05, paddingHorizontal: WIDTH*0.05, flexDirection: 'row', alignItems: 'center' }}>
        <FlatList data={dataTimeframe} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=><RenderTimeframe data={item} setOnPressed={setOnPressed} onPressed={onPressed}/> } keyExtractor={item=>item.id}/>
       </View>
       <RecentTransaction />
       </ScrollView>
       <BottomSlider />
    </View>
  )
}

export default HomeScreen