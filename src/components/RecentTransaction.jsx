import React from 'react'
import { Pressable, Text, View, FlatList } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import RenderTransactionItems from './RenderTransactionItems'
import { useNavigation } from '@react-navigation/native'

const RecentTransaction = ({recentTransData, centerTab, darkMode}) => {

  const navigation = useNavigation();

  return (
    <>
    <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.05, justifyContent: 'space-between', alignItems: 'center', paddingTop: HEIGHT*0.03, backgroundColor: darkMode?colorMix.dark_100:colorMix.light_100 }}>

        <Text style={{ fontWeight: '500', fontSize: HEIGHT*0.025, color: darkMode? colorMix.light_100:colorMix.dark_100 }}>Recent Transaction</Text>

        <Pressable onPress={()=>navigation.navigate('transaction')}
        style={{ paddingTop: HEIGHT*0.008, paddingBottom: HEIGHT*0.008, paddingLeft: WIDTH*0.035, paddingRight: WIDTH*0.035, borderRadius: HEIGHT*0.02, backgroundColor: centerTab ? colorMix.violet_40 : colorMix.violet_20 }}>
            <Text style={{ color: colorMix.violet_100, fontSize: HEIGHT*0.02 }}>See All</Text>
        </Pressable>
    </View>

    {recentTransData?.length === 0 ? <View style={{ paddingTop: WIDTH*0.05, alignItems: 'center', backgroundColor: darkMode? colorMix.dark_100:colorMix.light_100, paddingBottom: HEIGHT*0.1 }}>
      <Text style={{ fontSize: HEIGHT*0.022, fontWeight: 500, color: colorMix.violet_100
      }}>No transactions to show here</Text></View> 
      : <FlatList 
        data={recentTransData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderTransactionItems data={item} centerTab={centerTab} darkMode={darkMode}/> }
        keyExtractor={item=>item.id}
        />}
    </>
  )
}

export default RecentTransaction