import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import DropdownComponent from '../components/DropdownComponent'
import { Dropdown } from 'react-native-element-dropdown'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { monthData } from '../constants/dummyData'
import { dropdown_arrow, line_chart_icon_violet, pie_chart_icon_violet, pie_chart_icon_white } from '../assets'

const DetailFinancialReport = () => {

    const [value,setValue] = useState();
    const [focus,setIsFocus] = useState();

    const handleDroponChange = (item) => {
        setValue(item);
        setIsFocus(false);
      }

  return (
   <View style={{
    backgroundColor: colorMix.light_100,
    height: HEIGHT,
    // paddingHorizontal: WIDTH*0.05
   }}>
        <Navbar title="Financial Report"/>
        <View style={{
            // borderWidth:1,
            alignItems: 'center',
            paddingTop: HEIGHT*0.03,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: WIDTH*0.05
        }}>
        <Dropdown
          style={{ borderColor: 'gray', borderRadius: HEIGHT*0.03, paddingHorizontal: WIDTH*0.01, borderWidth: 1, width: WIDTH*0.29, height: HEIGHT*0.05, backgroundColor: colorMix.light_80, borderColor: colorMix.light_20, color: colorMix.dark_100, marginTop: HEIGHT*0.02 }}
          selectedTextStyle={{ fontSize: HEIGHT*0.022, color: colorMix.dark_100, fontWeight: '500' }}
          inputSearchStyle={{ height: HEIGHT*0.3, fontSize: HEIGHT*0.02, color: colorMix.dark_100 }}
          data={monthData}
        //   maxHeight={HEIGHT*0.3}
          labelField="name"
          valueField="value"
          placeholderStyle={{ color: colorMix.dark_100, fontSize: HEIGHT*0.02 }}
          showsVerticalScrollIndicator={false}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => handleDroponChange()}
          renderLeftIcon={() => (
            <Image style={{ marginRight: WIDTH*0.02, height: HEIGHT*0.014, width: HEIGHT*0.028, marginLeft: WIDTH*0.01 }} source={dropdown_arrow} />
          )}
          renderRightIcon={() => null} />   

          <View style={{
            // borderWidth: 1,
            height: HEIGHT*0.07,
            width: WIDTH*0.2,
            flexDirection: 'row'
          }}>
            <View style={{
                borderWidth: 0.5,
                borderColor: colorMix.light_20,
                alignItems: 'center',
                justifyContent: 'center',
                width: WIDTH*0.1,
                height: HEIGHT*0.07,
                borderTopLeftRadius: HEIGHT*0.01,
                borderBottomLeftRadius: HEIGHT*0.01,
                backgroundColor: colorMix.light_40
            }}>
                <Image 
                style={{
                    // alignItems: 'center'
                }}
                source={line_chart_icon_violet}
                />
            </View>
            <View style={{
                // borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: WIDTH*0.1,
                height: HEIGHT*0.07,
                borderTopRightRadius: HEIGHT*0.01,
                borderBottomRightRadius: HEIGHT*0.01,
                backgroundColor: colorMix.violet_100
            }}>
                <Image 
                style={{
                    // alignItems: 'center'
                }}
                source={pie_chart_icon_white}
                />
            </View>
          </View>
        </View>

<View style={{
    paddingHorizontal: WIDTH*0.05
}}>
        <Text style={{
            fontWeight: '800',
            marginTop: HEIGHT*0.02,
            color: colorMix.dark_100,
            fontSize: HEIGHT*0.04
        }}>$332</Text>
        </View>

   </View>
  )
}

export default DetailFinancialReport