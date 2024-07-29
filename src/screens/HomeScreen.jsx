import React, { useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { dropdown_arrow, notification_icon, profile_avatar } from '../assets'
import { Dropdown } from 'react-native-element-dropdown'
import { LineChart } from 'react-native-gifted-charts'
import { chartData, dataTimeframe, incomeExpenseData, monthData } from '../constants/dummyData'
import RecentTransaction from '../components/RecentTransaction'
import BottomSlider from '../components/BottomSlider'
import { useNavigation } from '@react-navigation/native'

const RenderIncomeExpense = ({data}) => {

  const {id,image,title,amount} = data;
  console.log(image,title,amount);

return(
  <View style={{
    // borderWidth: 1,
    height: HEIGHT*0.1,
    width: WIDTH*0.42,
    marginLeft: id!==0 ? WIDTH*0.055 : 0,
    borderRadius: HEIGHT*0.035,
    backgroundColor: id===0 ? colorMix.green_100 : colorMix.red_100,
    alignItems: 'center',
    paddingHorizontal: WIDTH*0.045,
    justifyContent: 'space-between',
    flexDirection: 'row',
    }}>
      <View style={{
        height: HEIGHT*0.065,
        width: HEIGHT*0.065,
        borderRadius: HEIGHT*0.018,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
        backgroundColor: colorMix.light_100
      }}>
      <Image 
      source={image}
      />
      </View>
      <View style={{
        marginRight: WIDTH*0.02
      }}>
        <Text style={{
          color: colorMix.light_100
        }}>{title}</Text>
        <Text style={{
          color:colorMix.light_100,
          fontSize: HEIGHT*0.03,
          fontWeight: 600
        }}>${amount}</Text>
      </View>
    </View>

)
}


const RenderTimeframe = ({data,setOnPressed, onPressed}) => {

  const {id,title} = data;

  return(
    <Pressable 
    onPress={()=>setOnPressed(id)}
    style={{
      // borderWidth:1,
      // height: HEIGHT*0.04,
      paddingTop: HEIGHT*0.01,
      paddingBottom: HEIGHT*0.01,
      paddingLeft: WIDTH*0.05,
      paddingRight: WIDTH*0.05,
      borderRadius: HEIGHT*0.02,
      backgroundColor: onPressed===id ? colorMix.yellow_20 : colorMix.light_100,
      marginLeft: id!==0 ? WIDTH*0.03 : 0
    }}>
      <Text style={{
        color: onPressed===id ? colorMix.yellow_100 : colorMix.dark_25,
        fontWeight: 600
      }}>{title}</Text>
    </Pressable>
  )
}

const HomeScreen = () => {

    const [value,setValue] = useState();
    const [isFocus, setIsFocus] = useState(false);
    const [onPressed,setOnPressed] = useState(0);
    const navigation = useNavigation();
    console.log(onPressed);

  return (
    <View style={{
      backgroundColor: colorMix.light_100
    }}>
        <View style={{
            borderBottomLeftRadius: HEIGHT*0.04,
            borderBottomRightRadius: HEIGHT*0.04,
            backgroundColor: colorMix.yellow_10,
            paddingBottom: HEIGHT*0.03
        }}>
            <View style={{
                marginTop: HEIGHT*0.07,
                paddingHorizontal: WIDTH*0.05,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Image 
                source={profile_avatar}/>

        <Dropdown
          style={{ 
            height: HEIGHT*0.08,
            borderColor: 'gray',
            borderRadius: HEIGHT*0.03,
            paddingHorizontal: WIDTH*0.02,
            borderWidth: 1,
            width: WIDTH*0.35,
            height: HEIGHT*0.06,
            backgroundColor: colorMix.yellow_10,
            borderColor: colorMix.light_20,
            color: colorMix.dark_100
          }}
          selectedTextStyle={{
            fontSize: HEIGHT*0.022,
            color: colorMix.dark_100,
            fontWeight: 500
          }}
          inputSearchStyle={{ 
            height: HEIGHT*0.3,
            fontSize: HEIGHT*0.02,
            color: colorMix.dark_100
          }}
          data={monthData}
          maxHeight={HEIGHT*0.3}
          labelField="name"
          valueField="value"
          placeholderStyle={{
            color: colorMix.dark_100,
            fontSize: HEIGHT*0.02
          }}
          
          showsVerticalScrollIndicator={false}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Image 
            style={{
                marginRight: WIDTH*0.02,
                height: HEIGHT*0.0143,
                width: HEIGHT*0.03,
                marginLeft: WIDTH*0.01
            }}
            source={dropdown_arrow}
            />
          )}
          renderRightIcon={() => null}
        />    

    <Pressable
    onPress={()=>navigation.navigate('notification')} 
    >
    <Image
        source={notification_icon}
        />
    </Pressable>
            </View>
            <Text style={{
                alignSelf: 'center',
                fontSize: HEIGHT*0.02,
                marginTop: HEIGHT*0.015,
                color: colorMix.dark_25,
            }}>Account Balance</Text>
            <Text style={{
                alignSelf: 'center',
                marginTop: HEIGHT*0.015,
                fontSize: HEIGHT*0.05,
                fontWeight: 600,
                color: colorMix.dark_100
            }}>$9400</Text>

<View style={{
    paddingHorizontal: WIDTH*0.05,
    justifyContent: 'space-between',
    marginTop: HEIGHT*0.02
}}>
        <FlatList 
        data={incomeExpenseData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><RenderIncomeExpense data={item}/> }
        keyExtractor={item=>item.id}
        />
        </View>
        </View>

<ScrollView style={{
  marginBottom: HEIGHT*0.4
}}>
        <View style={{
          paddingHorizontal: WIDTH*0.05,
          marginTop: HEIGHT*0.01
        }}>
          <Text style={{
            fontSize: HEIGHT*0.025,
            fontWeight: 600,
            marginTop: HEIGHT*0.01,
            color: colorMix.dark_100
          }}>Spend Frequency</Text>
      
        </View>

        <View style={{
          marginLeft: -WIDTH*0.1
        }}>
        <LineChart 
        areaChart
      data = {chartData}
      style={{
        marginLeft: WIDTH*0.1
      }}
      spacing={55}
      initialSpacing={0}
      thickness={6}
      hideAxesAndRules
      hideDataPoints
      width={WIDTH}
      curved
      startFillColor={colorMix.violet_80}
      endFillColor={colorMix.violet_20}
      startOpacity={0.4}
      endOpacity={0.1}
      color= {colorMix.violet_100}/>
       </View>

       <View style={{
        height: HEIGHT*0.05,
        paddingHorizontal: WIDTH*0.05,
        flexDirection: 'row',
        alignItems: 'center'
       }}>
        
        <FlatList 
        data={dataTimeframe}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><RenderTimeframe data={item} setOnPressed={setOnPressed} onPressed={onPressed}/> }
        keyExtractor={item=>item.id}/>
       </View>
       <RecentTransaction />
       </ScrollView>
       <BottomSlider />
    </View>
  )
}

export default HomeScreen