import React, { useState } from 'react'
import { FlatList, Image, Platform, Text, View } from 'react-native'
import Navbar from './Navbar'
import { trash_icon } from '../assets'
import { colorMix } from '../constants/color'
import { HEIGHT, WIDTH } from '../constants/dimension'
import RenderDetailItems from './RenderDetailItems'
import ButtonComponent from './ButtonComponent'
import BottomSlider from './BottomSlider'
import { G, Rect, Svg } from 'react-native-svg'
import DeleteDetTransaction from './DeleteDetTransaction'
import { detailedTrans } from '../constants/dummyData'

const DetailTransaction = () => {

    const [deleteModal,setDeleteModal] = useState(false);
    const spacing = 16;
    const dashes = new Array(Math.floor(WIDTH/spacing)).fill(null)

  return (
    <View style={{ backgroundColor: colorMix.light_100, height: HEIGHT }}>
        <View style={{ paddingBottom: HEIGHT*0.05, borderBottomLeftRadius: HEIGHT*0.03, borderBottomRightRadius: HEIGHT*0.03, backgroundColor: detailedTrans[0]?.transactionType==='Expense' ? colorMix.red_100 : detailedTrans[0]?.transactionType==='Income' ? colorMix?.green_100 : detailedTrans[0]?.transactionType==='Transfer' ? colorMix.blue_100: colorMix.light_100 }}>

            <Navbar title="Detail Transaction" titleColor={colorMix.light_100} image_source={trash_icon} trash_height={HEIGHT*0.033} trash_width={HEIGHT*0.032} onPressRightIcon={()=>setDeleteModal(true)}/>

            <Text style={{ fontSize: HEIGHT*0.06, color: colorMix.light_100, fontWeight: '700', textAlign: 'center', paddingTop: HEIGHT*0.018 }}>{detailedTrans[0]?.amount}</Text>

            <Text style={{ color: colorMix.light_100, fontSize: HEIGHT*0.022, fontWeight: '500', textAlign: 'center', paddingTop: HEIGHT*0.013 }}>{detailedTrans[0]?.description}</Text>

            <Text style={{ color: colorMix.light_100, textAlign: 'center', fontSize: HEIGHT*0.018, fontWeight: '500', paddingTop: HEIGHT*0.01 }}>{detailedTrans[0]?.date}</Text>
        </View>

        <View style={{ borderWidth: 1, borderColor: colorMix.light_20, height: HEIGHT*0.09, width: WIDTH*0.9, alignSelf: 'center', position: 'absolute', marginTop: Platform.OS==='ios'? HEIGHT*0.26 : HEIGHT*0.27, borderRadius: HEIGHT*0.02, backgroundColor: colorMix.light_100 }}>

            <View style={{ justifyContent: 'space-between', alignItems: 'center', height: HEIGHT*0.08, paddingHorizontal: WIDTH*0.05 }}>
                <FlatList contentContainerStyle={{ width: WIDTH*0.75, justifyContent: 'space-between' }}
                data={detailedTrans[0]?.transactionDet}
                horizontal
                showsVerticalScrollIndicator={false}
                renderItem={({item})=><RenderDetailItems data={item}/> }
                keyExtractor={item=>item.id} />
            </View>
        </View>             

    <View style={{ marginTop: HEIGHT*0.03, paddingHorizontal: WIDTH*0.05 }}>
    
    <Svg height='11' width='100%' marginTop={HEIGHT*0.03}>
        <G>
            {dashes.map((_,index)=>(
                <Rect key={index} x='8' y='10' width='8'  height='1' fill='#E3E5E5' translateX={spacing*index}/>
            ))}
        </G>
    </Svg>

        <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.023, fontWeight: '500', marginTop: HEIGHT*0.02 }}>Description</Text>

        <Text style={{ marginTop: HEIGHT*0.017, fontSize: HEIGHT*0.024, color: colorMix.dark_100 }}>{detailedTrans[0]?.detailDescription}</Text>

        <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.023, fontWeight: '500', marginTop: HEIGHT*0.02 }}>Attachment</Text>

        <Image style={{ marginTop: HEIGHT*0.02 }}
        source={detailedTrans[0]?.attachment} />
        </View>

        <View style={{ marginTop: Platform.OS==='ios'? HEIGHT*0.07 : HEIGHT*0.05 }}>
        <ButtonComponent title="Edit"/>
        </View>
        <BottomSlider/>

        <DeleteDetTransaction title="Remove this transaction?" desc="Are you sure you wanna remove this transaction?" deleteModal={deleteModal} setDeleteModal={setDeleteModal}/>
            </View>
        )
        }

export default DetailTransaction

