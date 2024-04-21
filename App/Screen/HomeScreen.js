import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Component/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Component/HomeScreen/CourseList'

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor:Colors.PRIMARY,height:250,padding:20}}>
        <Header  />
      </View>
      <View style={{
        paddingLeft:20,
        paddingBottom:20,
        paddingTop:20
      }}>
        <View style={{
          marginTop:-90,
          
        }}>
        <CourseList level={'Basic'} />
        <CourseList level={'Advance'} />
        </View>
      </View>
    </View>
  )
}