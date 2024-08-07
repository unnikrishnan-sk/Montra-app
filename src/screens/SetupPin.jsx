import React, { useState } from 'react'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { arrow_right } from '../assets'
import { colorMix } from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import { keyboard } from '../constants/dummyData'
import RenderKeyboard from '../components/RenderKeyboard'

const SetupPin = () => {

    const [pin,setPin] = useState([]);
    const [pin2,setPin2] = useState([]);
    const [next,setNext] = useState(false);
    const [error,setError] = useState(null);
    const navigation = useNavigation();

    const handlePress = (value) => {
        if(!next){
            if(pin.length>=0){
                setError(null)
            }
            if(pin.length<4 && value!==""){
                setPin(pin+value);
            }
        }else{
            if(pin2.length<4 && value!==""){
                setPin2(pin2+value);
            }
        }      
    }

    const onPressImage = () => {
        if(!next && pin.length===4){
            setNext(true);
        }else{
            if(pin === pin2){
                navigation.navigate('setupaccount')
            }else{
                setError("PIN doesn't match");
                setPin([])
                setPin2([])
                setNext(false)
            }
        }
        
    }

  return (
    <View style={{
        backgroundColor: colorMix.violet_100,
        height: HEIGHT,
        paddingTop: HEIGHT*0.1
    }}>
        {!next ? ( 
            <>
             <Text style={{
            color: colorMix.light_100,
            alignSelf: 'center',
            fontSize: HEIGHT*0.023,
            fontWeight: '600'
        }}>Let's setup your PIN</Text>
        <View style={{
            // borderWidth:1,
            paddingTop: HEIGHT*0.15,
            height: HEIGHT*0.1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            {[...Array(4)].map((_,i)=>(
                <View 
                key={i}
                style={{
                    // borderWidth: 1,
                    height: HEIGHT*0.04,
                    width: HEIGHT*0.04,
                    borderRadius: HEIGHT*0.02,
                    backgroundColor: pin.length>i? colorMix.light_80: colorMix.violet_100,
                    marginLeft: i!==0 ? WIDTH*0.04 : 0,
                    borderWidth: pin.length>i ? 0 : 3,
                    borderColor: pin.length>i ? colorMix.light_80 : colorMix.violet_60
                }}></View>
            ))}
        </View>
        {error ? (<Text style={{
        marginTop: HEIGHT*0.04,
        alignSelf: 'center',
        color: colorMix.red_100,
        fontSize: HEIGHT*0.025,
        fontWeight: '700'
    }}>{error}</Text>) : null}
        </>
    ) : ( <><Text style={{
        color: colorMix.light_100,
        alignSelf: 'center',
        fontSize: HEIGHT*0.023,
        fontWeight: '600'
    }}>Ok. Re type your PIN again.</Text>
    <View style={{
        // borderWidth:1,
        paddingTop: HEIGHT*0.15,
        height: HEIGHT*0.1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }}>
        {[...Array(4)].map((_,i)=>(
            <View 
            key={i}
            style={{
                // borderWidth: 1,
                height: HEIGHT*0.04,
                width: HEIGHT*0.04,
                borderRadius: HEIGHT*0.02,
                backgroundColor: pin2.length>i? colorMix.light_80: colorMix.violet_100,
                marginLeft: i!==0 ? WIDTH*0.04 : 0,
                borderWidth: pin2.length>i ? 0 : 3,
                borderColor: pin2.length>i ? colorMix.light_80 : colorMix.violet_60
            }}></View>
        ))}
        
    </View>
    </>)}
       
        <View style={{
            height: HEIGHT*0.45,
            // borderWidth: 1,
            position: 'absolute',
            bottom: HEIGHT*0.01,
            backgroundColor: colorMix.violet_100
        }}>
                <FlatList 
                numColumns={3}
                showsVerticalScrollIndicator={false} 
                data={keyboard} renderItem={({item}) => <RenderKeyboard data={item} onPress={handlePress} onPressImage={onPressImage}/>} keyExtractor={item => item.id}
                /> 
           
        </View>
    </View>
  )
}

export default SetupPin