import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import { Dropdown } from 'react-native-element-dropdown'

const accountType = [{id:0, name: "Bank"}, {id:1, name: "Credit Card"}, {id:2, name: "Wallet"}]

const AddAccount = () => {

    const [value,setValue] = useState();

  return (
    <View style={{
        flex:1,
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

        <Dropdown
          style={{ height: 50,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 8,
            paddingHorizontal: 8,}}
          placeholderStyle={{fontSize: 16,}}
          selectedTextStyle={{fontSize: 16,}}
          inputSearchStyle={{ height: 40,
            fontSize: 16,}}
          iconStyle={{width: 20,
            height: 20,}}
          data={accountType}
        //   search
          maxHeight={150}
          labelField="name"
          valueField="value"
          placeholder={'Select item' }
        //   searchPlaceholder="Search..."
        //   value={value}
        //   onFocus={() => setIsFocus(true)}
        //   onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.name);
            setIsFocus(false);
          }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
        />


{/* <View style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
}}> */}
            {/* <SelectDropdown 
            data={accountType}
            onSelect={(selectItem,index)=>{
                console.log(selectItem);
            }} */}
    {/* //         buttonStyle={{ */}
    {/* //             width: WIDTH * 0.8,
    // height: HEIGHT * 0.06,
    // backgroundColor: '#E9ECEF',
    // borderRadius: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    //         }}
            // buttonTextStyle={{ */}
            {/* //     fontSize: 16,
            //     color: '#000',
            // }}

            // dropdownStyle={{
            //     width: 200,
            //     height: 50,
            //     backgroundColor: '#E9ECEF',
            //     borderRadius: 12,
            //     flexDirection: 'row',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     paddingHorizontal: 12,
            // }} */}
            {/* // renderItem={(item, index, isSelected) => {
            //     return (
            //       <View style={{flex:1,
            //         height: HEIGHT*0.02
            //       }}>
            //         <Text>Hi</Text>
            //         <Text>{item.name}</Text>
            //       </View>
            //     );
            //   }}
            // /> */}
            {/* </View> */}
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