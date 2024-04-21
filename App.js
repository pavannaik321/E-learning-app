import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut  } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import { CompleteChapterContext } from './App/Context/CompletedChapterContext';
import { useState } from 'react';


// EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_aHVtYW5lLWJsb3dmaXNoLTAuY2xlcmsuYWNjb3VudHMuZGV2JA

export default function App() {
  const [isChapterComplete, setIsChapterComplete] = useState(false)
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
  });
  return (
    <ClerkProvider publishableKey={"pk_test_aHVtYW5lLWJsb3dmaXNoLTAuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <CompleteChapterContext.Provider value={{isChapterComplete,setIsChapterComplete}}>

    <View style={styles.container}>
        {/* if he is signed in  */}
      <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>

        {/* if he is signed out  */}
        <SignedOut>
      <LoginScreen />
        </SignedOut>
    </View>
      </CompleteChapterContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop:20
  },
});
