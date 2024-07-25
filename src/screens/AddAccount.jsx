import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import SelectDropdown from 'react-native-select-dropdown'

const accountType = [{id:0, name: "Bank"}, {id:1, name: "Credit Card"}, {id:2, name: "Wallet"}]

const AddAccount = () => {
  return (
    <View style={{
        backgroundColor: colorMix.violet_100,
        height: HEIGHT,
        // paddingHorizontal: WIDTH*0.05
    }}>
        <Navbar title="Add new account" titleColor={colorMix.light_100}/>
        <View style={{
            paddingHorizontal: WIDTH*0.05,
            paddingTop: HEIGHT*0.3
        }}>
            <Text style={{
                color: colorMix.violet_20,
                // paddingTop: HEIGHT*0.3
                fontSize: HEIGHT*0.025,
                fontWeight: 500
            }}>Balance</Text>
            <Text style={{
                paddingTop: HEIGHT*0.02,
                color :colorMix.light_100,
                fontSize: HEIGHT*0.08,
                fontWeight: 600,
                paddingBottom: HEIGHT*0.02
            }}>$00.0</Text>
        </View>
        <View style={{
            borderWidth:1,
            backgroundColor: colorMix.light_100,
            paddingHorizontal: WIDTH*0.05,
            paddingTop: HEIGHT*0.03,
            borderTopLeftRadius: HEIGHT*0.035,
            borderTopRightRadius: HEIGHT*0.035
        }}>
            <TextInput 
            placeholder='Name'
            style={{
                height: HEIGHT*0.08,
                borderWidth:1,
                borderRadius: HEIGHT*0.02
            }}/>

            <SelectDropdown 
            data={accountType}
            onSelect={(selectItem,index)=>{
                console.log(selectItem);
            }}
            dropdownStyle={{
                width: 200,
                height: 50,
                backgroundColor: '#E9ECEF',
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 12,
            }}
            renderItem={(item, index, isSelected) => {
                return (
                  <View >
                    <Text>{item.title}</Text>
                  </View>
                );
              }}
            />
            {/* <View style={{
                borderWidth: 1,
                height: HEIGHT*0.08,
                borderRadius: HEIGHT*0.02,
                marginTop: HEIGHT*0.02
            }}>

            </View> */}
            {/* <ButtonComponent /> */}

        </View>
    </View>
  )
}

export default AddAccount