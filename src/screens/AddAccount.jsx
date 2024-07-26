import React, { useState } from 'react'
import { FlatList, Image, Platform, Pressable, Text, TextInput, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import ButtonComponent from '../components/ButtonComponent'
import { Dropdown } from 'react-native-element-dropdown'
import BottomSlider from '../components/BottomSlider'
import { bank_of_america, bca_bank, chase_bank, citi_bank, jago_bank, mandiri_bank, paypal_bank } from '../assets'
import { useNavigation } from '@react-navigation/native'

const accountType = [{id:0, name:"Bank", value: "bank"}, {id:1, name: "Credit Card", value: "creditCard"}, {id:2, name: "Wallet", value: "wallet"}]

const BankData = [{id:0, name: "Chase", logo: chase_bank}, {id:1, name: "Paypal", logo: paypal_bank}, {id:2, name: "citi", logo: citi_bank}, {id:3, name: "Bank Of America", logo: bank_of_america}, {id:4, name: "Jago", logo: jago_bank}, {id:5, name: "Mandiri", logo: mandiri_bank}, {id:6, name: "BCA", logo: bca_bank}, {id:7, name: "See Other", text: "See Other" }]

const RenderBank = ({data,onPress,selectedBank}) => {

  const {id,name,logo,text} = data;

  return(
    <Pressable 
    onPress={()=>onPress(name)}
    style={{
      borderWidth: selectedBank===name? 1 : 0,
      height: HEIGHT*0.05,
      width: WIDTH*0.2,
      borderRadius: HEIGHT*0.01,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: selectedBank===name? colorMix.violet_20 : text ? colorMix.violet_20 : colorMix.light_20,
      borderColor: colorMix.violet_100,
      marginTop: HEIGHT*0.01,
      marginLeft: HEIGHT*0.01
    }}>
      {text ? (
        <Text style={{
          fontSize: HEIGHT*0.018,
          color: colorMix.violet_100,
          fontWeight: 500
        }}>{text}</Text>
      ) : ( 
      <Image
          source={logo}/>
          )}
     
    </Pressable>
  )
}

const AddAccount = () => {

    const [value,setValue] = useState();
    const [isFocus, setIsFocus] = useState(false);
    const [selectedBank,setSelectedBank] = useState()
    const [error,setError] = useState(null);
    const navigation = useNavigation();
    
    console.log("vlaue",value, "focus", isFocus);

    const handlePress = (name) => {
      setSelectedBank(name)
      setError()
      console.log("name",name);
    }

    const onPressHandler = () => {
      if(value===undefined || selectedBank===undefined ){
        setError("Select an account")
      }else{
        navigation.navigate('signsuccess')
      }
    }

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
            paddingTop: value ? HEIGHT*0.2 :HEIGHT*0.3
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
            // paddingHorizontal: WIDTH*0.05,
            paddingTop: HEIGHT*0.03,
            height: Platform.OS==="ios" ? (value ? HEIGHT*0.56 : HEIGHT*0.46) : value ? HEIGHT*0.54 : HEIGHT*0.435,
            borderTopLeftRadius: HEIGHT*0.035,
            borderTopRightRadius: HEIGHT*0.035
        }}>

          <View style={{
            paddingHorizontal: WIDTH*0.05
          }}>
            <TextInput 
            placeholder='Name'
            value={selectedBank}
            placeholderTextColor={colorMix.dark_25}
            style={{
                height: HEIGHT*0.08,
                borderWidth:1,
                borderRadius: HEIGHT*0.02,
                paddingLeft: WIDTH*0.02,
                borderColor: colorMix.light_20
            }}/>
        <Dropdown
          style={{ 
            height: HEIGHT*0.08,
            borderColor: 'gray',
            borderRadius: HEIGHT*0.02,
            paddingHorizontal: WIDTH*0.02,
            borderWidth: 1,
            marginTop: HEIGHT*0.02,
            borderColor: colorMix.light_20,
            color: colorMix.dark_100
          }}
          selectedTextStyle={{fontSize: HEIGHT*0.022}}
          inputSearchStyle={{ height: HEIGHT*0.3,
            fontSize: HEIGHT*0.02,}}
          data={accountType}
          maxHeight={HEIGHT*0.3}
          labelField="name"
          valueField="value"
          placeholder="Account Type"
          placeholderStyle={{
            color: colorMix.dark_25,
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
        />
        </View>
          {error ? <Text style={{
            color: colorMix.red_100,
            fontWeight: 500,
            marginLeft: WIDTH*0.05
          }}>{error}</Text>: null}
        {value === "bank" && (<View style={{
          paddingHorizontal: WIDTH*0.05
        }}>
          <FlatList 
          numColumns={4}
          showsVerticalScrollIndicator={false} 
          data={BankData} renderItem={({item}) => <RenderBank data={item} 
          onPress={handlePress} selectedBank={selectedBank} 
          />} keyExtractor={item => item.id}
          />
        </View>)}
        
        <View style={{
          marginTop: Platform.OS==='ios' ? HEIGHT*0.1 : error ? HEIGHT*0.033 :HEIGHT*0.06
        }}>
        <ButtonComponent title="Continue" onButtonHandler={onPressHandler}/>
        </View>
        <BottomSlider />
       
        </View>
    </View>
  )
}

export default AddAccount