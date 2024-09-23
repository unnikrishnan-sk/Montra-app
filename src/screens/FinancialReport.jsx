import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { income_general_icon, shopping_icon } from '../assets'
import BottomSlider from '../components/BottomSlider'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'
import { budgetFinData } from '../constants/dummyData'
import RenderBudgetItems from '../components/RenderBudgetItems'

const FinancialReport = () => {

    const [reports,setReports] = useState(0);
    const navigation = useNavigation();

    const handleReport = () => {
        if(reports<3){
            setReports(prev => prev+1 )
        }  
    }

  return (
   <Pressable 
   onPress={()=>handleReport()}
   style={{ backgroundColor: reports===0 ? colorMix.red_100 : reports===1 ? colorMix.green_100 : colorMix.violet_100,
    height: HEIGHT }}>
   
   <View style={{ height: HEIGHT*0.01, paddingHorizontal: WIDTH*0.05, paddingTop: HEIGHT*0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    {[...Array(4)].map((_,index)=>{
        const backgroundClr = (
        (reports === 0 ) ? colorMix.light_100 : colorMix.red_60 ||
        (reports === 1 ) ? colorMix.light_100 : colorMix.green_60 ||
        (reports === 2 ) ? colorMix.light_100 : colorMix.violet_60 ||
        (reports === 3 ) ? colorMix.light_100: colorMix.violet_60
      )
        return(
            <View key={index}
             style={{ height: HEIGHT*0.005, width: WIDTH*0.22, backgroundColor: backgroundClr, borderRadius: HEIGHT*0.005 }}></View>
        )     
    })}
   
   </View>
   {reports===3 ? <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.2 }}>

        <Text style={{ color: colorMix.light_100, fontWeight: '700', fontSize: HEIGHT*0.056, alignSelf: 'center'}}>
            "Financial freedom is freedom from fear."
        </Text>

        <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.03, fontWeight: '600', marginLeft: WIDTH*0.03, marginTop: HEIGHT*0.02 }}>-Robert Kiyosaki</Text>

        <View style={{ marginTop: HEIGHT*0.35, paddingHorizontal: WIDTH*0.05 }}>

        <ButtonComponent bgColor={colorMix.light_80} onButtonHandler={()=>navigation.navigate('detailfinancialreport')} 
        title="See the full detail" txtColor={colorMix.violet_100}/>
        </View>
    </View> : ( 
        <>
        <Text style={{ color: colorMix.light_20, fontSize: HEIGHT*0.032, alignSelf: 'center', marginTop: HEIGHT*0.025
        }}>This Month</Text>

        {reports===2? <View style={{ marginTop: HEIGHT*0.3, paddingHorizontal: WIDTH*0.05 }}>

            <Text style={{ color:colorMix.light_100, fontSize: HEIGHT*0.045, fontWeight: '600', width: WIDTH*0.7, alignSelf: 'center', textAlign: 'center'}}> 2 of 12 Budget is exceeds the limit</Text>
        
                <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.03, }}>
                    <FlatList 
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-between' }}
                    data={budgetFinData} horizontal showsHorizontalScrollIndicator={false} renderItem={({item,index})=><RenderBudgetItems data={item}/> } keyExtractor={item=>item.id}/>
                </View>
        </View>
        : (
        <>
            <View style={{ marginTop: HEIGHT*0.25, alignItems: 'center' }}>
               <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.035, fontWeight: '600' }}>{reports===0 ? 'You Spend' : 'You Earned'}</Text>
               
                <Text style={{ color: colorMix.light_100, fontWeight: '700', fontSize: HEIGHT*0.065, marginTop: HEIGHT*0.015 }}>{reports===0 ? '$658' : '$5000'}</Text>
               </View>
        
        <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.13 }}>
            <View style={{ backgroundColor:colorMix.light_100, alignItems: 'center', paddingHorizontal: WIDTH*0.2, borderRadius: HEIGHT*0.03 }}>
               
            <Text style={{ fontSize: HEIGHT*0.03, alignSelf: 'center', fontWeight: '700', color: colorMix.dark_100, marginTop: HEIGHT*0.02, textAlign: 'center' }}>
                {reports === 0 
          ? 'Your biggest spending is from ' 
          : 'Your biggest income is from '
        }</Text>

                <View style={{ borderWidth:1, padding: HEIGHT*0.01, borderRadius: HEIGHT*0.02, borderColor: colorMix.light_20, backgroundColor: colorMix.light_80, flexDirection: 'row', marginTop: HEIGHT*0.02 }}>

                <View style={{ paddingHorizontal: HEIGHT*0.006, paddingVertical: HEIGHT*0.008, borderRadius: HEIGHT*0.01, backgroundColor :reports===0 ? colorMix.yellow_20 : colorMix.green_20, alignItems: 'center' }}>

                <Image style={{ height: HEIGHT*0.024, width: HEIGHT*0.02 }}
                source={reports===0 ? shopping_icon : income_general_icon} />
                </View>
                   
                <Text style={{ marginLeft: WIDTH*0.02, fontWeight: '700', fontSize: HEIGHT*0.022, color: colorMix.dark_100 }}>{reports===0? 'Shopping' : 'Salary'}</Text>
                </View>
                
                <Text style={{ fontSize: HEIGHT*0.045, color: colorMix.dark_100, fontWeight: '500', marginTop: HEIGHT*0.02, marginBottom: HEIGHT*0.03 }}>{reports===0 ? '$ 210' : '$ 5000'}</Text>
            </View>
        </View>
        </>
        )}
    </>
    )
   }    
    <BottomSlider color={colorMix.light_100}/>
   </Pressable>
  )
}

export default FinancialReport