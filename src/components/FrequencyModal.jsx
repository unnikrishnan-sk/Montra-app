import React, { useEffect, useState } from 'react'
import { Image, Modal, Pressable, Text, View } from 'react-native'
import DropdownComponent from './DropdownComponent'
import { endAfterDetails, frequencyDetails, monthData, monthsDetails } from '../constants/dummyData'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from './ButtonComponent'
import DatePicker from 'react-native-date-picker'
import { colorMix } from '../constants/color'
import { dropdown_arrow } from '../assets'
import moment from 'moment'
import firestore from '@react-native-firebase/firestore';
import { startAfter } from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native'

const FrequencyModal = ({expenseData,darkMode}) => {

  const [frequencyData,setFrequencyData] = useState({
    frequency: '',
    month: '',
    startDate: '',
    endDate: new Date()
  })
  console.log("frequencyData",frequencyData);
  const [endAfter,setEndAfter] = useState();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const navigation = useNavigation();
  const daysArray = [];

  useEffect(()=>{
    const daysInMonth = moment(frequencyData.month, 'MMMM').daysInMonth();
    for(let i=0;i<daysInMonth-1;i++){
      daysArray.push({name: (i+1).toString(), value: (i+1).toString()})
    }
  },[frequencyData.month])
  
  const handlePress = () => {
    setIsDatePickerVisible(true)
  }

  const handleSelectValue = (key,value) => {
    console.log("updating", key, 'to', value);
    setFrequencyData(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  const handleDateChange = (date) => {
    setFrequencyData(prevState => ({
      ...prevState,
      endDate: date
    }
  ))
  }

  const handlePostSuccess = () => {
    setIsDatePickerVisible(false)
    navigation.navigate('myTabs')
  }

  const onHandleFrequency = async () => {
    const combinedData = {...expenseData,...frequencyData}
      try {
        await firestore().collection('Expenses').add(combinedData);
        handlePostSuccess();
      } catch (error) {
        console.log("error_handleExpense", error);
      }  
  }

  return (
    <>
    <View style={{ paddingHorizontal: WIDTH*0.05 }}>

          {frequencyData?.frequency!=='' ?  
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ width: WIDTH*0.3 }}>
            <DropdownComponent value={frequencyData?.frequency} setValue={(value)=>handleSelectValue('frequency',value)} title="Yearly" data={frequencyDetails} darkMode={darkMode}/>
            </View>

            <View style={{ width: WIDTH*0.26 }}>

            {frequencyData?.frequency !=='monthly' && <DropdownComponent value={frequencyData?.month} setValue={(value)=>handleSelectValue('month',value)} title="Month" data={monthsDetails} darkMode={darkMode}/>}
            </View>

            <View style={{ width: WIDTH*0.2 }}>
            <DropdownComponent value={frequencyData?.startDate} setValue={(value)=>handleSelectValue('startDate',value)} title="Date" data={daysArray} darkMode={darkMode}/>
            </View>
          </View> 
            : 
          <DropdownComponent value={frequencyData.frequency} setValue={(value)=>handleSelectValue('frequency',value)} title="Frequency" data={frequencyDetails} darkMode={darkMode}/>
          } 
          {frequencyData?.frequency == '' &&  <DropdownComponent value="endAfter" setValue={setEndAfter} title="End After" data={endAfterDetails} darkMode={darkMode}/>}

        { frequencyData?.frequency !=='' &&
          <View style={{ flexDirection: 'row' }}>
          <View style={{ borderWidth:1, height: HEIGHT*0.07, width: WIDTH*0.4, marginTop: HEIGHT*0.02, borderRadius: HEIGHT*0.02, justifyContent: 'center', borderColor: colorMix.light_20 }}>
            <Text style={{ marginLeft: WIDTH*0.03, color: colorMix.dark_25 }}>Date</Text>
          </View>
  
          <Pressable onPress={handlePress}
          style={{ borderWidth:1, height: HEIGHT*0.07, width: WIDTH*0.45, marginTop: HEIGHT*0.02, marginLeft: WIDTH*0.05, borderRadius: HEIGHT*0.02, borderColor: colorMix.light_20, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>

            <Text style={{ paddingLeft: WIDTH*0.02, alignItems: 'center', color: darkMode?colorMix.light_100:colorMix.dark_100
            }}>{moment(frequencyData?.endDate).format('DD MM YYYY') !== moment(new Date()).format('DD MM YYYY') ? moment(frequencyData?.endDate).format('DD MMMM YYYY') : 'End Date'}</Text>

            <Image style={{ marginRight: WIDTH*0.02, height: HEIGHT*0.01, width: HEIGHT*0.021 }}
            source={dropdown_arrow} />
          </Pressable>
          </View>}
        </View>

        <View style={{ marginTop: HEIGHT*0.02, paddingHorizontal: WIDTH*0.05 }}>
        <ButtonComponent title="Next" onButtonHandler={onHandleFrequency}/>
        </View>

      <Modal 
      animationType='slide'
      transparent={true}
      visible={isDatePickerVisible}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: WIDTH * 0.85, backgroundColor: colorMix.light_100, borderRadius: HEIGHT * 0.02, padding: HEIGHT * 0.02 }}>
        <DatePicker
        mode='date'
        date={frequencyData?.endDate}
        minimumDate={new Date()}
        onDateChange={handleDateChange} />

        <Pressable onPress={()=>setIsDatePickerVisible(false)} 
          style={{ marginTop: HEIGHT * 0.02, backgroundColor: colorMix.violet_100, padding: HEIGHT * 0.015, borderRadius: HEIGHT * 0.02, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color: colorMix.light_100 }}>Set</Text>
        </Pressable>

        </View>
        </View>
      </Modal>
    </>
  )
}

export default FrequencyModal