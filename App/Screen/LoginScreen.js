import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import Colors from '../Utils/Colors'
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from '@clerk/clerk-expo';



WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {


    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
   
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);


  return (
    <View style={{display:'flex',flex:1,alignItems:'center'}}>
      <Image source={require('../../assets/images/landing_page.jpg')} 
        style={{
            
            width:400,
            height:500,
            objectFit:'contain',
            marginTop:80
        }}
      />
      <ScrollView style={{
        height:400,
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        padding:20
      }}>
        <Text style={{textAlign:'center',
        fontSize:35,
        color:Colors.WHITE,
        fontFamily:'outfit-bold',
        marginTop:50
        }}>
            CODEBOX
        </Text>
        <Text style={{
            textAlign:'center',
            fontSize:20,
            marginTop:30,
            color:Colors.LIGHT_PRIMARY,
            fontFamily:'outfit'
    
    }}>Your Ultimate Programming Learning Box</Text>
    <TouchableOpacity
        onPress={onPress}
    style={{backgroundColor:Colors.WHITE ,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:10,
        borderRadius:50,
        marginTop:25,
        padding:10
    }}>
        <Image source={require('../../assets/images/google_logo.png')} 
        style={{width:40,height:40,}}
        />
        <Text style={{fontSize:20,color:Colors.PRIMARY,fontFamily:'outfit'}}>Sign In with Google</Text>

    </TouchableOpacity>
      </ScrollView>
    </View>
  )
}