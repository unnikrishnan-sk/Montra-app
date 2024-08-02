import { Image, Pressable, Text } from "react-native";
import { HEIGHT, WIDTH } from "../constants/dimension";
import { colorMix } from "../constants/color";

const RenderKeyboard = ({data,onPress,onPressImage}) => {
    const {id,value,type,image} = data;
    const values ={
        "number":"Number",
}
    return(
        <>
            {type===values.number ? (
                <Pressable style={{ width: WIDTH*0.33,height: HEIGHT*0.11, justifyContent: 'center', alignItems: 'center' }} onPress={()=>onPress(value)} >
                <Text style={{ fontSize: HEIGHT*0.06, color: colorMix.light_100, fontWeight: 500 }}>{value}</Text>
                </Pressable>
            ) : (
                <Pressable style={{ width: WIDTH*0.33, height: HEIGHT*0.11, justifyContent: 'center', alignItems: 'center' }} onPress={()=>onPressImage()} >
            <Image style={{ height: HEIGHT*0.038, width: WIDTH*0.11 }} source={image} />
            </Pressable>
        )}
        </>
    )
}

export default RenderKeyboard