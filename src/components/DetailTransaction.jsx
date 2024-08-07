import React, { useState } from 'react'
import { FlatList, Image, Platform, Text, View } from 'react-native'
import Navbar from './Navbar'
import { attachment_icon, scanned_image, trash_icon } from '../assets'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import RenderDetailItems from './RenderDetailItems'
import ButtonComponent from './ButtonComponent'
import BottomSlider from './BottomSlider'
import { G, Rect, Svg } from 'react-native-svg'
import DeleteDetTransaction from './DeleteDetTransaction'

const allTransactionDet = [{id:0, name: 'Type', value: 'Expense'}, {id:1, name: 'Category', value: 'Shopping'}, {id:2, name: 'Wallet', value: 'Wallet'}]

// const value = {
//     valueType : detailedTrans?.transactionType
// }

// const detailedTrans = [
//         {id:0, 
//         transactionType: 'Expense', 
//         amount: '$120', 
//         description: 'Buy some grocery', 
//         date: 'Saturday 4 June 2021  16:20', 
//         transactionDet : [
//             {name: 'Type', value: 'Expense'}, 
//             {name: 'Category', value: 'Shopping'}, 
//             {name: 'Wallet', value: 'Wallet'}],
//         detailDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
//         attachment: scanned_image
//         }
//         ]

// const detailedTrans = [
//             {id:0, 
//             transactionType: 'Income', 
//             amount: '$5000', 
//             description: 'Salary for Jjuly', 
//             date: 'Saturday 4 June 2021  16:20', 
//             transactionDet : [
//                 {name: 'Type', value: 'Income'}, 
//                 {name: 'Category', value: 'Salary'}, 
//                 {name: 'Wallet', value: 'Chase'}],
//             detailDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
//             attachment: scanned_image
//             }
//             ]

const detailedTrans = [
                {id:0, 
                transactionType: 'Transfer', 
                amount: '$2000', 
                description: '', 
                date: 'Saturday 4 June 2021  16:20', 
                transactionDet : [
                    {name: 'Type', value: 'Transfer'}, 
                    {name: 'From', value: 'Paypal'}, 
                    {name: 'To', value: 'Chase'}],
                detailDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
                attachment: scanned_image
                }
                ]

const DetailTransaction = () => {

    const [deleteModal,setDeleteModal] = useState(false);
    const spacing = 16;
    const dashes = new Array(Math.floor(WIDTH/spacing)).fill(null)

    console.log(deleteModal);
  return (
    <View style={{
        backgroundColor: colorMix.light_100,
        height: HEIGHT
    }}>
        <View style={{
            // borderWidth: 1,
            // marginTop: HEIGHT*0.03,
            paddingBottom: HEIGHT*0.05,
            borderBottomLeftRadius: HEIGHT*0.03,
            borderBottomRightRadius: HEIGHT*0.03,
            backgroundColor: detailedTrans[0]?.transactionType==='Expense' ? colorMix.red_100 : detailedTrans[0]?.transactionType==='Income' ? colorMix?.green_100 : detailedTrans[0]?.transactionType==='Transfer' ? colorMix.blue_100: colorMix.light_100
        }}>
            <Navbar title="Detail Transaction" titleColor={colorMix.light_100} image_source={trash_icon} trash_height={HEIGHT*0.033} trash_width={HEIGHT*0.032} onPressRightIcon={()=>setDeleteModal(true)}/>

            <Text style={{
                fontSize: HEIGHT*0.06,
                color: colorMix.light_100,
                fontWeight: '700',
                textAlign: 'center',
                paddingTop: HEIGHT*0.018
            }}>{detailedTrans[0]?.amount}</Text>
            <Text style={{
                color: colorMix.light_100,
                fontSize: HEIGHT*0.022,
                fontWeight: '500',
                textAlign: 'center',
                paddingTop: HEIGHT*0.013
            }}>{detailedTrans[0]?.description}</Text>
            <Text style={{
                color: colorMix.light_100,
                textAlign: 'center',
                fontSize: HEIGHT*0.018,
                fontWeight: '500',
                paddingTop: HEIGHT*0.01
            }}>{detailedTrans[0]?.date}</Text>
        </View>

        <View style={{
            borderWidth: 1,
            borderColor: colorMix.light_20,
            height: HEIGHT*0.09,
            width: WIDTH*0.9,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: Platform.OS==='ios'? HEIGHT*0.26 : HEIGHT*0.27,
            borderRadius: HEIGHT*0.02,
            backgroundColor: colorMix.light_100,
            // zIndex: 1
        }}>
            <View style={{
                // borderWidth:1,
                // flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: HEIGHT*0.08,
                paddingHorizontal: WIDTH*0.05
            }}>
                <FlatList 
                contentContainerStyle={{
                    // borderWidth: 1,
                    width: WIDTH*0.75,
                    justifyContent: 'space-between'
                }}
                    data={detailedTrans[0]?.transactionDet}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    renderItem={({item})=><RenderDetailItems data={item}/> }
                    keyExtractor={item=>item.id}
                    />
            </View>
        </View>

        {/* <View style={{
             borderStyle: 'dashed',
            borderWidth: 2,
            borderRadius: 1
        }}>

        </View> */}
                {/* <Text 
                ellipsizeMode='clip'
                numberOfLines={1}
                style={{
                    // borderStyle: 'dashed',
                    // borderWidth: 1,
                    // borderRadius: 1
                    }}>- - - - - -</Text> */}
                    {/* <View style={{  width: '100%', borderRadius: 1, borderWidth: 1, 
                         borderColor: 'red', borderStyle: 'dashed', zIndex: 0, }}> */}
  {/* <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} /> */}
{/* </View> */}

<View style={{
    // borderWidth: 1,
    marginTop: HEIGHT*0.03,
    paddingHorizontal: WIDTH*0.05
}}>
    
    <Svg height='11' width='100%' marginTop={HEIGHT*0.03}>
        <G>
            {dashes.map((_,index)=>(
                <Rect 
                key={index}
                x='8'
                y='10' 
                width='8' 
                height='1' 
                fill='#E3E5E5' 
                translateX={spacing*index}/>
            ))}
        </G>
    </Svg>

        <Text style={{
            color: colorMix.dark_25,
            fontSize: HEIGHT*0.023,
            fontWeight: '500',
            marginTop: HEIGHT*0.02
        }}>Description</Text>

        <Text style={{
            marginTop: HEIGHT*0.017,
            fontSize: HEIGHT*0.024,
            color: colorMix.dark_100
        }}>{detailedTrans[0]?.detailDescription}</Text>

        <Text style={{
            color: colorMix.dark_25,
            fontSize: HEIGHT*0.023,
            fontWeight: '500',
            marginTop: HEIGHT*0.02
        }}>Attachment</Text>
        <Image 
        style={{
            marginTop: HEIGHT*0.02
        }}
        source={detailedTrans[0]?.attachment} />
        </View>
        <View style={{
            marginTop: Platform.OS==='ios'? HEIGHT*0.07 : HEIGHT*0.05
        }}>
        <ButtonComponent title="Edit"/>
        </View>
        <BottomSlider/>

        {/* <View> */}
        <DeleteDetTransaction deleteModal={deleteModal} setDeleteModal={setDeleteModal}/>
        {/* </View> */}
            </View>
        )
        }

export default DetailTransaction

