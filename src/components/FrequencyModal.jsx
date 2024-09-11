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

const FrequencyModal = ({expenseData}) => {
  // console.log(expenseData);

  const [frequencyData,setFrequencyData] = useState({
    frequency: '',
    month: '',
    startDate: '',
    endDate: new Date()
  })
  console.log("frequencyData",frequencyData);
  // const [frequency,setFrequency] = useState('');
  const [endAfter,setEndAfter] = useState();
  // const [month,setMonth] = useState();
  // const [dateData,setDateData] = useState()
  // const [endDate,setEndDate] = useState();
  // const [repeatDate,setRepeatDate] = useState();
  // const [repeateDateModal,setRepeatDateModal] = useState(false);
  // const [date,setDate] = useState(new Date());
  // const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const navigation = useNavigation();

  // let currDate = moment(new Date())
  // console.log("current month",currDate);
// console.log("month here", frequencyData.month);
// console.log(dateData);
const daysArray = [];

  useEffect(()=>{
    const daysInMonth = moment(frequencyData.month, 'MMMM').daysInMonth();
    // console.log("daysinmonth",daysInMonth);
    for(let i=0;i<daysInMonth-1;i++){
      daysArray.push({name: (i+1).toString(), value: (i+1).toString()})
    }
    // console.log("daysarray",daysArray);
    // setDateData(daysArray)
    // console.log(dateData);
  },[frequencyData.month])
  // console.log("_____daysArray",dateData);

  // const onHandleButtonPress = () => {
  //   setRepeatDateModal(true)
  //   setRepeatModal(false)
  // }

  const handlePress = () => {
    setIsDatePickerVisible(true)
  }

  // const handleDateChange = (date) => {
  //   setDate(date);
  //   console.log(date);
  //   // dateData = date.daysInMonth()

  //   // setIsDatePickerVisible(false)
  // }

  // const handleDateSelect = () => {
  //   setDate(date)
  //   setIsDatePickerVisible(false)
  // }

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
    // console.log("here");
    setIsDatePickerVisible(false)
    navigation.navigate('myTabs')
    // console.log("also here");
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
    <View style={{
        // borderWidth:1,
            paddingHorizontal: WIDTH*0.05
        }}>
          {frequencyData?.frequency!=='' ?  
          <View style={{
            // borderWidth:1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <View style={{
              width: WIDTH*0.3
            }}>
            <DropdownComponent value={frequencyData?.frequency} setValue={(value)=>handleSelectValue('frequency',value)} title="Yearly" data={frequencyDetails}/>
            </View>
            <View style={{
              width: WIDTH*0.26
            }}>
            {frequencyData?.frequency !=='monthly' && <DropdownComponent value={frequencyData?.month} setValue={(value)=>handleSelectValue('month',value)} title="Month" data={monthsDetails}/>}
            </View>
            <View style={{
              width: WIDTH*0.2
            }}>
            <DropdownComponent value={frequencyData?.startDate} setValue={(value)=>handleSelectValue('startDate',value)} title="Date" data={daysArray} />
            </View>
          </View> 
            : 
          <DropdownComponent value={frequencyData.frequency} setValue={(value)=>handleSelectValue('frequency',value)} title="Frequency" data={frequencyDetails}/>
          } 
          {frequencyData?.frequency == '' &&  <DropdownComponent value="endAfter" setValue={setEndAfter} title="End After" data={endAfterDetails}/>}

        { frequencyData?.frequency !=='' &&
          <View style={{
            // borderWidth:1,
            flexDirection: 'row'
          }}>
          <View style={{
            borderWidth:1,
            height: HEIGHT*0.07,
            width: WIDTH*0.4,
            marginTop: HEIGHT*0.02,
            borderRadius: HEIGHT*0.02,
            justifyContent: 'center',
            // alignItems: 'center',
            borderColor: colorMix.light_20
            // marginLeft: WIDTH*0.03
          }}>
            <Text style={{
              marginLeft: WIDTH*0.03,
              color: colorMix.dark_25
            }}>Date</Text>
          </View>
  
          <Pressable 
          onPress={handlePress}
          style={{
            borderWidth:1,
            height: HEIGHT*0.07,
            width: WIDTH*0.45,
            marginTop: HEIGHT*0.02,
            marginLeft: WIDTH*0.05,
            borderRadius: HEIGHT*0.02,
            borderColor: colorMix.light_20,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
            <Text style={{
              paddingLeft: WIDTH*0.02,
              alignItems: 'center'
            }}>{moment(frequencyData?.endDate).format('DD MM YYYY') !== moment(new Date()).format('DD MM YYYY') ? moment(frequencyData?.endDate).format('DD MMMM YYYY') : 'End Date'}</Text>
            <Image 
            style={{
              marginRight: WIDTH*0.02,
              height: HEIGHT*0.01,
              width: HEIGHT*0.021
            }}
            source={dropdown_arrow}
            />
            {/* <DropdownComponent value={endDate} setValue={setEndDate} title="End Date" data={frequencyDetails}/> */}
          </Pressable>
          </View>
        }
        
       
        {/* <DatePicker style={{height:HEIGHT*0.25,marginTop:HEIGHT*0.03, width: WIDTH*0.6}} mode="time" is24hourSource='locale' date={endDate} popperPlacement="right-start" minuteInterval={15} onDateChange={(time)=>setTime(time)} />  */}
        </View>
        <View style={{
            marginTop: HEIGHT*0.02,
            paddingHorizontal: WIDTH*0.05
        }}>
        <ButtonComponent title="Next" onButtonHandler={onHandleFrequency}/>
        </View>

      <Modal 
      animationType='slide'
      transparent={true}
      visible={isDatePickerVisible}
      // onRequestClose={()=>setIsDatePickerVisible(false)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            width: WIDTH * 0.85,
            backgroundColor: colorMix.light_100,
            borderRadius: HEIGHT * 0.02,
            padding: HEIGHT * 0.02
          }}>
        <DatePicker
        mode='date'
        date={frequencyData?.endDate}
        minimumDate={new Date()}
        onDateChange={handleDateChange}
        />
         <Pressable 
              onPress={()=>setIsDatePickerVisible(false)} 
              style={{
                marginTop: HEIGHT * 0.02,
                backgroundColor: colorMix.violet_100,
                padding: HEIGHT * 0.015,
                borderRadius: HEIGHT * 0.02,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: colorMix.light_100 }}>Set</Text>
            </Pressable>
        </View>
        </View>
      </Modal>
    </>
  )
}

export default FrequencyModal