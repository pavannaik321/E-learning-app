import { View, Text, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import ContentItem from './ContentItem'
import Colors from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'


export default function Content({ content,onChapterFinish }) {
    const [activeIndex, setactiveIndex] = useState(0)
    const navigation = useNavigation()
    console.log("content page : " + content)
    let contentRef;
    

    const OnNextBtnPress=(index)=>{
        if(content?.length<=index+1){
            onChapterFinish()
            // navigation.goBack();
            return
        }
        setactiveIndex(index+1)
        contentRef.scrollToIndex({animated:true,index:index+1})
    }
    return (
        <View>
            <ProgressBar contentLength={content?.length}
                contentIndex={activeIndex}
            />
            <FlatList
                data={content}
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={(ref)=>{
                    contentRef=ref
                }}
                renderItem={({ item, index }) => (
                    <ScrollView key={index} style={{
                        width:Dimensions.get('screen').width,
                        padding:20
                    }}>
                        <Text
                        style={{
                            fontFamily:'outfit-medium',
                            fontSize:22,
                            marginTop:15,
                        }}
                        >{item.heading}</Text>
                        <ContentItem description={item?.description?.html}
                                     output={item?.output?.html}
                        />
                        <TouchableOpacity onPress={()=>OnNextBtnPress(index)}>
                            <Text style={{
                                marginTop:15,
                                padding:10,backgroundColor:Colors.PRIMARY,color:Colors.WHITE,borderRadius:10,textAlign:'center',fontFamily:'outfit',fontSize:17
                                }}>
                                    {
                                        (content?.length>index+1)?'Next':'Finish'
                                    }
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            />


        </View>
    )
}