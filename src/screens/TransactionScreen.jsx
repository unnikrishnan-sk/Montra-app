import React, { useEffect, useState } from 'react'
import { FlatList, Image, Modal, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { right_arrow, sort_icon } from '../assets'
import { colorMix } from '../constants/color'
import { monthData } from '../constants/dummyData'
import RenderTransactionItems from '../components/RenderTransactionItems'
import SortModal from '../components/SortModal'
import { useSelector } from 'react-redux'
import { allExpense, allIncome } from '../http/api'
import { useNavigation } from '@react-navigation/native'
import DropdownComponent from '../components/DropdownComponent'
import moment from 'moment'

const TransactionScreen = () => {

    const darkMode = useSelector((state)=>state.mode.darkMode)
    const [openFilter,setOpenFilter] = useState(false);
    const [filter,setFilter] = useState(null)
    const [allData,setAllData] = useState([]);
    const [sort,setSort] = useState(null)
    const [value,setValue] = useState(moment().format('MMMM'));
    const [isFocus,setIsFocus] = useState(false)
    const navigation = useNavigation();

    useEffect(()=>{
        getData();
    },[value])
 
    const getData = async () => {
        const allExpenses = await allExpense();
        const allIncomes = await allIncome();
        const totalData = allExpenses.concat(allIncomes)
        const currentDateFormat = new Date();
        const currentMonth = currentDateFormat.toLocaleString('default', { month: 'long'});
        const currentYear = currentDateFormat.getFullYear().toString();
        const dataMonth = [];
       
        totalData.forEach(item=>{
            if(item?.createdMonth && item?.createdYear){
              const itemMonth = item.createdMonth;
              const itemYear = item.createdYear.toString();
      
              if(itemMonth===value && itemYear===currentYear)
              {
                dataMonth.push(item)
              }
            }
          })
          setAllData([...dataMonth])}

    const handleDroponChange = (item) => {
        setValue(item.value);
        setIsFocus(false);
      }
    
  return (
    <View style={{ backgroundColor: colorMix.light_100, height: HEIGHT }}>
        <View style={{ height: HEIGHT*0.08, marginTop: HEIGHT*0.05, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: WIDTH*0.05 }}>

                <View style={{width: WIDTH*0.35 }}>
                <DropdownComponent value={value} setValue={setValue}  onChange={(item) => handleDroponChange(item)}  data={monthData} darkMode={darkMode}/>
                </View>

            <Pressable onPress={()=>setOpenFilter(!openFilter)} >
            <Image source={sort_icon} />
            </Pressable>
        </View>

        <View style={{ height: HEIGHT*0.06, marginTop: HEIGHT*0.02, paddingHorizontal: WIDTH*0.05 }}>

            <Pressable onPress={()=>navigation.navigate('financialreport')}
             style={{ height: HEIGHT*0.06, borderRadius:HEIGHT*0.01, backgroundColor: colorMix.violet_20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: colorMix.violet_100, marginLeft: WIDTH*0.03, fontSize: HEIGHT*0.02 }}>See your financial report</Text>

                <Image style={{ marginRight: WIDTH*0.03, height: HEIGHT*0.02, width: HEIGHT*0.01 }}
                source={right_arrow} />
            </Pressable>
        </View>

        {allData?.length===0 && <Text style={{alignSelf:'center',marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.023, fontWeight: 700}}>No data to show</Text>}
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ marginTop: HEIGHT*0.02 }}>
            <FlatList contentContainerStyle={{ paddingBottom: HEIGHT*0.12 }}
            data={allData}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><RenderTransactionItems data={item}/> }
            keyExtractor={item=>item.id} />
        </ScrollView>

        <Modal
        animationType="slide"
        transparent={true}
        visible={openFilter}>
            <SortModal  openFilter={openFilter} setOpenFilter={setOpenFilter} setFilter={setFilter} filter={filter} sort={sort} setSort={setSort} setAllData={setAllData}/>
      </Modal>
    </View>
  )
}

export default TransactionScreen