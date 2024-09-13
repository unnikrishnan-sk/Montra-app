import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import ButtonComponent from './ButtonComponent'
import BottomSlider from './BottomSlider'
import { shadowStyles } from '../constants/shadow'
import { useNavigation } from '@react-navigation/native'
import { allExpense, allIncome } from '../http/api'
import { filterData, sortData } from '../constants/dummyData'

const RenderFilter = ({data, setFilter, filter, sort, setSort, isFilter}) => {

    const onSelectItem = (id) => {
        if(isFilter){
            setFilter(id)
        }else {
            setSort(id)
        }     
    }
    const { id,name } = data

    return(
        <Pressable onPress={()=>onSelectItem(id)}
        style={{ height: HEIGHT*0.065, width: WIDTH*0.28, borderRadius: HEIGHT*0.03, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: HEIGHT*0.012, borderColor: filter=== id || sort === id ? colorMix.violet_100 : colorMix.light_20, backgroundColor: filter === id || sort=== id ? colorMix.violet_20 : colorMix.light_100, marginLeft: id!==0 ? WIDTH*0.015 : 0 }}>

        <Text style={{ fontWeight: 500, fontSize: HEIGHT*0.02, color: filter === id || sort === id ? colorMix.violet_100 : colorMix.dark_100 }}>{name}</Text>
        </Pressable>
    )
}

const SortModal = ({openFilter,setOpenFilter,setFilter,filter,sort,setSort, setAllData}) => {

    const navigation = useNavigation();
    const onResetFn = () => {
        setFilter(null)
        setSort(null)
    }

    const handleSortFilterBtn = async () => {
        try{
            setOpenFilter(false)
            const allExpenses = await allExpense();
            const allIncomes = await allIncome();
            let filteredData = [];

            if(filter===0){
                filteredData = allIncomes
            }else if(filter===1){
                filteredData = allExpenses
            } else {
                filteredData = allExpenses.concat(allIncomes)
            }
            if(sort === 0){
                filteredData = filteredData.sort((a,b)=>b.amount-a.amount)
            }else if(sort === 1){
                filteredData = filteredData.sort((a,b)=>a.amount-b.amount)
            }else if(sort === 2){
                filteredData = filteredData.sort((a,b)=>b.createdAt-a.createdAt)
            }else if(sort === 3){
                filteredData = filteredData.sort((a,b)=>a.createdAt-b.createdAt)
            }
            setAllData(filteredData)
           
        }catch(error){
            console.log("Error filtering or sorting data", error);
        }
    }

  return (
    <View style={{ height: HEIGHT*0.7, marginTop: HEIGHT*0.1, position: 'absolute', width: WIDTH, bottom: HEIGHT*0.001, backgroundColor: colorMix.light_100, backgroundColor: colorMix.light_100, borderTopLeftRadius: HEIGHT*0.035,  borderTopRightRadius: HEIGHT*0.035, paddingHorizontal: WIDTH*0.05, ...shadowStyles }}>

        <Pressable onPress={()=>setOpenFilter(false)}
        style={{ borderWidth: 0.2, height: HEIGHT*0.007, width: WIDTH*0.1, borderRadius: HEIGHT*0.02, marginTop: HEIGHT*0.015, alignSelf: 'center', backgroundColor: colorMix.violet_40,}}></Pressable>

        <View style={{ marginTop: HEIGHT*0.02, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

        <Text style={{ fontWeight: 600, fontSize: HEIGHT*0.023, color: colorMix.dark_100
        }}>Filter Transaction</Text>

        <Pressable onPress={()=>onResetFn()}
        style={{ paddingTop: HEIGHT*0.008, paddingBottom: HEIGHT*0.008, paddingLeft: HEIGHT*0.02, paddingRight: HEIGHT*0.02, borderRadius: HEIGHT*0.025, backgroundColor: colorMix.violet_20 }}>

            <Text style={{ fontSize: HEIGHT*0.021, fontWeight: 700, color: colorMix.violet_100 }}>Reset</Text>
        </Pressable>
        </View>

        <View>
        <Text style={{ fontWeight: 600, marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.023, color: colorMix.dark_100
        }}>Filter By</Text>

        <FlatList 
        contentContainerStyle={{ height: HEIGHT*0.1 }}
        data={filterData}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item})=><RenderFilter data={item} setFilter={setFilter} filter={filter} isFilter={true}/> }
        keyExtractor={item=>item.id}/>
        </View>

        <View>
        <Text style={{ fontWeight: 600, marginTop: HEIGHT*0.01, fontSize: HEIGHT*0.023, color: colorMix.dark_100 }}>Sort By</Text>

        <FlatList contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
        data={sortData}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><RenderFilter data={item} sort={sort} setSort={setSort}/> }
        keyExtractor={item=>item.id} />
        </View>
    
        <Text style={{ fontWeight: 600, marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.023, color: colorMix.dark_100 }}>Category</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

        <Text style={{ fontWeight: 400, marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.023, color: colorMix.dark_100  }}>Choose Category</Text>

        <Text>0 Selected</Text>
        </View>

        <View style={{ marginTop: HEIGHT*0.03 }}>

            <ButtonComponent onButtonHandler={()=>handleSortFilterBtn()} title="Apply"/>
        </View>

        <View style={{ marginTop: HEIGHT*0.09 }}>
        <BottomSlider />
        </View>
    </View>
  )
}

export default SortModal