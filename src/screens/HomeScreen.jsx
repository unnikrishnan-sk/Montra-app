import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { dropdown_arrow, expense_icon_white, income_icon_white, notification_icon, profile_avatar, transfer_icon_white } from '../assets'
import { Dropdown } from 'react-native-element-dropdown'
import { dataTimeframe, incomeExpenseData, monthData } from '../constants/dummyData'
import RecentTransaction from '../components/RecentTransaction'
import BottomSlider from '../components/BottomSlider'
import { useNavigation, useRoute } from '@react-navigation/native'
import RenderIncomeExpense from '../components/RenderIncomeExpense'
import RenderTimeframe from '../components/RenderTimeFrame'
import { allExpense, calculateExpense, calculateIncome, latTransaction } from '../http/api'
import moment from 'moment'
import { useSelector } from 'react-redux'
import GraphDataComponent from '../components/GraphDataComponent'

const HomeScreen = () => {

    const [value,setValue] = useState(moment().format('MMMM'));
    const [incomeExpenseDetails,setIncomeExpenseDetails] = useState(incomeExpenseData)
    const [refreshing,setRefreshing] = useState(false);
    const [recentTransData,setRecentTransData] = useState([])
    const [isFocus, setIsFocus] = useState(false);
    const [onPressed,setOnPressed] = useState(0);
    const [accountBal,setAccountBal] = useState();
    const navigation = useNavigation();
    const route = useRoute();
    const { centerTab } = route.params || {};
    const darkMode = useSelector((state)=>state.mode.darkMode)
    console.log(darkMode);
    
    useEffect(()=>{
      getData();
    },[incomeExpenseData,value,onPressed])

    const getData = async () => {
      const expense = await calculateExpense(value)
      const income = await calculateIncome(value);
      const allExpenses = await allExpense();

      Promise.all([expense,income]).then((val)=>{
        console.log("value in promise",val);
        setAccountBal(income-expense)
      }).catch((err)=>console.log(err))

      getDataDetails(onPressed,allExpenses);
      const latTransactionDet = await latTransaction();

      const updatedData = incomeExpenseData.map((item)=>{
        if(item.title==="Income"){
          return {...item,amount:income.toString()};
        }if(item.title==="Expenses"){
          return {...item,amount:expense.toString()}
        }
        return item;
      })
      setIncomeExpenseDetails(updatedData)
    }

    const onRefresh = useCallback(()=>{
      setRefreshing(true)
      setTimeout(()=>{
        setRefreshing(false);
      },500)
    },[])

    const getDataDetails = (onPressed,data) => {
      
      onRefresh();
      const sortedData=[];
      const currentDateFormat = new Date();
      const currentDate = currentDateFormat.getDate();
      const currentYear = currentDateFormat.getFullYear().toString();
      const currentMonth = currentDateFormat.toLocaleString('default', { month: 'long'});
      const currentDay = currentDateFormat.getDate().toString();
      const currentWeek = moment().week();

      if(onPressed===0){
      data.forEach(item=>{
        if(item?.createdDate && item?.createdMonth && item?.createdYear){
          const itemDate = parseInt(item.createdDate.toString().trim(),10);
          const itemMonth = item.createdMonth.trim();
          const itemYear = item.createdYear.toString().trim();

          if(itemDate==currentDate.toString() && itemMonth==currentMonth && itemYear==currentYear)
          {
          sortedData.push(item)
          }
        }
      })
      setRecentTransData([...sortedData])
      } 

      if (onPressed===1){
        data.forEach(item => {
          if(item?.createdDate && item?.createdMonth && item?.createdYear) {
            const itemDate = moment(`${item.createdYear}-${item.createdMonth}-${item.createdDate}`,'YYYY-MMMM-DD')
            const itemWeek = moment(itemDate).week();

            if(itemWeek === currentWeek){
              sortedData.push(item);
            }
          }
        })
        setRecentTransData([...sortedData])
      }

    if(onPressed===2){
      data.forEach(item=>{
        if(item?.createdMonth && item?.createdYear){
          const itemMonth = item.createdMonth;
          const itemYear = item.createdYear.toString();
  
          if(itemMonth===currentMonth && itemYear===currentYear)
          {
            sortedData.push(item)
          }
        }
      })
      setRecentTransData([...sortedData])
    }

    if(onPressed===3){
      data.forEach(item=>{
        if(item?.createdYear){
          const itemYear = item.createdYear.toString().trim();
          if(itemYear==currentYear)
            {
              sortedData.push(item)
            }
          }
        })
        setRecentTransData([...sortedData])
      }    
    }

    const handleDroponChange = (item) => {
      setValue(item?.value);
      setIsFocus(false);
    }

  return (
    <View style={{ backgroundColor:centerTab ? colorMix.violet_20 : colorMix.light_100 }}>

        <View style={{ borderBottomLeftRadius: HEIGHT*0.04,  borderBottomRightRadius: HEIGHT*0.04, backgroundColor: colorMix.yellow_10, paddingBottom: HEIGHT*0.03 }}>

        <View style={{ marginTop: HEIGHT*0.07, paddingHorizontal: WIDTH*0.05, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

        <Image source={profile_avatar}/>
        <Dropdown style={{ height: HEIGHT*0.08, borderColor: 'gray',  borderRadius: HEIGHT*0.03, paddingHorizontal: WIDTH*0.02, borderWidth: 1, width: WIDTH*0.35, height: HEIGHT*0.06, backgroundColor: colorMix.yellow_10, borderColor: colorMix.light_20, color: colorMix.dark_100 }}
        selectedTextStyle={{ fontSize: HEIGHT*0.022, color: colorMix.dark_100, fontWeight: '500' }}
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
        onChange={(item) => handleDroponChange(item)}
        renderLeftIcon={() => (
          <Image style={{ marginRight: WIDTH*0.02, height: HEIGHT*0.0151, width: HEIGHT*0.03, marginLeft: WIDTH*0.01 }} source={dropdown_arrow} />
        )}
        renderRightIcon={() => null} /> 

    <Pressable onPress={()=>navigation.navigate('notification')} >
    <Image source={notification_icon} />
    </Pressable>
    </View>

      <Text style={{ alignSelf: 'center', fontSize: HEIGHT*0.02, marginTop: HEIGHT*0.015, color: colorMix.dark_25 }}>Account Balance</Text>

      <Text style={{ alignSelf: 'center', marginTop: HEIGHT*0.015, fontSize: HEIGHT*0.05, fontWeight: '600', color: colorMix.dark_100 }}>${accountBal}</Text>

        <View style={{ paddingHorizontal: WIDTH*0.05, justifyContent: 'space-between', marginTop: HEIGHT*0.02 }}>

        <FlatList data={incomeExpenseDetails} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=><RenderIncomeExpense data={item} /> } keyExtractor={item=>item.id} />
        </View>
        </View>

        { centerTab && (
          <>
        <Pressable  onPress={()=>navigation.navigate('income')}
          style={{ height: HEIGHT*0.08, width: HEIGHT*0.08, borderRadius: HEIGHT*0.05, position: 'absolute', bottom: HEIGHT*0.42, zIndex: 1, left: WIDTH*0.26, justifyContent: 'center', alignItems: 'center', backgroundColor: colorMix.green_100 }}>

          <Image source={income_icon_white} />
        </Pressable>

        <Pressable onPress={()=>navigation.navigate('expense')}
         style={{ height: HEIGHT*0.08, width: HEIGHT*0.08, position: 'absolute', justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT*0.05, bottom: HEIGHT*0.42, zIndex: 1, left: WIDTH*0.6, backgroundColor: colorMix.red_100 }}>
          <Image source={expense_icon_white} />
        </Pressable>

        <Pressable onPress={()=>navigation.navigate('transfer')}
         style={{ height: HEIGHT*0.08, width: HEIGHT*0.08, position: 'absolute', justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT*0.05, bottom: HEIGHT*0.55, zIndex: 1, left: WIDTH*0.42, backgroundColor: colorMix.blue_100 }}>
          <Image source={transfer_icon_white}/>
        </Pressable></>)}

        <ScrollView showsVerticalScrollIndicator={false}
        style={{ marginBottom: HEIGHT*0.4 , backgroundColor: centerTab ? colorMix.violet_20 : colorMix.light_100}}>

        <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.01 }}>
          <Text style={{ fontSize: HEIGHT*0.025, fontWeight: '600', marginTop: HEIGHT*0.01, color: colorMix.dark_100 }}>Spend Frequency</Text>
        </View>

       <GraphDataComponent centerTab={centerTab} value={value}/>

       <View style={{ height: HEIGHT*0.05, backgroundColor: centerTab ? colorMix.violet_20 : colorMix.light_100, paddingHorizontal: WIDTH*0.05, flexDirection: 'row', alignItems: 'center' }}>

      <FlatList data={dataTimeframe} horizontal showsHorizontalScrollIndicator={false} renderItem={({item})=><RenderTimeframe data={item} setOnPressed={setOnPressed} onPressed={onPressed} centerTab={centerTab}/> } keyExtractor={item=>item.id}/>
      </View>

      {refreshing && <ActivityIndicator size="large" refreshing={refreshing} onRefresh={onRefresh} /> }

      <RecentTransaction recentTransData={recentTransData} centerTab={centerTab} darkMode={darkMode}/>
      </ScrollView>

       <BottomSlider />
    </View>
  )
}

export default HomeScreen