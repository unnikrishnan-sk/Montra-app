import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { WIDTH } from '../constants/dimension'
import { colorMix } from '../constants/color'
import { noExpMnthChartData } from '../constants/dummyData'
import { expenseArr } from '../http/api'

const GraphDataComponent = ({centerTab,value}) => {

    const [graphData,setGraphData] = useState(noExpMnthChartData);

    useEffect(()=>{
        getGraphData(value);
    },[value])

    const getGraphData = async (value) => {
        const expensess = await expenseArr(value);
        const graphArr = expensess.map(item => ({['value']: parseFloat(item.amount)}))
      if(graphArr.length>0){
        setGraphData(graphArr)
      }else{
        setGraphData(noExpMnthChartData)
      }
    }
    // console.log(graphData);

  return (
    <View style={{ marginLeft: -WIDTH*0.1 }}>
    <LineChart areaChart data={graphData} style={{ marginLeft: WIDTH*0.1 }} spacing={graphData.length<5 ?WIDTH : WIDTH*0.2} initialSpacing={0} thickness={6} hideAxesAndRules hideDataPoints width={WIDTH} curved startFillColor={colorMix.violet_80} endFillColor={centerTab ? colorMix.violet_20 : colorMix.violet_20}  startOpacity={0.4} endOpacity={0.1} color={colorMix.violet_100}/>
   </View>
  )
}

export default GraphDataComponent