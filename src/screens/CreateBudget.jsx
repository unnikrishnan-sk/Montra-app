import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import DropdownComponent from '../components/DropdownComponent'
import { expenseCategoryType } from '../constants/dummyData'
import SwitchComponent from '../components/SwitchComponent'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid'


const CreateBudget = ({route}) => {

    const [budgetData,setBudgetData] = useState({
        id: uuid.v4(),
        budgetAmnt: 0,
        budgetCat: '',
        alert: false,
        alertLimit: 80
    })
    const navigation = useNavigation();

    useEffect(()=>{
        if(route?.params?.params?.data !==undefined){
            setBudgetData(route?.params?.params?.data)
        }
    },[])

    const handleTextInputChange = (key,value) => {
        setBudgetData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const handleSelectValue = (key,value) => {
        setBudgetData(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    const toggleSwitch = () => {
        setBudgetData(prevState => ({
            ...prevState,
            alert: !prevState.alert
        }))
      }

      const onSlideChange = (value) => {
        setBudgetData(prevState => ({
            ...prevState,
            alertLimit: parseFloat(value.toFixed(0))
        }))
      }

      const handleCreateBudget = async () => {
        try {
            const budgetId = budgetData?.id
            if(budgetId){
                const querySnapShot = await firestore().collection('Budget').where('id', '==', budgetId).get();

                if(!querySnapShot.empty) {
                    querySnapShot.forEach(async (doc)=> {
                        await firestore().collection('Budget').doc(doc.id).update(budgetData)
                    })
                }else{
                    await firestore().collection('Budget').add(budgetData);
                }
            navigation.navigate('budget')
            }
        } catch (error) {
            console.log("error_handleCreateBudget", error);
        }
      }

  return (
    <View style={{ backgroundColor: colorMix.violet_100 }}>
        <Navbar title={route?.params ? 'Edit Budget' : 'Create Budget'} titleColor={colorMix.light_100} />

        <View style={{ backgroundColor: colorMix.violet_100, paddingTop: budgetData?.alert ? HEIGHT*0.25 : HEIGHT*0.28, paddingHorizontal: WIDTH*0.05, paddingBottom: HEIGHT*0.02, }}>

            <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.023
            }}>How much do you want to spend?</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Text style={{color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight:'600'}}>$</Text>

        <TextInput style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: '600' }}
        placeholder='0'
        placeholderTextColor={colorMix.light_100}
        onChangeText={(text)=>handleTextInputChange('budgetAmnt',text)}
        value={budgetData?.budgetAmnt}
        />
        </View>
        </View>

        <View style={{ height:HEIGHT*0.5, backgroundColor: colorMix.light_100, borderTopLeftRadius: HEIGHT*0.04, borderTopRightRadius: HEIGHT*0.04, paddingHorizontal: WIDTH*0.05, paddingTop: HEIGHT*0.02 }}>
            
            <DropdownComponent value={budgetData?.budgetCat} setValue={(value)=>handleSelectValue('budgetCat',value)} title="Category" data={expenseCategoryType}/>

            <View style={{ flexDirection: 'row', marginTop: HEIGHT*0.03, justifyContent: 'space-between' }}>
            <View>

            <Text style={{ marginTop: HEIGHT*0.01, fontSize: HEIGHT*0.022
            }}>Receive Alert</Text>

            <Text style={{ marginTop: HEIGHT*0.01, color: colorMix.dark_25, width: WIDTH*0.5, fontSize: HEIGHT*0.02
            }}>Receive alert when it reaches some point.</Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

            <SwitchComponent toggleSwitch={toggleSwitch} isEnabled={budgetData?.alert}/>
            </View>
            </View>

            {budgetData?.alert && <View style={{ height: HEIGHT*0.03, position: 'relative' }}>
            <Slider
                style={{width: WIDTH*0.9, height: HEIGHT*0.03}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor={colorMix.violet_100}
                maximumTrackTintColor={colorMix.light_20}
                thumbTintColor="transparent"
                tapToSeek
                value={budgetData?.alertLimit}
                onValueChange={(value)=>{onSlideChange(value)}}
                trackStyle={{height: HEIGHT*0.05}}/>

                <View style={[{position: 'absolute', top: -30, justifyContent: 'center', alignItems: 'center'},  {left: (budgetData?.alertLimit/100)*(WIDTH*0.9)-20, top:HEIGHT*0.01 }]}>

          <View style={{ backgroundColor: colorMix.violet_100, borderRadius: HEIGHT*0.02, padding: HEIGHT*0.008,
          }}>
            <Text style={{ color: '#fff', fontWeight: 'bold',
            }}>{budgetData?.alertLimit}%</Text>
          </View>
          </View>
            </View>}

            <View style={{ marginTop:HEIGHT*0.02, marginBottom: HEIGHT*0.02, paddingTop: HEIGHT*0.02 }}>

                <ButtonComponent title="Continue" width={WIDTH} onButtonHandler={()=>handleCreateBudget()}/>
            </View>
            
            <View style={{ marginTop: HEIGHT*0.04, paddingBottom: HEIGHT*0.01 }}>
            <BottomSlider />
            </View>  
        </View>  
    </View>
  )
}

export default CreateBudget