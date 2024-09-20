import React, { useCallback, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { HEIGHT, WIDTH } from '../constants/dimension';
import { colorMix } from '../constants/color';

const DropdownComponent = ({value, setValue, title,data,darkMode}) => {

    const [isFocus,setIsFocus] = useState (false);
    
    const handleChange = useCallback((item) => {
        setValue(item.value);
        setIsFocus(false);
      }, [setValue, setIsFocus]);

  return (
    <Dropdown style={{ height: HEIGHT*0.07, borderColor: 'gray', borderRadius: HEIGHT*0.02, paddingHorizontal: WIDTH*0.02, borderWidth: 1, marginTop: HEIGHT*0.02, borderColor: colorMix.light_20, color: colorMix.dark_100 }}
    selectedTextStyle={{fontSize: HEIGHT*0.022, color:darkMode?colorMix.light_100:colorMix.dark_100}}
    inputSearchStyle={{ height: HEIGHT*0.3, fontSize: HEIGHT*0.02,}}
    itemContainerStyle={{backgroundColor:darkMode?colorMix.dark_100:colorMix.light_100}}
    itemTextStyle={{color: darkMode?colorMix.light_100:darkMode.darkMode}}
    activeColor={darkMode?colorMix.dark_100:colorMix.light_100}
    data={data}
    maxHeight={HEIGHT*0.3}
    labelField="name"
    valueField="value"
    placeholder={title}
    placeholderStyle={{ color: colorMix.dark_25, fontSize: HEIGHT*0.02 }}
    showsVerticalScrollIndicator={false}
    value={value}
    onFocus={() => setIsFocus(true)}
    onBlur={() => setIsFocus(false)}
    onChange={handleChange} />
  )
}

export default DropdownComponent