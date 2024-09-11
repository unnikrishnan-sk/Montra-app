import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { useSelector } from 'react-redux'
import { tick_icon } from '../assets'

const SecurityScreen = () => {

    const [selectedSecurity,setSelectedSecurity] = useState(0)
    const darkMode = useSelector((state)=>state.mode.darkMode)

    const handleSecurity = (id) => {
        if(selectedSecurity !== id) {
            setSelectedSecurity(id)
        }
    }

  return (
    <View style={{ backgroundColor: darkMode ? colorMix.dark_100 : colorMix.light_100, height: HEIGHT }}>

        <Navbar title="Security" darkMode={darkMode}/>

        <View style={{ borderTopWidth: 1, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, paddingHorizontal: WIDTH*0.05, }}>

            <Pressable onPress={()=>handleSecurity(0)}
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={{ marginTop: HEIGHT*0.02, color: darkMode ? colorMix.light_100 : colorMix.dark_100, fontWeight: 500, fontSize: HEIGHT*0.022
            }}>PIN</Text>

            { selectedSecurity===0 && <View style={{ height: HEIGHT*0.04, width: HEIGHT*0.04, marginTop: HEIGHT*0.02, borderRadius: HEIGHT*0.02, backgroundColor: colorMix.violet_100, alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{ height: HEIGHT*0.015, width: HEIGHT*0.016 }}
                source={tick_icon}/>
            </View>}
            </Pressable>
            <Pressable  onPress={()=>handleSecurity(1)}
            style={{ flexDirection: 'row',justifyContent: 'space-between', marginTop: HEIGHT*0.03, paddingTop: HEIGHT*0.02 }}>

            <Text style={{ marginTop: HEIGHT*0.02, color: darkMode ? colorMix.light_100 : colorMix.dark_100, fontWeight: 500, fontSize: HEIGHT*0.022
            }}>Fingerprint</Text>

            { selectedSecurity===1 && <View style={{ height: HEIGHT*0.04, width: HEIGHT*0.04, marginTop: HEIGHT*0.02, borderRadius: HEIGHT*0.02, backgroundColor: colorMix.violet_100, alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{ height: HEIGHT*0.015, width: HEIGHT*0.016 }}
                source={tick_icon}/>
            </View>}
            </Pressable>
        </View>
    </View>
  )
}

export default SecurityScreen