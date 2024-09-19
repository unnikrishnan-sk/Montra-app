import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { arrow_left, arrow_right_white } from '../assets'
import { colorMix } from '../constants/color'
import moment from 'moment'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import RenderBudgets from '../components/RenderBudgets'
import { getAllBudgetData } from '../http/api'
import { useSelector } from 'react-redux'

const BudgetScreen = () => {

    const [ month,setMonth ] = useState(moment(new Date()));
    const [budgetDatas,setBudgetDatas] = useState([]);
    const darkMode = useSelector((state)=>state.mode.darkMode)

    const navigation = useNavigation();

     useEffect(()=>{
        fetchData()
     },[budgetDatas])

     const fetchData = async () => {
        const data = await getAllBudgetData();
        setBudgetDatas(data);
    }

     const previousMonth = () => {
        setMonth(month.clone().subtract(1,'month'))
     }

     const nextMonth = () => {
        setMonth(month.clone().add(1,'month'))
     }
  
  return (
    <View style={{
        backgroundColor: colorMix.violet_100, }}>
            
        <View style={{ paddingTop: HEIGHT*0.08, backgroundColor: colorMix.violet_100, flexDirection: 'row', paddingHorizontal: WIDTH*0.05, justifyContent: 'space-between', paddingBottom: HEIGHT*0.02 }}>

            <Pressable onPress={previousMonth} >
            <Image style={{ height: HEIGHT*0.03 }}
            source={arrow_left} />
            </Pressable>

            <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.028, fontWeight: '500'
            }}>{moment(month).format('MMMM')}</Text>

            <Pressable onPress={nextMonth}>
            <Image style={{ height: HEIGHT*0.03 }} 
            source={arrow_right_white} />
            </Pressable>
        </View>

        <View style={{ marginTop: HEIGHT*0.02, height: HEIGHT*0.75, backgroundColor: colorMix.light_80, borderTopLeftRadius: HEIGHT*0.03, borderTopRightRadius: HEIGHT*0.03 }}>

        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: HEIGHT*0.07}} showsVerticalScrollIndicator={false}>

            {budgetDatas && budgetDatas.length>0 ?
            <View style={{paddingHorizontal: WIDTH*0.05, paddingVertical: HEIGHT*0.02 }}>

           <FlatList 
            data={budgetDatas}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><RenderBudgets data={item}/> }
            keyExtractor={item=>item.id} />
        </View> : 
            <View style={{ alignItems: 'center', justifyContent: 'center', height: HEIGHT*0.72 }}>

            <Text style={{ textAlign: 'center', marginTop: HEIGHT*0.02, color: colorMix.dark_25
            }}>You don't have a budget.</Text>

            <Text style={{ textAlign: 'center', color: colorMix.dark_25
        }}>Let's make one so you in control.</Text>

        </View>}
        </ScrollView>
        </View>

        <View style={{ width: WIDTH, position: 'absolute', height: HEIGHT*0.1, bottom: HEIGHT*0.001, paddingHorizontal: WIDTH*0.05, backgroundColor: colorMix.light_100, justifyContent: 'center' }}>

            <ButtonComponent title="Create a budget" onButtonHandler={()=>navigation.navigate('createbudget')}/>
            </View>

               
    </View>
  )
}

export default BudgetScreen