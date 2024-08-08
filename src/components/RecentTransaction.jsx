import React, { useEffect, useState } from 'react'
import { Pressable, Text, View, FlatList } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { recentTransactionData } from '../constants/dummyData'
import RenderTransactionItems from './RenderTransactionItems'
import { useNavigation } from '@react-navigation/native'
import { latTransaction } from '../http/api'

const RecentTransaction = ({recentTransData}) => {

  const navigation = useNavigation();
  const [latTransactionDet,setLatTransactionDet] = useState([])

useEffect(()=>{
  getData();
},[])

  const getData = async () => {
    const data = await latTransaction();
    setLatTransactionDet(data)
  }
  
  // console.log("here",recentTransData);

  return (
    <>
    <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.05, justifyContent: 'space-between', alignItems: 'center', marginTop: HEIGHT*0.03 }}>
        <Text style={{ fontWeight: '500', fontSize: HEIGHT*0.025, color: colorMix.dark_100 }}>Recent Transaction</Text>
        <Pressable 
        onPress={()=>navigation.navigate('transaction')}
        style={{ paddingTop: HEIGHT*0.008, paddingBottom: HEIGHT*0.008, paddingLeft: WIDTH*0.035, paddingRight: WIDTH*0.035, borderRadius: HEIGHT*0.02, backgroundColor: colorMix.violet_20 }}>
            <Text style={{ color: colorMix.violet_100, fontSize: HEIGHT*0.02 }}>See All</Text>
        </Pressable>
    </View>
    <FlatList 
        data={latTransactionDet}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderTransactionItems data={item}/> }
        keyExtractor={item=>item.id}
        />
    </>
  )
}

export default RecentTransaction