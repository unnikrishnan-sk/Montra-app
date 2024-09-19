import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { HEIGHT } from '../constants/dimension'
import FilterSortComponent from './FilterSortComponent'
import { colorMix } from '../constants/color'

const FilterSortModal = ({openFilter,setOpenFilter,setFilter,filter,sort,setSort, setAllData,heading,ItemData}) => {
  return (
    <View>
    <Text style={{ fontWeight: 600, marginTop: HEIGHT*0.02, fontSize: HEIGHT*0.023, color: colorMix.dark_100
    }}>{heading}</Text>

    <FlatList 
    contentContainerStyle={{ 
         flexDirection: 'row', flexWrap: 'wrap' }}
    data={ItemData}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=><FilterSortComponent data={item} setFilter={setFilter} filter={filter} isFilter={heading==="Filter By" ? true : false} setSort={setSort} sort={sort}/> }
    keyExtractor={item=>item.id}/>
    </View>
  )
}

export default FilterSortModal