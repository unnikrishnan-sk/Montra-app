import React from 'react'
import { Image, Text, View } from 'react-native'
import { success_icon_blue } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'

const TransactionAddedComponent = () => {
  return (
    <View style={{
        paddingHorizontal: WIDTH*0.05,
        height: HEIGHT*0.1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Image 
        source={success_icon_blue}
        />
        <Text style={{
            alignSelf: 'center'
        }}>Transaction has been successfully added</Text>
    </View>
  )
}

export default TransactionAddedComponent