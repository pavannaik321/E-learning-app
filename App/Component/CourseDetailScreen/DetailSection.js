import { View, Text, Image, Dimensions, StyleSheet ,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import OptionItem from './OptionItem'


export default function DetailSection({ course ,UserEnrolledCourses,enrollCourse }) {
    return (
        <View style={{
            padding: 10,
            borderRadius: 15,
            backgroundColor: Colors.WHITE,
        }}>
            <Image source={{ uri: course?.banner?.url }}
                style={{
                    width: Dimensions.get('screen').width * 0.85,
                    height: 190,
                    borderRadius: 15,
                    alignSelf: 'center',
                }}
            />
            <View style={{padding:10}}>
                <Text style={{ fontSize: 24, fontFamily: 'outfit-medium' }}>
                    {course.name}
                </Text>
                <View>
                    <View style={styles.rowStyle}>
                        <OptionItem icon={'book-outline'} value={course.chapters?.length + " Chapters"} />
                        <OptionItem icon={'clock-time-three-outline'} value={course.time} />
                    </View>

                    <View style={styles.rowStyle}>
                        <OptionItem icon={'person-circle-outline'} value={course.author} />
                        <OptionItem icon={'cellular-outline'} value={course.level} />
                    </View>
                </View>
                <View>
                    <Text style={{fontFamily:'outfit-medium',fontSize:20}}>Description</Text>
                    <Text style={{fontFamily:'outfit',color:'gray',lineHeight:20}}>{course?.description?.markdown}</Text>
                </View>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    gap:20
                }}>
                    {UserEnrolledCourses?.length==0?
                    <TouchableOpacity onPress={()=>enrollCourse()} style={{padding:15,backgroundColor:Colors.PRIMARY,borderRadius:15}}>
                        <Text style={{fontFamily:'outfit',color:Colors.WHITE,textAlign:'center',fontSize:17}}>Enroll For Free</Text>
                    </TouchableOpacity>:null
                    
                }
                    <TouchableOpacity style={{padding:15,backgroundColor:'#41C9E2',borderRadius:15}}>
                        <Text style={{fontFamily:'outfit',color:Colors.WHITE,textAlign:'center',fontSize:17}}>Membership $2.99/Mon</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10

    }
})
