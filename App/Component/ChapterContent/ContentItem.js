import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import RenderHTML from 'react-native-render-html'
import Colors from '../../Utils/Colors'

export default function ContentItem({ description, output }) {
    const [isRun, setisRun] = useState(false)
    const width = useWindowDimensions()
    console.log(description)

    // content for html code input
    const descriptionSource = {
        html: description
    }

    // content for html code output
    const outputSource = {
        html: output
    }



    return (
        <View>
            <RenderHTML
                contentWidth={width}
                source={descriptionSource}
                tagsStyles={tagsStyles}
            />
            {
                output != null ? <TouchableOpacity onPress={()=>setisRun(true)} >
                    <Text style={{
                        padding: 15,
                        backgroundColor: Colors.PRIMARY,
                        color: Colors.WHITE,
                        borderRadius: 10,
                        textAlign: 'center',
                        fontSize: 15,
                        fontFamily: 'outfit',
                        width: 100,
                        marginBottom:20

                    }}>Run</Text>
                </TouchableOpacity> : null
            }
            {isRun?
            <View >
            <Text style={{fontFamily:'outfit-medium',fontSize:17,marginBottom:10}}>Output</Text>
            <RenderHTML
                contentWidth={width}
                source={outputSource}
                tagsStyles={outputStyles}
            />
        </View>:null
        }
            
        </View>
    )
}

const tagsStyles = {
    body: {
        fontFamily: 'outfit',
        fontSize: 17
    },
    code: {
        backgroundColor: Colors.BLACK,
        color: Colors.WHITE,
        padding: 20,
        borderRadius: 15,
    }
}
const outputStyles = {
    body: {
        fontFamily: 'outfit',
        backgroundColor: Colors.BLACK,
        color: Colors.WHITE,
        padding: 20,
        borderRadius: 15,
        fontSize: 17
    },
    code: {
        backgroundColor: Colors.BLACK,
        color: Colors.WHITE,
        padding: 20,
        borderRadius: 15,
    }
}