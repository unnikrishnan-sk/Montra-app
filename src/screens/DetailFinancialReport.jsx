import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Navbar from '../components/Navbar'
import { Dropdown } from 'react-native-element-dropdown'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { monthData, noExpMnthChartData } from '../constants/dummyData'
import { dropdown_arrow, line_chart_icon_violet, line_chart_icon_white, pie_chart_icon_violet, pie_chart_icon_white, report_sort_icon } from '../assets'
import { LineChart, PieChartPro } from 'react-native-gifted-charts'
import RenderTransactionItems from '../components/RenderTransactionItems'
import PieChartData from '../components/PieChartData'
import { allExpense, allIncome, calculateExpense, expenseArr, latTransaction } from '../http/api'
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'

const DetailFinancialReport = () => {

    const [value,setValue] = useState(moment().format('MMMM'));
    const [focus,setIsFocus] = useState();
    const [transactionData,setTransactionData] = useState([])
    const [totalExpense,setTotalExpense] = useState(0);
    const [graphData,setGraphData] = useState(noExpMnthChartData);
    const [detail,setDetail] = useState(true)
    const [chartType,setChartType] = useState(true)
    const [chartSelected,setChartSelected] = useState(true)

    const navigation = useNavigation();

    const handleDroponChange = (item) => {
        setValue(item.value);
        setIsFocus(false);
      }

      const onSelectChart = () => {
        setChartSelected(!chartSelected);
      }

      useEffect(()=>{
        getData()
      },[detail,value])
      
      const getData = async () => {
        const transactionDet = await latTransaction();
        const allExpenses = await allExpense();
        const allIncomes = await allIncome();
        const expensess = await expenseArr(value);
        const expense = await calculateExpense(value);
        setTotalExpense(expense);
        const graphArr = expensess.map(item => ({['value']: parseFloat(item.amount)}))
      if(graphArr.length>0){
        setGraphData(graphArr)
      }else{
        setGraphData(noExpMnthChartData)
      }
        
      if(detail=== true){
        setTransactionData(allExpenses)
      }else if(detail === false){
        setTransactionData(allIncomes)
      }
      }

      const onBackBtn = () => {
        navigation.pop(2)
      }

  return (
   <View style={{ backgroundColor: colorMix.light_100, height: HEIGHT }}>
        <Navbar onBackBtn={onBackBtn} title="Financial Report"/>
        <View style={{ alignItems: 'center', paddingTop: HEIGHT*0.03, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: WIDTH*0.05 }}>

        <Dropdown style={{ borderColor: 'gray', borderRadius: HEIGHT*0.03, paddingHorizontal: WIDTH*0.01, borderWidth: 1, width: WIDTH*0.32, height: HEIGHT*0.05, backgroundColor: colorMix.light_80, borderColor: colorMix.light_20, color: colorMix.dark_100, marginTop: HEIGHT*0.02 }}
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
            <Image style={{ marginRight: WIDTH*0.02, height: HEIGHT*0.014, width: HEIGHT*0.028, marginLeft: WIDTH*0.01 }} source={dropdown_arrow} />
        )}
        renderRightIcon={() => null} />   

          <View style={{ height: HEIGHT*0.07, width: WIDTH*0.25, flexDirection: 'row' }}>

            <View style={{ borderWidth: 0.5, borderColor: colorMix.light_20, alignItems: 'center', justifyContent: 'center', width: WIDTH*0.12, height: HEIGHT*0.07, borderTopLeftRadius: HEIGHT*0.01, borderBottomLeftRadius: HEIGHT*0.01, backgroundColor: chartSelected ? colorMix.violet_100 : colorMix.light_40
            }}>

              <Pressable onPress={()=>onSelectChart()}>
                <Image source={chartSelected ? line_chart_icon_white :line_chart_icon_violet} />
              </Pressable>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', width: WIDTH*0.12, height: HEIGHT*0.07, borderTopRightRadius: HEIGHT*0.01, borderBottomRightRadius: HEIGHT*0.01, backgroundColor: chartSelected ? colorMix.light_40 : colorMix.violet_100 }}>

              <Pressable onPress={()=>onSelectChart()}>
                <Image source={chartSelected ? pie_chart_icon_violet : pie_chart_icon_white} />
              </Pressable>
            </View>
          </View>
        </View>

        {chartSelected ? ( <><View style={{ paddingHorizontal: WIDTH*0.05 }}>

        <Text style={{ fontWeight: '800', marginTop: HEIGHT*0.02, color: colorMix.dark_100, fontSize: HEIGHT*0.04 }}>$ {totalExpense}</Text>
        </View>
        
        <View style={{ marginLeft: -WIDTH*0.1 }}>
        <LineChart areaChart data = {graphData}
      style={{ marginLeft: WIDTH*0.1 }} spacing={WIDTH} initialSpacing={0} thickness={6} hideAxesAndRules hideDataPoints width={WIDTH} curved startFillColor={colorMix.violet_80} endFillColor={colorMix.violet_20}  startOpacity={0.4} endOpacity={0.1} color={colorMix.violet_100}/>
       </View></>
      ) : (
      <View style={{ alignItems: 'center',marginBottom: HEIGHT*0.03, marginTop: HEIGHT*0.03, justifyContent: 'center'}}>

        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <Text style={{ fontWeight: '800', position: 'absolute', alignSelf: 'center', textAlign: 'center', marginTop: HEIGHT*0.13, color: colorMix.dark_100, fontSize: HEIGHT*0.04 }}>$ {totalExpense}</Text>
        </View>

        <PieChartPro donut areaChart data = {graphData} 
        style={{ marginLeft: WIDTH*0.1, shadowColor: '#000',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 50, }} innerRadius={WIDTH*0.22} radius={WIDTH*0.28} shadow innerCircleBorderWidth={10} shiftInnerCenterX={100} shiftInnerCenterY={100} tilt={0.5} isThreeD />
       </View>)}

       <View style={{ height: HEIGHT*0.1, paddingHorizontal: WIDTH*0.05 }}>
         <View style={{ height: HEIGHT * 0.08, width: WIDTH * 0.89, borderRadius: HEIGHT*0.04, padding: HEIGHT*0.01, justifyContent: 'center', alignItems: 'center', backgroundColor: colorMix.light_40, flexDirection: 'row' }}>
          <TouchableOpacity style={[{ height: HEIGHT * 0.07, width: WIDTH * 0.43, paddingTop: 8, borderRadius: HEIGHT*0.04, paddingRight: 24, paddingBottom: 9, paddingLeft: 24, alignItems: 'center', justifyContent: 'center' },
          {backgroundColor: detail ? colorMix.violet_100 : colorMix.light_40}]}
          onPress={()=>setDetail(true)}>

            <Text style={[{ fontSize: 16, fontWeight: 'bold', fontWeight: 600, lineHeight: 19.2},
            {color: detail ? '#FFFFFF' : 'black'}]}>Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[{ height: HEIGHT * 0.07, width: WIDTH * 0.43, paddingTop: 8, borderRadius: HEIGHT*0.35, paddingRight: 24, paddingBottom: 8, paddingLeft: 24, gap: 10, alignItems: 'center', justifyContent: 'center' },
          { backgroundColor: detail ? colorMix.light_40 : colorMix.violet_100}]}
          onPress={()=>setDetail(false)}>

            <Text style={[{ fontSize: 16, fontWeight: 400, lineHeight: 19.2}, {color : detail ? 'black' : '#FFFFFF'}]}>Income</Text>
          </TouchableOpacity>
        </View>
       </View>

       <ScrollView showsVerticalScrollIndicator={false}>

       <View style={{ height: HEIGHT*0.055, paddingHorizontal: WIDTH*0.05, flexDirection: 'row', marginTop: HEIGHT*0.015, justifyContent: 'space-between' }}>

        <View style={{ flexDirection: 'row', borderWidth: 1, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: WIDTH*0.025, borderRadius: HEIGHT*0.03, borderColor: colorMix.light_20 }}>

          <Image source={dropdown_arrow} />
          <Text style={{ marginLeft: WIDTH*0.02 }}>Transaction</Text>
        </View>

        <View style={{ borderWidth:1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: WIDTH*0.02, borderRadius: HEIGHT*0.01, borderColor: colorMix.light_20 }}>
          <Image source={report_sort_icon}/>
        </View>
       </View>

       <View style={{ marginTop: HEIGHT*0.02 }}>

    {chartSelected ? ( 
      <FlatList contentContainerStyle={{ paddingBottom: HEIGHT*0.03 }}
        data={transactionData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderTransactionItems data={item}/> }
        keyExtractor={item=>item.id} />
      ) : (
          <FlatList contentContainerStyle={{ paddingBottom: HEIGHT*0.05 }}
            data={transactionData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><PieChartData data={item}/> }
            keyExtractor={item=>item.id}/>
        )}       
        </View>
        </ScrollView>
   </View>
  )
}

export default DetailFinancialReport