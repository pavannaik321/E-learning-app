import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../Component/CourseDetailScreen/DetailSection';
import ChapterSection from '../Component/CourseDetailScreen/ChapterSection';
import { ScrollView } from 'react-native-gesture-handler';
import { useUser } from '@clerk/clerk-expo';
import { enrollCourse, getUserEnrolledCourse } from '../Services';
import { CompleteChapterContext } from '../Context/CompletedChapterContext';


export default function CourseDetailScreen() {

  const {isChapterComplete, setIsChapterComplete} = useContext(CompleteChapterContext)

  const [UserEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const navigate = useNavigation();
  const params = useRoute().params;
  const { user } = useUser();
  useEffect(() => {
    if(user&&params.course){
      GetUserEnrolledCourse();
    }
  }, [params.course,user])


  useEffect(()=>{
    isChapterComplete&&GetUserEnrolledCourse()
  },[isChapterComplete])
  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress).then((res) => {
      if(res){
        GetUserEnrolledCourse();
        ToastAndroid.show('Course Enrolled successfully!', ToastAndroid.LONG);
      }
    }).catch((err) => {
      console.log(err)
    })

  }

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress).then((res) => {
      setUserEnrolledCourse(res.userEnrolledCourses)
    }).catch((err) => {
      console.log(err)
    })
  }

  return params.course && (
    <ScrollView style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity >
      <DetailSection course={params.course} UserEnrolledCourses={UserEnrolledCourse} enrollCourse={() => UserEnrollCourse()} />

      <ChapterSection chapterList={params.course.chapters} UserEnrolledCourses={UserEnrolledCourse} />

    </ScrollView>
  )
}