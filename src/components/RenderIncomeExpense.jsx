import { Image, Text, View } from "react-native";
import { HEIGHT, WIDTH } from "../constants/dimension";
import { colorMix } from "../constants/color";

const RenderIncomeExpense = ({data}) => {
// console.log(totalAmount);
    const {id,image,title,amount} = data;
    // console.log(image,title,amount);
  
  return(
    <View style={{ height: HEIGHT*0.1, width: WIDTH*0.42, marginLeft: id!==0 ? WIDTH*0.055 : 0, borderRadius: HEIGHT*0.035, backgroundColor: id===0 ? colorMix.green_100 : colorMix.red_100, alignItems: 'center', paddingHorizontal: WIDTH*0.045, justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={{ height: HEIGHT*0.065, width: HEIGHT*0.065, borderRadius: HEIGHT*0.018, justifyContent: 'center', alignItems: 'center', backgroundColor: colorMix.light_100 }}>
        <Image source={image} />
        </View>
        <View style={{ marginRight: WIDTH*0.02 }}>
          <Text style={{ color: colorMix.light_100 }}>{title}</Text>
          <Text style={{ color:colorMix.light_100, fontSize: HEIGHT*0.03, fontWeight: 600 }}>${amount}</Text>
        </View>
      </View>
  
  )
  }

  export default RenderIncomeExpense