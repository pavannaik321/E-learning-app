import { View, Text } from 'react-native'
import React from 'react'

export default function ProgressBar({contentLength,contentIndex}) {

    const arraySize=Array.from({length:contentLength},(_,index)=>index+1)
    const width = 100/contentLength;
  return (
    <View style={{padding:20 , display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      {arraySize.map((item,index)=>(
        <View  key={index} style={{backgroundColor:`${index<contentIndex+1?'#7BD3EA':'gray'}`,width:width+"%",borderRadius:10,height:10,margin:5,flex:1}}>
        </View>
      ))}
    </View>
  )
}