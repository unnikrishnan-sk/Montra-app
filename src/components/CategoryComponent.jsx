import React from 'react'
import { Image, Pressable, Switch, Text, TextInput, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import DropdownComponent from './DropdownComponent'
import { expenseCategoryType, walletType } from '../constants/dummyData'
import InputComponent from './InputComponent'
import { attachment_icon } from '../assets'

const CategoryComponent = ({amount,category,setCategory,wallet,setWallet,response,isEnabled}) => {
  return (
    <View>
         <View style={{ paddingHorizontal: WIDTH*0.05, marginTop: HEIGHT*0.12 }}>
        <Text style={{ color: colorMix.light_20, fontWeight: 500, fontSize: HEIGHT*0.024 }}>How much?</Text>
        <View style={{
            flexDirection: 'row'
        }}>
            <Text style={{color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: 600}}>$</Text>
        <TextInput 
        style={{ color: colorMix.light_100, fontSize: HEIGHT*0.085, marginTop: HEIGHT*0.01, fontWeight: 600 }}
        placeholder='0'
        placeholderTextColor={colorMix.light_100}
        onChangeText={text => setAmount(text)}
        value={amount}
        />
        </View>
    </View>
    <View style={{ borderWidth:1, backgroundColor: colorMix.light_100, borderTopRightRadius: HEIGHT*0.04, borderTopLeftRadius: HEIGHT*0.04, marginTop: HEIGHT*0.01 }}>
        <View style={{ paddingHorizontal: WIDTH*0.05 }}>
        <DropdownComponent value={category} setValue={setCategory} title="Category" data={expenseCategoryType}/>
        </View>
        <InputComponent placeholder="Description" onChangeText={text=>handleChangeForm(expenseDetails?.value,text)}/>
        <View style={{ paddingHorizontal: WIDTH*0.05 }} >
        <DropdownComponent value={wallet} setValue={setWallet} title="Wallet" data={walletType}/>
        {response==='' ? (<Pressable onPress={()=>setModalVisible(true)} style={{ borderWidth: 1,borderStyle:"dashed", height: HEIGHT*0.07, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, borderRadius: HEIGHT*0.02, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Image source={attachment_icon} />
            <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.022, marginLeft: WIDTH*0.04 }}>Add attachment</Text>
        </Pressable>) : (<><Image style={{height: HEIGHT*0.12,width: HEIGHT*0.12,marginTop: HEIGHT*0.02,borderRadius: HEIGHT*0.01}} source={{uri:response}}/>
        <Pressable style={{
            // borderWidth: 1,
            height: HEIGHT*0.025,
            width: HEIGHT*0.025,
            borderRadius: HEIGHT*0.015,
            backgroundColor: colorMix.dark_25,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: WIDTH*.23,
            top: HEIGHT*0.1
        }}
        onPress={()=>handleImagedelete()}
        >
        <Image style={{
            height: HEIGHT*0.013, 
            width: HEIGHT*0.013
            // backgroundColor: colorMix.dark_100
            }} 
            source={close_icon}/>
            </Pressable>
            </>)
            }
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View>
        <Text style={{ marginTop: HEIGHT*0.03, fontSize: HEIGHT*0.024,color: colorMix.dark_100 }}>Repeat</Text>
        <Text style={{ fontSize: HEIGHT*0.02, color: colorMix.dark_25, marginTop: HEIGHT*0.01 }}>{isEnabled ? 'Repeat transaction, set your own time' : 'Repeat transaction'}</Text>
        </View>
        <Switch style={{transform: [{scaleX: .8}, {scaleY: .8}]}} trackColor={{false: colorMix.violet_20, true: colorMix.violet_100}} thumbColor={ colorMix.light_100} onValueChange={toggleSwitch} value={isEnabled} />
        </View>
        </View>
        <View style={{ marginTop: Platform.OS==='ios' ?  HEIGHT*0.03 : HEIGHT*0.02, height: HEIGHT*0.2 }}>
        <ButtonComponent title="Continue" onButtonHandler={()=>handleExpense()}/>
        </View> 
    </View>
    </View>
  )
}

export default CategoryComponent