import { View, Text, Image, StyleSheet,TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const { isLoaded, isSignedIn, user } = useUser();
    return isLoaded && (
        <View>
        <View style={[{ justifyContent: 'space-between' }, styles.rowStyle]}>
            <View style={[styles.rowStyle,{gap: 10}]}>
                <Image source={{ uri: user?.imageUrl }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <View>
                    <Text style={{ color: Colors.WHITE, fontFamily: 'outfit' }}>Welcome,</Text>
                    <Text style={styles.mainText}>{user?.fullName}</Text>
                </View>
            </View>
            <View style={styles.rowStyle}>
                <Image source={require('../../../assets/images/coin.png')} style={{ width: 50, height: 50 }} />
                <Text style={styles.mainText}>3500</Text>
            </View>
        </View>
        <View style={{backgroundColor:Colors.WHITE,paddingLeft:20,display:'flex',flexDirection:'row',justifyContent:'space-between',borderRadius:50,paddingRight:5,marginTop:25}}>
            <TextInput placeholder='Search Cources' style={{fontFamily:'outfit',fontSize:18}}/>
            <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainText: {
        color: Colors.WHITE,
        fontSize: 20,
        fontFamily: 'outfit'
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
