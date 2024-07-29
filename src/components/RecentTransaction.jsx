import React from 'react'
import { Pressable, Text, View, Image, ScrollView, FlatList } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { food_icon, shopping_icon, subscription_icon } from '../assets'
import { recentTransactionData } from '../constants/dummyData'

const RenderTransactionItems = ({data}) => {

    const {id,image,title,dec,amount,time} = data;

    return(
        <ScrollView style={{
            // borderWidth:1,
            paddingHorizontal: WIDTH*0.07,
            paddingTop: HEIGHT*0.01,
            paddingBottom: HEIGHT*0.01
        }}>
        <View style={{
            // borderWidth: 1,
            // paddingHorizontal: WIDTH*0.09,
            // borderRadius: HEIGHT*0.02
            borderRadius: HEIGHT*0.03,
            backgroundColor: colorMix.light_80,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: HEIGHT*0.02,
            paddingLeft: WIDTH*0.025,
            paddingRight: WIDTH*0.025,
            paddingBottom: HEIGHT*0.02
        }}>
            <View style={{
                flexDirection: 'row',
                // borderWidth:1
            }}>
            <View style={{
                // borderWidth: 1,
                height: HEIGHT*0.08,
                width: HEIGHT*0.09,
                borderRadius: HEIGHT*0.02,
                backgroundColor: title==="Shopping" ?  colorMix.yellow_20 : title==="Subscription" ?  colorMix.violet_20 : colorMix.red_20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                source={image}
                />
            </View>
            
            <View style={{
                // alignItems: 'baseline'
                justifyContent: 'space-around',
                marginLeft: WIDTH*0.02
            }}>
                <Text style={{
                    fontSize: HEIGHT*0.022,
                    color: colorMix.dark_100,
                    fontWeight: 500
                }}>{title}</Text>
                <Text style={{
                    color: colorMix.dark_25,
                    fontSize: HEIGHT*0.018
                }}>{dec}</Text>
            </View>
            </View>
    
            <View style={{
                // alignSelf: 'flex-end'
                justifyContent: 'space-around'
            }}>
                <Text style={{
                    alignSelf: 'flex-end',
                    fontWeight: 500,
                    color: colorMix.red_100,
                    fontSize: HEIGHT*0.023
                }}>-${amount}</Text>
                <Text style={{
                    color: colorMix.dark_25,
                    fontSize: HEIGHT*0.018
                }}>{time}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

const RecentTransaction = () => {
  return (
    <>
    <View style={{
        // borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: WIDTH*0.05,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: HEIGHT*0.03
    }}>
        <Text style={{
            fontWeight: 500,
            fontSize: HEIGHT*0.025,
            color: colorMix.dark_100
        }}>Recent Transaction</Text>
        <Pressable style={{
            // borderWidth: 1,
            paddingTop: HEIGHT*0.008,
            paddingBottom: HEIGHT*0.008,
            paddingLeft: WIDTH*0.035,
            paddingRight: WIDTH*0.035,
            borderRadius: HEIGHT*0.02,
            backgroundColor: colorMix.violet_20
        }}>
            <Text style={{
                color: colorMix.violet_100,
                fontSize: HEIGHT*0.02
            }}>See All</Text>
        </Pressable>

       
    </View>
   
    <FlatList 
        data={recentTransactionData}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=><RenderTransactionItems data={item}/> }
        keyExtractor={item=>item.id}
        />
    </>
  )
}

export default RecentTransaction