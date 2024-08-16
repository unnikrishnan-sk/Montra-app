import { Image, Pressable, Text, View } from "react-native";
import { colorMix } from "../constants/color";
import { HEIGHT, WIDTH } from "../constants/dimension";

const RenderProfileItems = ({data,navigation}) => {

    const {id, icon, name, route } = data;
    return(
        <>
        <Pressable
        onPress={()=>navigation.navigate(route)}
         style={{
                backgroundColor: colorMix.light_100,
                // borderWidth: 1,
                borderBottomWidth: 0.5,
                borderTopRightRadius: id===0 ? HEIGHT*0.02 : 0,
                borderTopLeftRadius: id===0 ? HEIGHT*0.02 : 0,
                borderBottomLeftRadius: id===3 ? HEIGHT*0.02 : 0,
                borderBottomRightRadius: id===3 ? HEIGHT*0.02 : 0,
                borderColor: colorMix.light_20
                // borderRadius: HEIGHT*0.02,
               
            }}>
                <View style={{
                    // borderWidth: 1,
                    flexDirection: 'row',
                    paddingHorizontal: WIDTH*0.05,
                    paddingVertical: WIDTH*0.05
                }}>
        <View style={{
            // borderWidth: 1,
            height: HEIGHT*0.06,
            width: HEIGHT*0.06,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: HEIGHT*0.01,
            backgroundColor: name=== 'Logout' ? colorMix.red_20 : colorMix.violet_20
        }}>
           
            <Image 
            style={{
                height: HEIGHT*0.03,
                width: HEIGHT*0.03
            }}
            source={icon}
            />
        </View>
            <Text style={{
                fontSize: HEIGHT*0.022,
                fontWeight: 600,
                marginLeft: WIDTH*0.04,
                alignSelf: 'center'
            }}>{name}</Text>
            </View>
            </Pressable>
            </>
    )
}

export default RenderProfileItems