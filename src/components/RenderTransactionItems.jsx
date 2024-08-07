import { Image, ScrollView, Text, View } from "react-native";
import { HEIGHT, WIDTH } from "../constants/dimension";
import { colorMix } from "../constants/color";
import { food_icon, income_general_icon, income_icon, shopping_icon, subscription_icon, transportation_general_icon } from "../assets";
import moment from "moment";

const RenderTransactionItems = ({data}) => {

    const {id,image,title,description,amount,createdAt,category} = data;
    // console.log("data", data);
    // console.log("category", category);
    const value ={
            "shopping": "shopping",
            "subscription":"subscription",
            "food": "food",
            "salary" : "salary",
            "transportation": "transportation"
    }

    let backgroundColor;
    switch (category) {
        case value.shopping:
            backgroundColor = colorMix.yellow_20;
            break;
        case value.subscription:
            backgroundColor = colorMix.violet_20;
            break;
        case value.food:
            backgroundColor = colorMix.red_20;
            break;
        case value.salary:
            backgroundColor = colorMix.green_20;
            break;
        case value.transportation:
            backgroundColor = colorMix.blue_20;
            break;
        default:
            backgroundColor = colorMix.light_20;
    }

    let generalIcon;
    switch (category) {
        case value.shopping:
            generalIcon = shopping_icon;
            break;
        case value.subscription:
            generalIcon = subscription_icon;
            break;
        case value.food:
            generalIcon = food_icon;
            break;
        case value.salary:
            generalIcon = income_general_icon;
            break;
        case value.transportation:
            generalIcon = transportation_general_icon;
            break;
        default:
            generalIcon = null;
    }

    const date = createdAt?.toDate ? createdAt?.toDate() : new Date(createdAt)
    const formattedTime = moment(createdAt).format('h:mm A')

    return(
        <ScrollView style={{ paddingHorizontal: WIDTH*0.07, paddingTop: HEIGHT*0.01, paddingBottom: HEIGHT*0.01 }}>
        <View style={{ borderRadius: HEIGHT*0.03, backgroundColor: colorMix.light_80, flexDirection: 'row', justifyContent: 'space-between', paddingTop: HEIGHT*0.02, paddingBottom: HEIGHT*0.02, paddingHorizontal:WIDTH*0.025 }}>
            <View style={{ flexDirection: 'row' }}>
            <View style={{ height: HEIGHT*0.08, width: HEIGHT*0.09,
            // borderWidth:1,
                borderRadius: HEIGHT*0.02,
                backgroundColor: backgroundColor , 
                justifyContent: 'center', alignItems: 'center',
            }}>
                <Image source={generalIcon}/>
            </View>
            <View style={{ justifyContent: 'space-around', marginLeft: WIDTH*0.02 }}>
                <Text style={{ fontSize: HEIGHT*0.022, color: colorMix.dark_100, fontWeight: '500' }}>{category}</Text>
                <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.018 }}>{description}</Text>
            </View>
            </View>
            <View style={{ justifyContent: 'space-around' }}>
                <Text style={{ alignSelf: 'flex-end', fontWeight: '500', color: colorMix.red_100, fontSize: HEIGHT*0.023 }}>-${amount}</Text>
                <Text style={{ color: colorMix.dark_25, fontSize: HEIGHT*0.018 }}>{formattedTime}</Text>
            </View>
        </View>
        </ScrollView>
    )
}

export default RenderTransactionItems