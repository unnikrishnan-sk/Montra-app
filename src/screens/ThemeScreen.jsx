import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { tick_icon } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { changeMode } from '../redux/slice/modeSlice'

const ThemeScreen = () => {

    const [selectedTheme,setSelectedTheme] = useState(0)
    const dispatch = useDispatch();
    console.log(selectedTheme);

    const darkMode = useSelector((state)=>state.mode.darkMode)

    const handleTheme = (id) => {
        if(selectedTheme !== id) {
            setSelectedTheme(id)
            dispatch(changeMode())
        }
    }

  return (
    <View style={{
        backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100,
        height: HEIGHT
    }}>
        <Navbar title="Theme" darkMode={darkMode}/>
        <View style={{
            borderTopWidth: 1,
            marginTop: HEIGHT*0.02,
            borderColor: colorMix.light_20,
            paddingHorizontal: WIDTH*0.05,
        }}>
            <Pressable 
            onPress={()=>handleTheme(0)}
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            <Text style={{
                marginTop: HEIGHT*0.02,
                color: darkMode ? colorMix.light_100 : colorMix.dark_100,
                fontWeight: 500,
                fontSize: HEIGHT*0.022
            }}>Light</Text>

            { selectedTheme===0 && <View style={{
                height: HEIGHT*0.04,
                // borderWidth: 1,
                width: HEIGHT*0.04,
                marginTop: HEIGHT*0.02,
                borderRadius: HEIGHT*0.02,
                backgroundColor: colorMix.violet_100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image style={{
                    height: HEIGHT*0.015,
                    width: HEIGHT*0.016
                }}
                source={tick_icon}/>
            </View>}
            
            </Pressable>
            
            <Pressable 
            onPress={()=>handleTheme(1)}
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: HEIGHT*0.03,
                paddingTop: HEIGHT*0.02,
                // justifyContent: 'center',
                // borderWidth: 1
            }}>
            <Text style={{
                marginTop: HEIGHT*0.02,
                color: darkMode ? colorMix.light_100 : colorMix.dark_100,
                fontWeight: 500,
                // borderWidth: 1,
                fontSize: HEIGHT*0.022
            }}>Dark</Text>

            { selectedTheme===1 && <View style={{
                height: HEIGHT*0.04,
                // borderWidth: 1,
                width: HEIGHT*0.04,
                marginTop: HEIGHT*0.02,
                borderRadius: HEIGHT*0.02,
                backgroundColor: colorMix.violet_100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image style={{
                    height: HEIGHT*0.015,
                    width: HEIGHT*0.016
                }}
                source={tick_icon}/>
            </View>}

            </Pressable>

        </View>
    </View>
  )
}

export default ThemeScreen