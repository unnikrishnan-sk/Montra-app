import { Pressable, Text } from "react-native";
import { HEIGHT, WIDTH } from "../constants/dimension";
import { colorMix } from "../constants/color";

const RenderTimeframe = ({data,setOnPressed, onPressed}) => {

    const {id,title} = data;
  
    return(
      <Pressable onPress={()=>setOnPressed(id)}
      style={{ paddingTop: HEIGHT*0.01, paddingBottom: HEIGHT*0.01, paddingLeft: WIDTH*0.05, paddingRight: WIDTH*0.05, borderRadius: HEIGHT*0.02, backgroundColor: onPressed===id ? colorMix.yellow_20 : colorMix.light_100, marginLeft: id!==0 ? WIDTH*0.03 : 0  }}>
        <Text style={{ color: onPressed===id ? colorMix.yellow_100 : colorMix.dark_25, fontWeight: 600 }}>{title}</Text>
      </Pressable>
    )
  }

  export default RenderTimeframe