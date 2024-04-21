import { View, Text,TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { CompleteChapterContext } from '../../Context/CompletedChapterContext';


export default function ChapterSection({ chapterList , UserEnrolledCourses }) {

    const {isChapterComplete, setIsChapterComplete} = useContext(CompleteChapterContext)
    
    const navigation = useNavigation();
    console.log(UserEnrolledCourses[0]?.completedChapter)

    const checkIsChapterCompleted=(chapterId)=>{
        if(UserEnrolledCourses[0]?.completedChapter?.length<=0){
            return false;
        }
        const resp=UserEnrolledCourses[0]?.completedChapter.find(item=>item.chapterId==chapterId);
        if(resp){
            return true
        }
    }
    const OnChapterPress = (chapter) => {
        if(UserEnrolledCourses.length==0){
            ToastAndroid.show('Please Enroll Course!', ToastAndroid.LONG);
            return;
        }
        else{
            setIsChapterComplete(false)
            navigation.navigate('chapter-content',{
                content:chapter.content,
                chapterId:chapter.id,
                userCourseRecordId:UserEnrolledCourses[0]?.id
            })
        }
    }



    return chapterList&&(
        <View style={{
            padding:10,
            backgroundColor:Colors.WHITE,
            borderRadius:15,
            marginTop:10,
            marginBottom:10
        }}>
            <Text style={{
                fontFamily:'outfit-medium',
                fontSize:22,
            }}>Chapters</Text>
            {chapterList.map((item, index) => (
                <TouchableOpacity
                onPress={()=>OnChapterPress(item)}
                key={index} style={[checkIsChapterCompleted(item.id)?styles.CompleterChapter:styles.inCompleterChapter]}>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    gap:10
                }}>
                    {checkIsChapterCompleted(item.id)?
                    <Ionicons name="checkmark-done-circle" size={24} color="#65B741" />
                    :
                    
                    <Text style={{
                        fontFamily:'outfit-medium',
                        fontSize:27,
                        color:'gray'
                    }} >{index+1}</Text>
                    }
                    <Text style={[{
                        fontFamily:'outfit',
                        fontSize:21,    
                    },checkIsChapterCompleted(item.id)?{color:'#65B741'}:{color:'gray'}]}>{item.title}</Text>
                </View>
                {
                    UserEnrolledCourses.length==0?
                    <Ionicons name="lock-closed" size={30} color={Colors.GRAY} />:
                    <Ionicons name="play" size={30} color={checkIsChapterCompleted(item.id)?'#65B741':Colors.GRAY} />
                }
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
  inCompleterChapter:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'space-between',
    padding:15,
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
    borderColor:'gray'
},
CompleterChapter:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'space-between',
    padding:15,
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
    borderColor:'#65B741',
    backgroundColor:'#C1F2B0'
}
})
