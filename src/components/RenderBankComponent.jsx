import React from 'react'

const RenderBank = ({data,onPress,selectedBank}) => {
    const {id,name,logo,text} = data;
  
    return(
      <Pressable onPress={()=>onPress(name)} style={{ borderWidth: selectedBank===name? 1 : 0, height: HEIGHT*0.05, width: WIDTH*0.2, borderRadius: HEIGHT*0.01, justifyContent: 'center', alignItems: 'center', backgroundColor: selectedBank===name? colorMix.violet_20 : text ? colorMix.violet_20 : colorMix.light_20, borderColor: colorMix.violet_100, marginTop: HEIGHT*0.01, marginLeft: HEIGHT*0.01 }}>
        {text ? (
          <Text style={{ fontSize: HEIGHT*0.018, color: colorMix.violet_100, fontWeight: 500 }}>{text}</Text>
        ) : ( 
        <Image source={logo}/>
            )}
      </Pressable>
    )
  }

  export default RenderBank