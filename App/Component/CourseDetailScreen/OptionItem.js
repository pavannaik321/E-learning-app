import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function OptionItem({icon,value}) {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 5
    }}>
        {icon=="clock-time-three-outline"?
        <MaterialCommunityIcons name={icon} size={24} color="black" />:
        <Ionicons name={icon} size={24} color="black" />
    }
        <Text style={{fontFamily:'outfit'}}>{value}</Text>
    </View>
  )
}