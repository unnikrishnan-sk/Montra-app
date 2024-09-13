import React, { useEffect, useState } from 'react'
import { FlatList, Image, Modal, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { arrow_right, dropdown_arrow, right_arrow, sort_icon } from '../assets'
import { colorMix } from '../constants/color'
import { allTransactionData } from '../constants/dummyData'
import RenderTransactionItems from '../components/RenderTransactionItems'
import SortModal from '../components/SortModal'
import { useSelector } from 'react-redux'
import { allExpense, allIncome } from '../http/api'
import { useNavigation } from '@react-navigation/native'

const TransactionScreen = () => {

    const [openFilter,setOpenFilter] = useState(false);
    const [filter,setFilter] = useState(null)
    const [allData,setAllData] = useState([]);
    const [sort,setSort] = useState(null)
    const darkMode = useSelector((state)=>state.mode.darkMode)
    const navigation = useNavigation();

    useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        const allExpenses = await allExpense();
        const allIncomes = await allIncome();
        setAllData(allExpenses.concat(allIncomes))
    }
    
  return (
    <View style={{ backgroundColor: colorMix.light_100, height: HEIGHT }}>
        <View style={{ height: HEIGHT*0.05, marginTop: HEIGHT*0.05, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: WIDTH*0.05 }}>

            <View style={{ borderWidth:1, height: HEIGHT*0.05, flexDirection: 'row', paddingHorizontal: HEIGHT*0.007, paddingVertical: HEIGHT*0.004, borderRadius: HEIGHT*0.03, alignItems: 'center', borderColor: colorMix.light_20 }}>
                <Image style={{ height: HEIGHT*0.01, width: HEIGHT*0.02, marginLeft: WIDTH*0.02 }}
                source={dropdown_arrow} />

                <Text style={{ marginHorizontal: WIDTH*0.02, color: colorMix.dark_100, fontWeight: 500 }}>Month</Text>
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