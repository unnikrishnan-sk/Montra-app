import { Image, Pressable, Text, View } from "react-native";
import { colorMix } from "../constants/color";
import { HEIGHT, WIDTH } from "../constants/dimension";
import auth from '@react-native-firebase/auth';
import { useEffect, useState } from "react";

const RenderProfileItems = ({data,navigation,darkMode}) => {

    const {id, icon, name, route } = data;
    const [user,setUser] = useState();

    // useEffect(()=>{
    //     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //     return subscriber;
    // },[])

    // function onAuthStateChanged(user){
    //     setUser(user)
    // }

    // useEffect(()=>{
    //     if(!user){
    //         navigation.navigate('login')
    //     }
    // },[user,navigation])

    const onProfileDetPress = () => {
        if(name==="Logout"){
            auth().signOut().then(()=>console.log("User signed out"))
            navigation.navigate('login')
        }else{
            navigation.navigate(route)
        }
    }
    return(
        <>
        <Pressable onPress={()=>onProfileDetPress()}
         style={{ backgroundColor: darkMode?colorMix.dark_50:colorMix.light_100, borderBottomWidth: 0.5, borderTopRightRadius: id===0 ? HEIGHT*0.02 : 0, borderTopLeftRadius: id===0 ? HEIGHT*0.02 : 0, borderBottomLeftRadius: id===3 ? HEIGHT*0.02 : 0, borderBottomRightRadius: id===3 ? HEIGHT*0.02 : 0, borderColor: colorMix.light_20 }}>

            <View style={{ flexDirection: 'row', paddingHorizontal: WIDTH*0.05, paddingVertical: WIDTH*0.05 }}>

            <View style={{ height: HEIGHT*0.06, width: HEIGHT*0.06, justifyContent: 'center', alignItems: 'center', borderRadius: HEIGHT*0.01, backgroundColor: name=== 'Logout' ? colorMix.red_20 : colorMix.violet_20 }}>
           
            <Image style={{ height: HEIGHT*0.03, width: HEIGHT*0.03 }}
            source={icon}/>

            </View>
                <Text style={{ fontSize: HEIGHT*0.022, fontWeight: 600, marginLeft: WIDTH*0.04, alignSelf: 'center', color:darkMode?colorMix.light_100:colorMix.dark_100 }}>{name}</Text>
            </View>

            </Pressable>
        </>
    )
}

export default RenderProfileItems