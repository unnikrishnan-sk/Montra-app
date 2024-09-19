import React from 'react'
import { Pressable, Text } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';

const FilterSortComponent = ({data, setFilter, filter, sort, setSort, isFilter}) => {

    const { id,name } = data;
    
    const onSelectItem = (id) => {
        if(isFilter) setFilter(id)
        else setSort(id) }

  return (
     <Pressable onPress={()=>onSelectItem(id)}
        style={{height: HEIGHT*0.065, width: WIDTH*0.28, borderRadius: HEIGHT*0.03, borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: HEIGHT*0.012, borderColor: filter=== id || sort === id ? colorMix.violet_100 : colorMix.light_20, backgroundColor: filter === id || sort=== id ? colorMix.violet_20 : colorMix.light_100, marginLeft: id!==0 ? WIDTH*0.015 : 0 }}>

        <Text style={{ fontWeight: 500, fontSize: HEIGHT*0.02, color: filter === id || sort === id ? colorMix.violet_100 : colorMix.dark_100 }}>{name}</Text>
        </Pressable>
  )
}

export default FilterSortComponent