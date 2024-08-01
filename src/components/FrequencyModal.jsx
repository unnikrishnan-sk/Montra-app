import React, { useState } from 'react'
import { View } from 'react-native'
import DropdownComponent from './DropdownComponent'
import { endAfterDetails, frequencyDetails } from '../constants/dummyData'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from './ButtonComponent'

const FrequencyModal = () => {

  const [frequency,setFrequency] = useState();
  const [endAfter,setEndAfter] = useState();

  const onButtonPress = () => {
    if(frequency === 'yearly'){
      
    }
    console.log((frequency));
  }

  return (
    <>
    <View style={{
        // borderWidth:1,
        // height: HEIGHT*0.3,
            paddingHorizontal: WIDTH*0.05
        }}>
         <DropdownComponent value={frequency} setValue={setFrequency} title="Frequency" data={frequencyDetails}/>
        
        <DropdownComponent value="endAfter" setValue={setEndAfter} title="End After" data={endAfterDetails}/>
        </View>
        <View style={{
            marginTop: HEIGHT*0.02,
        }}>
        <ButtonComponent title="Next" onButtonHandler={onButtonPress}/>
        </View>
    </>
  )
}

export default FrequencyModal