import { Image, ScrollView, Text, View } from "react-native";
import { HEIGHT, WIDTH } from "../constants/dimension";
import { colorMix } from "../constants/color";

const RenderTransactionItems = ({data}) => {

    const {id,image,title,dec,amount,time} = data;
    const value ={
            "shopping":"Shopping",
            "Subscription":"Subscription"
    }

    return(
        <ScrollView style={{ paddingHorizontal: WIDTH*0.07, paddingTop: HEIGHT*0.01, paddingBottom: HEIGHT*0.01 }}>
        <View style={{ borderRadius: HEIGHT*0.03, backgroundColor: colorMix.light_80, flexDirection: 'row', justifyContent: 'space-between', paddingTop: HEIGHT*0.02, paddingBottom: HEIGHT*0.02, paddingHorizontal:WIDTH*0.025 }}>
            <View style={{ flexDirection: 'row' }}>
            <View style={{ height: HEIGHT*0.08, width: HEIGHT*0.09,
                borderRadius: HEIGHT*0.02,
                backgroundColor: title===value.shopping ?  colorMix.yellow_20 : title===value.Subscription ?  colorMix.violet_20 : colorMix.red_20, justifyContent: 'center', alignItems: 'center',
            }}>
                <Image source={image}/>
            </View>
            <View style={{ justifyContent: 'space-around', marginLeft: WIDTH*0.02 }}>
                <Text style={{ fontSize: HEIGHT*0.022, color: colorMix.dark_100, fontWeight: 500 }}>{title}</Text>
                <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.018 }}>{dec}</Text>
            </View>
            </View>
            <View style={{ justifyContent: 'space-around' }}>
                <Text style={{ alignSelf: 'flex-end', fontWeight: 500, color: colorMix.red_100, fontSize: HEIGHT*0.023 }}>-${amount}</Text>
                <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.018 }}>{time}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default RenderTransactionItems