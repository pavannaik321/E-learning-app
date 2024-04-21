import { View, Text, ToastAndroid, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Content from '../Component/ChapterContent/Content'
import { useRoute } from '@react-navigation/native'
import { MarkChapterCompleted } from '../Services'
import { useNavigation } from '@react-navigation/native'
import { CompleteChapterContext } from '../Context/CompletedChapterContext'

export default function ChapterContentScreen() {
  const {isChapterComplete, setIsChapterComplete} = useContext(CompleteChapterContext)
  const param = useRoute().params;
  const navigation = useNavigation()
  // we need chapter id and record id
  const onChapterFinish=()=>{

    MarkChapterCompleted(param.chapterId,param.userCourseRecordId).then((res)=>{
        console.log(res)
        ToastAndroid.show("Congratulation!!!",ToastAndroid.LONG)
        setIsChapterComplete(true)
        navigation.goBack();
    }).catch((err)=>{
        console.log(err)
        ToastAndroid.show("Error!!!",ToastAndroid.LONG)
    })
}

  return param.content&&(

    <ScrollView showsVerticalScrollIndicator={false}>
      <Content content={param.content} onChapterFinish={()=>onChapterFinish()} />
    </ScrollView>
  )
}