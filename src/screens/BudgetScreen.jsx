import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { arrow_left, arrow_right, arrow_right_white, back_arrow_white, right_arrow, warning_symbol } from '../assets'
import { colorMix } from '../constants/color'
import moment from 'moment'
import * as Progress from 'react-native-progress'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import RenderBudgets from '../components/RenderBudgets'
import BottomSlider from '../components/BottomSlider'
import { getAllBudgetData, getBudgetData } from '../http/api'
import { useSelector } from 'react-redux'

const BudgetScreen = () => {

    const [ month,setMonth ] = useState(moment(new Date()));
    const [budgetDatas,setBudgetDatas] = useState([]);

    const navigation = useNavigation();

    //  console.log(moment(month).format('MMMM'));

     useEffect(()=>{
        fetchData()
     },[budgetDatas])

     const darkMode = useSelector((state)=>state.mode.darkMode)

     const fetchData = async () => {
        const data = await getAllBudgetData();
        // console.log("datas",data.id);
        setBudgetDatas(data);
    }

    //  console.log("budgetDatas here",budgetDatas);

    //  const getAllBudgetData = async () => {
    //     const data = await getBudgetData()
    //     const budgetDataWithExpenses = await Promise.all(
    //         budgetData.map(async (budget) => {
    //             const totalExpense = await getTotalExpenseForCategory(budget.budgetCat);
    //             return{
    //                 ...budget,
    //                 totalExpense,
    //             }
    //         })
    //     )
    //     return budgetDataWithExpenses;
    //     setBudgetDatas(data)
    //     console.log(data);
    //  }

     const previousMonth = () => {
        setMonth(month.clone().subtract(1,'month'))
     }

     const nextMonth = () => {
        setMonth(month.clone().add(1,'month'))
     }

     
  return (
    <View style={{
        backgroundColor: colorMix.violet_100,
        // height: HEIGHT
    }}>
        <View style={{
            // borderWidth: 1,
            // height: HEIGHT,
            // marginTop: HEIGHT*0.03
            paddingTop: HEIGHT*0.08,
            backgroundColor: colorMix.violet_100,
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05,
            justifyContent: 'space-between',
            paddingBottom: HEIGHT*0.02
        }}>
            <Pressable
            onPress={previousMonth}
            >
            <Image 
            style={{
                height: HEIGHT*0.03
            }}
            source={arrow_left}
            />
            </Pressable>
            <Text style={{
                color: colorMix.light_100,
                fontSize: HEIGHT*0.028,
                fontWeight: '500'
            }}>{moment(month).format('MMMM')}</Text>
            <Pressable
            onPress={nextMonth}
            >
            <Image
            style={{
                height: HEIGHT*0.03
            }} 
            source={arrow_right_white}
            />
            </Pressable>
        </View>

       <ScrollView contentContainerStyle={{
        flexGrow: 1
       }}>
        <View style={{
            // borderWidth:1,
            marginTop: HEIGHT*0.02,
            height: HEIGHT*0.75,
            backgroundColor: colorMix.light_80,
            borderTopLeftRadius: HEIGHT*0.03,
            borderTopRightRadius: HEIGHT*0.03,
            // height: HEIGHT*0.9,
            // alignItems: 'center',
            // justifyContent: 'center'
        }}>
            {budgetDatas && budgetDatas.length>0 ?
            <View style={{
            // borderWidth: 1,
            // height: HEIGHT*0.2,
            // borderRadius: HEIGHT*0.02
            paddingHorizontal: WIDTH*0.05,
            paddingVertical: HEIGHT*0.02
        }}>
           <FlatList 
        data={budgetDatas}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderBudgets data={item}/> }
        keyExtractor={item=>item.id}
        />

        </View> : 
         <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: HEIGHT*0.72
        }}>
        <Text style={{
            textAlign: 'center',
            marginTop: HEIGHT*0.02,
            color: colorMix.dark_25
        }}>You don't have a budget.</Text>
        <Text style={{
            textAlign: 'center',
            color: colorMix.dark_25
        }}>Let's make one so you in control.</Text>
        </View>
        }
        </View>
          
        <View style={{
            // borderWidth:1,
            width: WIDTH,
                position: 'absolute',
                bottom: HEIGHT*0.05,
                // marginBottom: HEIGHT*0.03,
                // marginTop: HEIGHT*0.03,
                paddingHorizontal: WIDTH*0.05
            }}>
            <ButtonComponent title="Create a budget" onButtonHandler={()=>navigation.navigate('createbudget')}/>
            </View>
            </ScrollView>
           
    </View>
  )
}

export default BudgetScreen