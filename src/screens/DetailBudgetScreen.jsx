import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { shopping_icon, trash_icon_dark, warning_icon_white } from '../assets'
import { HEIGHT, WIDTH } from '../constants/dimension'
import { Image, Text, View } from 'react-native'
import { colorMix } from '../constants/color'
import * as Progress from 'react-native-progress'
import ButtonComponent from '../components/ButtonComponent'
import BottomSlider from '../components/BottomSlider'
import DeleteDetTransaction from '../components/DeleteDetTransaction'
import { handleCategoryColor } from '../constants/common'
import { useNavigation } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';

const DetailBudgetScreen = ({route}) => {

    const {alert, alertLimit,budgetAmnt,budgetCat,totalExpense, id } = route?.params?.data;
    console.log("id here",id);
    const [deleteModal,setDeleteModal] = useState(false)
    const [isLimitExceeded,setIsLimitExceeded] = useState(false);
    const bgColor = handleCategoryColor(budgetCat)
    console.log(bgColor);
    const RemainingAmnt = Number(budgetAmnt-totalExpense);
    const progress = Number(totalExpense/budgetAmnt)
    const navigation = useNavigation();

    useEffect(()=>{
        if(RemainingAmnt<0){
            setIsLimitExceeded(true);
        }
    },[])

    const onEditHandler = () => {
        navigation.navigate('createbudget',route)
    }

    const handleDeleteTrans = async () => {
        console.log("id inside",id);
        if(id){
            try {
                await firestore().collection('Budget').doc(id).delete();
                navigation.navigate('budget')
            } catch (error) {
                console.log("error in handle delete",error);
            }
        }
    }

  return (
    <View style={{
        backgroundColor: colorMix.light_100,
        height: HEIGHT
    }}>
    <Navbar title="Detail Budget" image_source={trash_icon_dark} trash_height={HEIGHT*0.033} trash_width={HEIGHT*0.032} onPressRightIcon={()=>setDeleteModal(true)}/>
    
    <View style={{
        // borderWidth: 1,
        // height: HEIGHT*0.3,
        alignItems: 'center',
        paddingTop: HEIGHT*0.04
    }}>
        <View style={{
            borderWidth: 1,
            backgroundColor: colorMix.light_80,
            height: HEIGHT*0.065,
            flexDirection: 'row',
            height: HEIGHT*0.09,
            // width: WIDTH*0.37,
            paddingHorizontal: WIDTH*0.03,
            borderRadius: HEIGHT*0.035,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colorMix.light_20
        }}>
            <View style={{
                // borderWidth: 1,
                height: HEIGHT*0.05,
                width: HEIGHT*0.05,
                borderRadius: HEIGHT*0.015,
                backgroundColor: colorMix.yellow_20,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image 
                style={{
                    height: HEIGHT*0.03,
                    width: HEIGHT*0.03
                }}
                source={shopping_icon}/>
            </View>
            <Text style={{
                marginLeft: WIDTH*0.02,
                fontWeight: 600,
                fontSize: HEIGHT*0.024
            }}>{budgetCat}</Text>
        </View>

        <Text style={{
            fontSize: HEIGHT*0.032,
            fontWeight: 500,
            marginTop: HEIGHT*0.02
        }}>Remaining</Text>
        <Text style={{
            fontSize: HEIGHT*0.09,
            fontWeight: 600
        }}>${RemainingAmnt}</Text>

<Progress.Bar progress={progress< 0 ? 1 : progress} width={WIDTH*0.8} height={HEIGHT*0.015} borderRadius={HEIGHT*0.02} color={bgColor} size={HEIGHT*0.02} thickness={HEIGHT*0.01} unfilledColor={colorMix.light_40} borderColor={colorMix.light_20} marginTop={HEIGHT*0.015} />

{isLimitExceeded && <View style={{
    // borderWidth: 1,
    height: HEIGHT*0.055,
    width: WIDTH*0.56,
    marginTop: HEIGHT*0.04,
    borderRadius: HEIGHT*0.03,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorMix.red_100,
    flexDirection: 'row'
}}>
    <Image 
    source={warning_icon_white}
    />
    <Text style={{
        marginLeft: WIDTH*0.02,
        color: colorMix.light_100
    }}>You've exceed the limit</Text>
</View>}


    </View>
    <View style={{
        paddingHorizontal: WIDTH*0.05,
        position: 'absolute',
        width: WIDTH,
        bottom: HEIGHT*0.06
    }}>
        <ButtonComponent title="Edit" onButtonHandler={()=>onEditHandler()}/>

    </View>
    <BottomSlider />

    <DeleteDetTransaction title="Remove this budget?" desc="Are you sure you wanna remove this budget?" deleteModal={deleteModal} setDeleteModal={setDeleteModal} onButtonHandler={()=>handleDeleteTrans()}/>
    </View>
  )
}

export default DetailBudgetScreen