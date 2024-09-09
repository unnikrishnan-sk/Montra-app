import React from 'react'
import { FlatList, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import ButtonComponent from './ButtonComponent'
import BottomSlider from './BottomSlider'
import { shadowStyles } from '../constants/shadow'

const filterData = [{id:0, name: 'Income'}, {id:1, name: 'Expense'}, {id:2, name: 'Transfer'}]

const sortData = [{id:0, name: 'Highest'}, {id:1, name: 'Lowest'}, {id:2, name: 'Newest'}, {id:3, name: 'Oldest'}]

const RenderFilter = ({data, setFilter, filter, sort, setSort}) => {

    console.log("sorting ",sort);
    const onSelectItem = () => {
        if(filter){
            setFilter(filter)
        }else{
            setSort(sort)
        }
    }

    const { id,name } = data
    // console.log("filter here",filter, id);
    return(
        <Pressable 
        onPress={()=>onSelectItem()}
        style={{
            height: HEIGHT*0.065,
            width: WIDTH*0.28,
            borderRadius: HEIGHT*0.03,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: HEIGHT*0.012,
            borderColor: filter===id ? colorMix.violet_20 : colorMix.light_20,
            backgroundColor: filter===id ? colorMix.violet_20 : colorMix.light_100,
            marginLeft: id!==0 ? WIDTH*0.015 : 0
        }}>
        <Text style={{
            fontWeight: 500,
            fontSize: HEIGHT*0.02,
            color: filter===id ? colorMix.violet_100 : colorMix.dark_100,
            }}>{name}</Text>
        </Pressable>
    )
}

const SortModal = ({openFilter,setOpenFilter,setFilter,filter,sort,setSort}) => {
    console.log("sort here",sort);
  return (
    <View style={{
        // borderWidth: 1,
        height: HEIGHT*0.65,
        marginTop: HEIGHT*0.1,
        position: 'absolute',
        width: WIDTH,
        bottom: HEIGHT*0.01,
        backgroundColor: colorMix.light_100,
        backgroundColor: colorMix.light_100,
        borderTopLeftRadius: HEIGHT*0.035,
        borderTopRightRadius: HEIGHT*0.035,
        paddingHorizontal: WIDTH*0.05,
        ...shadowStyles
    }}>
        <Pressable 
        onPress={()=>setOpenFilter(false)}
        style={{
            borderWidth: 0.2,
            height: HEIGHT*0.007,
            width: WIDTH*0.1,
            borderRadius: HEIGHT*0.02,
            marginTop: HEIGHT*0.015,
            alignSelf: 'center',
            backgroundColor: colorMix.violet_40,
        }}></Pressable>

        <Text style={{
            fontWeight: 600,
            fontSize: HEIGHT*0.023,
            marginTop: HEIGHT*0.02
        }}>Filter Transaction</Text>

        <View>
        <Text style={{
            fontWeight: 600,
            marginTop: HEIGHT*0.02,
            fontSize: HEIGHT*0.023
        }}>Filter By</Text>

        <FlatList 
        contentContainerStyle={{
            // borderWidth: 1,
            height: HEIGHT*0.1,
            // marginTop: HEIGHT*0.1
        }}
        data={filterData}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item})=><RenderFilter data={item} setFilter={setFilter} filter={filter}/> }
        keyExtractor={item=>item.id}
        />
        </View>

        <View>
        <Text style={{
            fontWeight: 600,
            marginTop: HEIGHT*0.01,
            fontSize: HEIGHT*0.023
        }}>Sort By</Text>

 
        <FlatList 
        contentContainerStyle={{
            // flexDirection: 'column'
            // flexWrap: 'wrap',
            // borderWidth: 1,
            // height: HEIGHT*0.1,
            // marginTop: HEIGHT*0.1
            // justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}
        data={sortData}

        showsHorizontalScrollIndicator={false}
        // horizontal
        // numColumns={2}
        renderItem={({item})=><RenderFilter data={item} sort={sort} setSort={setSort}/> }
        keyExtractor={item=>item.id}
        />
        </View>
    
       
    <Text style={{
            fontWeight: 600,
            marginTop: HEIGHT*0.02,
            fontSize: HEIGHT*0.023
        }}>Category</Text>

        <View style={{
            flexDirection: 'row',
            // borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginTop: HEIGHT*0.01
        }}>
        <Text style={{
            fontWeight: 400,
            marginTop: HEIGHT*0.02,
            fontSize: HEIGHT*0.023
        }}>Choose Category</Text>

        <Text>0 Selected</Text>
        </View>

        <View style={{
            marginTop: HEIGHT*0.03
        }}>
            <ButtonComponent title="Apply"/>
        </View>
        <BottomSlider />
    </View>
  )
}

export default SortModal