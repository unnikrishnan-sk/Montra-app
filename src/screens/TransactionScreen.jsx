import React, { useEffect, useState } from 'react'
import { FlatList, Image, Modal, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { arrow_right, dropdown_arrow, right_arrow, sort_icon } from '../assets'
import { colorMix } from '../constants/color'
import { allTransactionData } from '../constants/dummyData'
import RenderTransactionItems from '../components/RenderTransactionItems'
import SortModal from '../components/SortModal'
import { useSelector } from 'react-redux'
import { allExpense } from '../http/api'
import { useNavigation } from '@react-navigation/native'

const TransactionScreen = () => {

    const [openFilter,setOpenFilter] = useState(false);
    const [filter,setFilter] = useState(null)
    const [allData,setAllData] = useState([]);
    const [sort,setSort] = useState(null)
    console.log(sort);

    const darkMode = useSelector((state)=>state.mode.darkMode)
    const navigation = useNavigation();

    useEffect(()=>{
        getData();
    },[])

    const getData = async () => {
        const allExpenses = await allExpense();
        console.log("allExpense", allExpenses);
        setAllData(allExpenses)
    }
    
  return (
    <View style={{
        // borderWidth: 1
        backgroundColor: colorMix.light_100,
        height: HEIGHT
    }}>
        <View style={{
            // borderWidth:1,
            height: HEIGHT*0.05,
            marginTop: HEIGHT*0.05,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05
        }}>
            <View style={{
                borderWidth:1,
                height: HEIGHT*0.05,
                flexDirection: 'row' ,
                // padding: HEIGHT*0.005
                paddingHorizontal: HEIGHT*0.007,
                paddingVertical: HEIGHT*0.004,
                borderRadius: HEIGHT*0.03,
                alignItems: 'center',
                borderColor: colorMix.light_20
            }}>
                <Image 
                style={{
                    height: HEIGHT*0.01,
                    width: HEIGHT*0.02,
                    marginLeft: WIDTH*0.02
                }}
                source={dropdown_arrow}
                />
                <Text style={{
                    // marginLeft: WIDTH*0.02,
                    marginHorizontal: WIDTH*0.02
                }}>Month</Text>
            </View>
            <Pressable 
            onPress={()=>setOpenFilter(!openFilter)}
            >
            <Image 
            source={sort_icon}
            />
            </Pressable>
        </View>

        <View style={{
            // borderWidth: 1,
            height: HEIGHT*0.06,
            marginTop: HEIGHT*0.02,
            paddingHorizontal: WIDTH*0.05
        }}>
            <Pressable
            onPress={()=>navigation.navigate('financialreport')}
             style={{
                // borderWidth: 1,
                height: HEIGHT*0.06,
                borderRadius:HEIGHT*0.01,
                backgroundColor: colorMix.violet_20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: colorMix.violet_100,
                    marginLeft: WIDTH*0.03,
                    fontSize: HEIGHT*0.02
                }}>See your financial report</Text>
                <Image
                style={{
                    marginRight: WIDTH*0.03,
                    height: HEIGHT*0.02,
                    width: HEIGHT*0.01
                }}
                source={right_arrow} 
                />
            </Pressable>
        </View>

        {/* <Text style={{
            marginTop: HEIGHT*0.02,
            marginLeft: WIDTH*0.05,
            fontSize: HEIGHT*0.022,
            fontWeight: '500'
        }}>Today</Text> */}


        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{
            // borderWidth: 1,
            marginTop: HEIGHT*0.02
        }}>
             <FlatList 
        data={allData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderTransactionItems data={item}/> }
        keyExtractor={item=>item.id}
        />
        </ScrollView>

        <Modal
        animationType="slide"
        transparent={true}
        visible={openFilter}
        >
            <SortModal  openFilter={openFilter} setOpenFilter={setOpenFilter} setFilter={setFilter} filter={filter} sort={sort} setSort={setSort}/>

      </Modal>

    </View>
  )
}

export default TransactionScreen