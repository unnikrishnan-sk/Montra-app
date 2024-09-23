import React from 'react'
import { Switch } from 'react-native'
import { colorMix } from '../constants/color'

const SwitchComponent = ({toggleSwitch, isEnabled}) => {

  return (
    <Switch style={{transform: [{scaleX: .8}, {scaleY: .8}]}} trackColor={{false: colorMix.violet_20, true: colorMix.violet_100}} thumbColor={ colorMix.light_100} onValueChange={toggleSwitch} value={isEnabled} />
  )
}

export default SwitchComponent